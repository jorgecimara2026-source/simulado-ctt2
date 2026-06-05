import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Safe API Route for Nursing Assistant AI
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "O parâmetro 'messages' é obrigatório e deve ser um array." });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(200).json({
          isConfigError: true,
          text: "⚠️ **Chave de API não configurada**\n\nA chave `GEMINI_API_KEY` não está configurada no servidor.\n\nPor favor, adicione-a no painel do AI Studio acessando o menu de configurações do projeto (**Configurações > Secrets** ou **Settings > Secrets**)."
        });
      }

      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      // Map roles from client-side format to Gemini expected format: 'user' and 'model'
      const contents = messages.map((m: any) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }]
      }));

      const systemInstruction = 
        `Você é o Monitor de Enfermagem IA do CTT (Colégio Técnico de Teresina - UFPI). 
Sua missão é ajudar os alunos do Curso Técnico em Enfermagem a tirarem dúvidas acadêmicas de forma didática, precisa e profissional.

Diretrizes importantes:
1. Responda em português brasileiro com tom empático, educador e rigorosamente correto.
2. Siga as orientações oficiais do COFEN (Conselho Federal de Enfermagem) e do Ministério da Saúde.
3. Se um cálculo de gotejamento ou dosagem for solicitado, mostre a fórmula e o desenvolvimento passo a passo (utilizando fórmulas como: Gotas/min = Volume / (Tempo * 3) ou Microgotas/min = Volume / Tempo).
4. Organize as respostas usando cabeçalhos claros, listas ordenadas ou tabelas em Markdown para facilitar a leitura.
5. Se for perguntado algo fora do escopo da saúde ou da enfermagem, com educação foque nas dúvidas de enfermagem.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        },
      });

      const replyText = response.text || "Não consegui obter uma resposta adequada da inteligência artificial.";
      res.json({ text: replyText });
    } catch (err: any) {
      console.error("Erro na integração com Gemini:", err);
      res.status(500).json({ error: err.message || "Erro desconhecido ao processar petição da IA." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
