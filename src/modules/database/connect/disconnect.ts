import { MongoClient } from "mongodb";

let client: MongoClient | null = null;

// Função para desconectar do banco de dados
export async function disconnectDB() {
  if (client) {
    await client.close();
    console.log("Desconectado do MongoDB");
    client = null;
  }
}
