import { Request, Response } from "express";
import { OK } from "http-codes";

class WelcomeController {
  public handle(_req: Request, res: Response): void {
    res.status(OK).json({ data: "Welcome to ExpressJS API" });
  }
}

export const welcomeController = new WelcomeController();