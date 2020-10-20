const server = require('./server')
const PORT = process.env.PORT || 8080
server.listen(PORT, '0.0.0.0', () => {
    console.log(`This app running on http://localhost:${PORT}`)
})