import { Request, Response } from "express";
import { removeUserById } from "../../usercases/users/deleteUser";

// Função responsável por deletar um usuário pelo ID
export const deleteUserRoute = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const response = await removeUserById(req.params.id);
    if (response.status === 404) {
      return res.status(404).json(response.data);
    }
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar usuário", error });
  }
};
