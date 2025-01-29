import { ObjectId } from "mongodb";
import { getCollection } from "../../../utils/db/collectionHelper";
import { connectDB } from "../connect";
import { IUser } from "./interfaces/IUser";

// Função para obter um usuário pelo ID
export async function findUserById(id: string): Promise<IUser | null> {
  const db = await connectDB();
  const collection = await getCollection<IUser>(db, "users");
  return await collection.findOne({ _id: new ObjectId(id) });
}
