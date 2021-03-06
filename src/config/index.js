require('dotenv').config()

const config = {
  port: process.env.PORT,
  databaseUrl: process.env.DATABASE_URL,
  sentryDns: process.env.SENTRY_DNS_URL,
  redisUrl: process.env.REDIS_URL
}

module.exports = { config }
