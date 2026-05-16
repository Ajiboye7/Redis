import 'server-only'
import { createClient } from 'redis'

let client

export async function getRedisClient() {
  if (!client) {
    client = createClient({
      username: 'default',
      password: process.env.REDIS_PW,
      socket: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
      },
    })

    client.on('error', (err) =>
      console.log('Redis Client Error', err)
    )

    await client.connect()
  }

  return client
}