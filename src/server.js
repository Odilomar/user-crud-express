const { SERVER_PORT } = require('./4-framework/envs/server')

const cors = require('cors')

const express = require('express')
const app = express()

app.use(express.json())
app.use(cors());
app.use(express.urlencoded({ extended: false }));

const { userRoutes } = require('./4-framework/routes')
app.use(userRoutes)

app.listen(SERVER_PORT, () => {
    console.log(`App listening on port ${SERVER_PORT}!`);
});