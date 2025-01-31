import { insertUser } from "../../modules/database/users/insertUser";

export async function createNewUser(userData: any) {
  const newUser = await insertUser(userData);
  if (!newUser.insertedId) {
    return {
      status: 400,
      data: { message: "Erro ao criar usuário" },
    };
  }
  return {
    status: 201,
    data: { message: "Usuário criado com sucesso", userId: newUser.insertedId },
  };
}
