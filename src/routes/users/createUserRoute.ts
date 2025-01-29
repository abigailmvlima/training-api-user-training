import { Request, Response } from "express";
import { createNewUser } from "../../usercases/users/createUser";

// Função responsável por criar um novo usuário
export const createUserRoute = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const response = await createNewUser(req.body);

    if (response.status === 400) {
      return res.status(400).json(response.data);
    }

    return res.status(201).json(response.data);
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: "Erro ao criar usuário", error: error.message });
  }
};
