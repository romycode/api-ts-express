import { Request, Response } from "express";
import { OK } from "http-codes";

class HealthController {
  public handle(_req: Request, res: Response): void {
    res.status(OK).json({ data: "Working" });
  }
}

export const healthController = new HealthController();
