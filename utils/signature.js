var crypto = require('crypto');
const { ENV } = require('./config')
const { getToken } = require('./accToken')

let getTimeSign = async(httpMethod, relativeUrl, body) => {
    
    //creating hmac object 
    let hmac = crypto.createHmac('sha256', ENV.OCBC_APISECRET);

    //passing the data to be hashed
    let HTTPMethod = httpMethod
    let RelativeUrl = relativeUrl
    let result = ""

    // get access token
    await getToken()
    .then((AccessToken) => {
        try {
            let RequestTimestamp = Date.now()
            let RequestBody = body == null ? "" : JSON.stringify(body)
            let Data = crypto.createHash('sha256').update(RequestBody).digest('hex')
            Data = Data.toLowerCase()
        
            // HMAC Value
            let StringToSign = "Nonce" + ":" + ENV.OCBC_APIKEY + ":" + HTTPMethod + ":" + RelativeUrl + ":" + AccessToken + ":" + Data + ":" + RequestTimestamp
            let data = hmac.update(StringToSign).digest('hex')
        
            // Signature
            let sign = Buffer.from(`${ENV.OCBC_APIKEY}:${data}:Nonce:${RequestTimestamp}`).toString('base64')
        
            result = {
                token: AccessToken,
                signature: sign,
                timestamp: RequestTimestamp
            }
        } catch(err){
            result = {
                token: "",
                signature: "",
                timestamp: ""
            }
        } 
    })
    .catch((err) => {
        return {
            error: err
        }
    })

    return result
}

module.exports = { getTimeSign }