/**
 * Arquivo: src/server.ts
 * Descrição: Este arquivo é responsável por inicializar o servidor Express.
 */

import app from "./app";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
