import { UpdateResult, ObjectId, DeleteResult } from "mongodb";
import { getCollection } from "../../../utils/db/collectionHelper";
import { IUser } from "./interfaces/IUser";
import { connectDB } from "../connect";

// Função para deletar um usuário pelo ID
export async function deleteUserById(id: string): Promise<DeleteResult> {
  const db = await connectDB();
  const collection = await getCollection<IUser>(db, "users");
  return await collection.deleteOne({ _id: new ObjectId(id) });
}
