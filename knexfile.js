// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

import dotenv from 'dotenv'

dotenv.config()

export default {

  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      name:process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port : process.env.DB_PORT
    },
    migrations: {
      directory: './src/models/migrations'
    }
  }

 
};
