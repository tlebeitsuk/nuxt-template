import { z } from 'zod'

const Pokemon = z.object({
  name: z.string(),
  weight: z.number(),
  sprites: z.object({
    front_default: z.string(),
  }),
})

export default defineEventHandler(async () => {
  const data = await $fetch('https://pokeapi.co/api/v2/pokemon/pikachu')

  return Pokemon.parse(data)
})
