const server = require('./server')
const PORT = process.env.PORT || 8080
server.listen(PORT, '127.0.0.1', () => {
    console.log(`This app running on Port:${PORT}`)
})