import { Request, Response } from "express"
import { OK } from "http-codes"

export const healthController = (_req: Request, res: Response): void => {
    res.status(OK).json({data: "Working"})
}