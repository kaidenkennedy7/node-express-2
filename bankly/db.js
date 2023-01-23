/** Database setup for jobly. */

const { Client } = require('pg')
const { DB_URI } = require('./config')

// ### BUG 5?? Not sure -
// const client = new Client(DB_URI); //<-- old code
const client = new Client({ connectionString: DB_URI })

client.connect()

module.exports = client