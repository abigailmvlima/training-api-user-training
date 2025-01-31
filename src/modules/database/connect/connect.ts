import { Db, MongoClient } from "mongodb";

let client: MongoClient;
let database: Db;
// Função para conectar ao banco de dados, reutilizando a conexão existente
export async function connectDB(): Promise<Db> {
  const uri = process.env.MONGO_URI || "";
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
    database = client.db("databaseName");
    console.log("Conectado ao MongoDB");
  }
  return database;
}
