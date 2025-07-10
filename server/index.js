const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");
const fs = require("fs");
const faiss = require("faiss-node");

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

// ===== Load tài liệu và xử lý =====
const text = fs.readFileSync("./data/data.txt", "utf-8");

const chunkText = (text, chunkSize = 300) => {
  const sentences = text.split(".");
  const chunks = [];
  let current = "";

  for (let sentence of sentences) {
    if ((current + sentence).length < chunkSize) {
      current += sentence + ".";
    } else {
      chunks.push(current.trim());
      current = sentence + ".";
    }
  }
  if (current) chunks.push(current.trim());
  return chunks;
};

let chunks = chunkText(text);
let chunkEmbeddings = [];
let texts = [];

const createEmbedding = async (text) => {
  const res = await openai.createEmbedding({
    model: "text-embedding-3-small",
    input: text,
  });
  return res.data.data[0].embedding;
};

let index = null;

const buildVectorIndex = async () => {
  console.log("Đang xây FAISS index...");
  for (let chunk of chunks) {
    const emb = await createEmbedding(chunk);
    chunkEmbeddings.push(emb);
    texts.push(chunk);
  }

  const dim = chunkEmbeddings[0].length;
  index = new faiss.IndexFlatL2(dim);
  const matrix = new Float32Array(chunkEmbeddings.flat());
  index.add(matrix, { rows: chunkEmbeddings.length });
  console.log("FAISS index đã sẵn sàng.");
};

app.post("/ask", async (req, res) => {
  const userQuestion = req.body.question;
  const questionEmbedding = await createEmbedding(userQuestion);

  const topK = 3;
  const results = index.search(new Float32Array(questionEmbedding), topK);

  const relevantTexts = results.ids
    .map((i) => texts[i])
    .filter(Boolean)
    .join("\n");

  const finalPrompt = `
Bạn là trợ lý AI và CHỈ được phép trả lời dựa trên nội dung sau:
${relevantTexts}

Câu hỏi: ${userQuestion}
Nếu không có thông tin trong tài liệu, hãy nói "Tôi không biết".
`;

  const chat = await openai.createChatCompletion({
    model: "gpt-4",
    temperature: 0,
    messages: [
      { role: "system", content: "Bạn là trợ lý AI chỉ trả lời theo tài liệu." },
      { role: "user", content: finalPrompt },
    ],
  });

  res.json({ answer: chat.data.choices[0].message.content });
});

const PORT = 5000;
app.listen(PORT, async () => {
  await buildVectorIndex();
  console.log(`Server đang chạy ở http://localhost:${PORT}`);
});
