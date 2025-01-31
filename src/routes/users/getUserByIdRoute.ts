import { Request, Response } from "express";
import { getUserById } from "../../usercases/users/getUserById";

// Função responsável por buscar um usuário pelo ID
export const getUserByIdRoute = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const response = await getUserById(req.params.id);

    if (response.status === 404) {
      return res.status(404).json(response.data);
    }

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar usuário", error });
  }
};
