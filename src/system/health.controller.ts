import { Request, Response } from 'express'
import { INTERNAL_SERVER_ERROR, OK } from 'http-codes'
import { prisma } from '@/app'
import { Prisma } from '@prisma/client'

class HealthController {
  public handle (_req: Request, res: Response): void {
    prisma.$queryRaw(Prisma.sql`SELECT 1+1`)
      .then(() => res.status(OK).json({ data: 'Working' }))
      .catch(() => res.status(INTERNAL_SERVER_ERROR).json({ data: 'Not Working' }))
  }
}

export const healthController = new HealthController()
