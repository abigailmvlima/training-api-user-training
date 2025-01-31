import { findAllUsers } from "../../modules/database/users/findAllUsers";

// Função para buscar todos os usuários
export async function getAllUsers() {
  const users = await findAllUsers();
  if (!users || users.length === 0) {
    return {
      status: 404,
      data: { message: "Nenhum usuário encontrado" },
    };
  }
  return {
    status: 200,
    data: users,
  };
}
