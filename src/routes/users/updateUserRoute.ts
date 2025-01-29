import { Request, Response } from "express";
import { updateExistingUser } from "../../usercases/users/updateUser";

// Função responsável por atualizar um usuário pelo ID
export const updateUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const response = await updateExistingUser(req.params.id, req.body);
    if (response.status === 404) {
      return res.status(404).json(response.data);
    }
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar usuário", error });
  }
};
