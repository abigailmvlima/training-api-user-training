import { Collection, Db } from "mongodb";

// Função genérica para obter uma coleção específica do banco de dados
export async function getCollection<T extends Document>(
  db: Db,
  collectionName: string
): Promise<Collection<T>> {
  return db.collection<T>(collectionName);
}
