import { Request, Response } from 'express'
import { OK } from 'http-codes'
import { prisma } from '@/app'
import { Prisma } from '@prisma/client'

class WelcomeController {
  public async handle (_req: Request, res: Response): Promise<void> {
    res
      .status(OK)
      .json(await prisma.$queryRaw(Prisma.sql`SELECT 1+1 as result`))
  }
}

export const welcomeController = new WelcomeController()