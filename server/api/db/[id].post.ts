import { z } from 'zod'
import { zh } from 'h3-zod'

export default defineEventHandler(async (event) => {
  const prisma = event.context.prisma

  const { id } = await zh.useValidatedParams(
    event,
    z.object({
      id: z.string(),
    }),
  )

  const body = await zh.useValidatedBody(
    event,
    z.object({
      description: z.string(),
      details: z.string(),
    }),
  )

  return await prisma.example.create({ data: { id, ...body } })
})
