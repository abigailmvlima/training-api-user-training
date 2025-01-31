import { getCollection } from "../../../utils/db/collectionHelper";
import { connectDB } from "../connect";
import { IUser } from "./interfaces/IUser";

// Função para obter todos os usuários do banco de dados
export async function findAllUsers(): Promise<IUser[]> {
  const db = await connectDB();
  const collection = await getCollection<IUser>(db, "users");
  return await collection.find({}).toArray();
}
