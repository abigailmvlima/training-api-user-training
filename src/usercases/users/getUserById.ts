import { findUserById } from "../../modules/database/users/findUserById";

export async function getUserById(id: string) {
  const user = await findUserById(id);
  if (!user) {
    return {
      status: 404,
      data: { message: "Usuário não encontrado" },
    };
  }
  return {
    status: 200,
    data: user,
  };
}
