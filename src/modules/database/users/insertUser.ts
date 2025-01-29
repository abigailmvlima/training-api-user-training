import { InsertOneResult } from "mongodb";
import { getCollection } from "../../../utils/db/collectionHelper";
import { connectDB } from "../connect";
import { IUser } from "./interfaces/IUser";

// Função para inserir um novo usuário
export async function insertUser(
  userData: IUser
): Promise<InsertOneResult<IUser>> {
  const db = await connectDB();
  const collection = await getCollection<IUser>(db, "users");
  userData.createdAt = new Date();
  return await collection.insertOne(userData);
}
