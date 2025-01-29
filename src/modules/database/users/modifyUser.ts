import { UpdateResult, ObjectId } from "mongodb";
import { getCollection } from "../../../utils/db/collectionHelper";
import { IUser } from "./interfaces/IUser";
import { connectDB } from "../connect";

// Função para atualizar os dados de um usuário pelo ID
export async function modifyUser(
  id: string,
  userData: Partial<IUser>
): Promise<UpdateResult> {
  const db = await connectDB();
  const collection = await getCollection<IUser>(db, "users");
  return await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: userData }
  );
}
