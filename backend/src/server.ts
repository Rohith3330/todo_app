import Fastify from 'fastify'
import cors from '@fastify/cors'

const fastify = Fastify({ logger: true })

await fastify.register(cors, {
  origin: true,
})

fastify.get('/api/health', async (request, reply) => {
  return { status: 'ok', service: 'Todo_app' }
})

const port = parseInt(process.env.PORT || '3000', 10)
const address = await fastify.listen({ port, host: '0.0.0.0' })
fastify.log.info(`Server listening on ${address}`)
