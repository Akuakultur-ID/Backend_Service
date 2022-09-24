// dependencies
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const axios = require('axios')
dotenv.config()

const { getTimeSign } = require('./utils/signature')
const { httpRes } = require('./utils/response')

// routes source
const app = express()
const ocbc = require('./routes/ocbc_params')

// middlewares
app.use(express.json())
app.use(cors())
app.set('trust proxy', true)
app.disable('etag')
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "X-Requested-With")
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, OPTION, DELETE")
    next()
})

// home routes
app.get('/', (req, res) => {
    getTimeSign(req.method, req.url, req.body)
    .then((timesign) => {
        let resp = httpRes(res.statusCode, 'Success', timesign)
        res.status(200).json(resp)
    })
    .catch((err) => {
        let resp = httpRes(400, 'Bad Request', err)
        res.status(400).json(resp)
    })
})

// routes endpoint
app.use('/ocbc', ocbc)

// error handler
app.use((req, res, next) => {
    return res.status(404).json({ status: 404, error: 'Not found' })
})
app.use((error, req, res, next) => {
    return res.status(500).json({ status: 500, error: error.toString() })
})

// serve
let server = app.listen(process.env.PORT, () => {
    console.log(`Server is running at port ${process.env.PORT}`)
})