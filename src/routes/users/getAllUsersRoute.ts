import { Request, Response } from "express";
import { getAllUsers } from "../../usercases/users/getAllUsers";

// Função responsável por buscar todos os usuários
export const getAllUsersRoute = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const response = await getAllUsers();
    if (response.status === 404) {
      return res.status(404).json(response.data);
    }
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao buscar usuários", error });
  }
};
