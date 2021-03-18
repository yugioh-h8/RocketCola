const express = require('express')
const app = express()
const http = require('http').createServer(app)
const port = process.env.PORT || 3000

http.listen(port, function () {
  console.log(`you are listening on port ${port}`)
})