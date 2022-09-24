const axios = require('axios')
const FormData = require('form-data');
const { ENV } = require('./config')

let getToken = async() => {
    let b64 = Buffer.from(`${ENV.OCBC_CLID}:${ENV.OCBC_CLSECRET}`).toString('base64')
    let config = {
        headers: {
            Authorization: `Basic ${b64}`,
            ContentType: "application/x-www-form-urlencoded"
        }
    }
    const form = new FormData()
    form.append('grant_type', 'client_credentials')

    let token = ""
    try {
        await axios
        .post(`${ENV.OCBC_URL}/oauth/token`, form, config)
        .then(data => {
            token = data.data.access_token
        })
        .catch(err => {
            token = ""
        })
    } catch(err){
        token = ""
    }

    return token
}

module.exports = { getToken }