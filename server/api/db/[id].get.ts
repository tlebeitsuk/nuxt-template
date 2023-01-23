import { z } from 'zod'
import { zh } from 'h3-zod'

export default eventHandler(async (event) => {
  const prisma = event.context.prisma

  const { id } = await zh.useValidatedParams(
    event,
    z.object({
      id: z.string(),
    }),
  )

  return await prisma.example.findFirst({ where: { id } })
})
