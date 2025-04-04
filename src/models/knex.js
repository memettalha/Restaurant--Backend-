import knex from 'knex'
import knexfile from '../../knexfile.js'

const env = 'development'
const config = knexfile[env]

export default knex(config)