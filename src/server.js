const { SERVER_PORT } = require('./4-framework/envs/server')

const express = require('express')
const app = express()

const routes = require('./4-framework/routes')
app.use(routes)

app.listen(SERVER_PORT, () => {
    console.log(`App listening on port ${SERVER_PORT}!`);
});