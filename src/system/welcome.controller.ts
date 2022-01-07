import {Request, Response} from "express";
import {OK} from "http-codes";
import {prisma} from "@/app";

class WelcomeController {
    public async handle(_req: Request, res: Response): Promise<void> {
        res
            .status(OK)
            .json( await prisma.user.findMany() );
    }
}

export const welcomeController = new WelcomeController();