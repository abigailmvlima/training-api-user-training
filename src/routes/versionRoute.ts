import { Request, Response } from "express";

export const versionRoute = async (
  req: Request,
  res: Response
): Promise<any> => {
  return res.status(200).json({
    version: "1.0.0",
  });
};
