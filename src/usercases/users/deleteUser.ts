import { deleteUserById } from "../../modules/database/users/deleteUserById";

export async function removeUserById(id: string) {
  const deletedUser = await deleteUserById(id);
  if (!deletedUser.deletedCount) {
    return {
      status: 404,
      data: { message: "Usuário não encontrado" },
    };
  }
  return {
    status: 200,
    data: { message: "Usuário deletado com sucesso" },
  };
}
