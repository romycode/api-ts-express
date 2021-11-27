import { Request, Response } from "express";
import { OK } from "http-codes";

export const welcomeController = (_req: Request, res: Response): void => {
  res.status(OK).json({ data: "Welcome to ExpressJS API" });
};
