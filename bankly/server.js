/** Server for bank.ly. */

const app = require('./app')
// Imported PORT from config file
const { PORT } = require('./config')

// ### BUG 4? Post is configured in the config.js file.
// app.listen(3000, () => { //<-- old code
app.listen(PORT, () => {
	console.log(`Server starting on port 3000`)
})