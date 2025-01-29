import { modifyUser } from "../../modules/database/users/modifyUser";

export async function updateExistingUser(id: string, userData: any) {
  const updatedUser = await modifyUser(id, userData);
  if (!updatedUser.matchedCount) {
    return {
      status: 404,
      data: { message: "Usuário não encontrado" },
    };
  }
  return {
    status: 200,
    data: { message: "Usuário atualizado com sucesso" },
  };
}
