// dependencies
const express = require('express')
const axios = require('axios')
const ocbc = express.Router()
const { ENV } = require('./config')
const { getTimeSign } = require('../utils/signature')
const { httpRes } = require('../utils/response')

// middlewares
ocbc.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Authorization, X-Requested-With")
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, OPTION, DELETE")
    next()
})

// 1. list marriages
ocbc.get('/marriages', (req, res) => {
    // Path
    let path = "/hackathon/v1/onboarding/params/marriages"
    let url = ENV.OCBC_URL + path
    // token, signature & timestamp
    let body = null
    getTimeSign("GET", path, body)
    .then((timesign) => {
        // headers
        let config = {
            headers: {
            Authorization: `Bearer ${timesign.token}`,
            ContentType: "application/json",
            "X-OCBC-APIKey": ENV.OCBC_APIKEY,
            "X-OCBC-Signature": timesign.signature,
            "X-OCBC-Timestamp": timesign.timestamp
            }
        }
        axios
        .get(url, config)
        .then((data) => {
            let resp = httpRes(res.statusCode, 'Success', data.data)
            res.status(200).json(resp)
        })
        .catch((err) => {
            let resp = httpRes(400, 'Bad request', err)
            res.status(400).json(resp)
        })
    })
    .catch((err) => {
        let resp = httpRes(400, 'Bad request', err)
        res.status(400).json(resp)
    })
})

// 2. list religions
ocbc.get('/religions', (req, res) => {
    // Path
    let path = "/hackathon/v1/onboarding/params/religions"
    let url = ENV.OCBC_URL + path
    // token, signature & timestamp
    let body = null
    getTimeSign("GET", path, body)
    .then((timesign) => {
        // headers
        let config = {
            headers: {
            Authorization: `Bearer ${timesign.token}`,
            ContentType: "application/json",
            "X-OCBC-APIKey": ENV.OCBC_APIKEY,
            "X-OCBC-Signature": timesign.signature,
            "X-OCBC-Timestamp": timesign.timestamp
            }
        }
        axios
        .get(url, config)
        .then((data) => {
            let resp = httpRes(res.statusCode, 'Success', data.data)
            res.status(200).json(resp)
        })
        .catch((err) => {
            let resp = httpRes(400, 'Bad request', err)
            res.status(400).json(resp)
        })
    })
    .catch((err) => {
        let resp = httpRes(400, 'Bad request', err)
        res.status(400).json(resp)
    })
})

// 3. list educations
ocbc.get('/educations', (req, res) => {
    // Path
    let path = "/hackathon/v1/onboarding/params/educations"
    let url = ENV.OCBC_URL + path
    // token, signature & timestamp
    let body = null
    getTimeSign("GET", path, body)
    .then((timesign) => {
        // headers
        let config = {
            headers: {
            Authorization: `Bearer ${timesign.token}`,
            ContentType: "application/json",
            "X-OCBC-APIKey": ENV.OCBC_APIKEY,
            "X-OCBC-Signature": timesign.signature,
            "X-OCBC-Timestamp": timesign.timestamp
            }
        }
        axios
        .get(url, config)
        .then((data) => {
            let resp = httpRes(res.statusCode, 'Success', data.data)
            res.status(200).json(resp)
        })
        .catch((err) => {
            let resp = httpRes(400, 'Bad request', err)
            res.status(400).json(resp)
        })
    })
    .catch((err) => {
        let resp = httpRes(400, 'Bad request', err)
        res.status(400).json(resp)
    })
})

// 4. list purpose
ocbc.get('/purpose', (req, res) => {
    // Path
    let path = "/hackathon/v1/onboarding/params/purpose"
    let url = ENV.OCBC_URL + path
    // token, signature & timestamp
    let body = null
    getTimeSign("GET", path, body)
    .then((timesign) => {
        // headers
        let config = {
            headers: {
            Authorization: `Bearer ${timesign.token}`,
            ContentType: "application/json",
            "X-OCBC-APIKey": ENV.OCBC_APIKEY,
            "X-OCBC-Signature": timesign.signature,
            "X-OCBC-Timestamp": timesign.timestamp
            }
        }
        axios
        .get(url, config)
        .then((data) => {
            let resp = httpRes(res.statusCode, 'Success', data.data)
            res.status(200).json(resp)
        })
        .catch((err) => {
            let resp = httpRes(400, 'Bad request', err)
            res.status(400).json(resp)
        })
    })
    .catch((err) => {
        let resp = httpRes(400, 'Bad request', err)
        res.status(400).json(resp)
    })
})

// 5. list sourceOfFunds
ocbc.get('/sourceOfFunds', (req, res) => {
    // Path
    let path = "/hackathon/v1/onboarding/params/sourceOfFunds"
    let url = ENV.OCBC_URL + path
    // token, signature & timestamp
    let body = null
    getTimeSign("GET", path, body)
    .then((timesign) => {
        // headers
        let config = {
            headers: {
            Authorization: `Bearer ${timesign.token}`,
            ContentType: "application/json",
            "X-OCBC-APIKey": ENV.OCBC_APIKEY,
            "X-OCBC-Signature": timesign.signature,
            "X-OCBC-Timestamp": timesign.timestamp
            }
        }
        axios
        .get(url, config)
        .then((data) => {
            let resp = httpRes(res.statusCode, 'Success', data.data)
            res.status(200).json(resp)
        })
        .catch((err) => {
            let resp = httpRes(400, 'Bad request', err)
            res.status(400).json(resp)
        })
    })
    .catch((err) => {
        let resp = httpRes(400, 'Bad request', err)
        res.status(400).json(resp)
    })
})

// 6. list monthlyIncomes
ocbc.get('/monthlyIncomes', (req, res) => {
    // Path
    let path = "/hackathon/v1/onboarding/params/monthlyIncomes"
    let url = ENV.OCBC_URL + path
    // token, signature & timestamp
    let body = null
    getTimeSign("GET", path, body)
    .then((timesign) => {
        // headers
        let config = {
            headers: {
            Authorization: `Bearer ${timesign.token}`,
            ContentType: "application/json",
            "X-OCBC-APIKey": ENV.OCBC_APIKEY,
            "X-OCBC-Signature": timesign.signature,
            "X-OCBC-Timestamp": timesign.timestamp
            }
        }
        axios
        .get(url, config)
        .then((data) => {
            let resp = httpRes(res.statusCode, 'Success', data.data)
            res.status(200).json(resp)
        })
        .catch((err) => {
            let resp = httpRes(400, 'Bad request', err)
            res.status(400).json(resp)
        })
    })
    .catch((err) => {
        let resp = httpRes(400, 'Bad request', err)
        res.status(400).json(resp)
    })
})

// 7. monthlyTransactions
ocbc.get('/monthlyTransactions', (req, res) => {
    // Path
    let path = "/hackathon/v1/onboarding/params/monthlyTransactions"
    let url = ENV.OCBC_URL + path
    // token, signature & timestamp
    let body = null
    getTimeSign("GET", path, body)
    .then((timesign) => {
        // headers
        let config = {
            headers: {
            Authorization: `Bearer ${timesign.token}`,
            ContentType: "application/json",
            "X-OCBC-APIKey": ENV.OCBC_APIKEY,
            "X-OCBC-Signature": timesign.signature,
            "X-OCBC-Timestamp": timesign.timestamp
            }
        }
        axios
        .get(url, config)
        .then((data) => {
            let resp = httpRes(res.statusCode, 'Success', data.data)
            res.status(200).json(resp)
        })
        .catch((err) => {
            let resp = httpRes(400, 'Bad request', err)
            res.status(400).json(resp)
        })
    })
    .catch((err) => {
        let resp = httpRes(400, 'Bad request', err)
        res.status(400).json(resp)
    })
})

// 8. relationship
ocbc.get('/relationship', (req, res) => {
    // Path
    let path = "/hackathon/v1/onboarding/params/relationship"
    let url = ENV.OCBC_URL + path
    // token, signature & timestamp
    let body = null
    getTimeSign("GET", path, body)
    .then((timesign) => {
        // headers
        let config = {
            headers: {
            Authorization: `Bearer ${timesign.token}`,
            ContentType: "application/json",
            "X-OCBC-APIKey": ENV.OCBC_APIKEY,
            "X-OCBC-Signature": timesign.signature,
            "X-OCBC-Timestamp": timesign.timestamp
            }
        }
        axios
        .get(url, config)
        .then((data) => {
            let resp = httpRes(res.statusCode, 'Success', data.data)
            res.status(200).json(resp)
        })
        .catch((err) => {
            let resp = httpRes(400, 'Bad request', err)
            res.status(400).json(resp)
        })
    })
    .catch((err) => {
        let resp = httpRes(400, 'Bad request', err)
        res.status(400).json(resp)
    })
})

// 9. citizenship
ocbc.get('/citizenship', (req, res) => {
    // Path
    let path = "/hackathon/v1/onboarding/params/citizenship"
    let url = ENV.OCBC_URL + path
    // token, signature & timestamp
    let body = null
    getTimeSign("GET", path, body)
    .then((timesign) => {
        // headers
        let config = {
            headers: {
            Authorization: `Bearer ${timesign.token}`,
            ContentType: "application/json",
            "X-OCBC-APIKey": ENV.OCBC_APIKEY,
            "X-OCBC-Signature": timesign.signature,
            "X-OCBC-Timestamp": timesign.timestamp
            }
        }
        axios
        .get(url, config)
        .then((data) => {
            let resp = httpRes(res.statusCode, 'Success', data.data)
            res.status(200).json(resp)
        })
        .catch((err) => {
            let resp = httpRes(400, 'Bad request', err)
            res.status(400).json(resp)
        })
    })
    .catch((err) => {
        let resp = httpRes(400, 'Bad request', err)
        res.status(400).json(resp)
    })
})

// 10. termsAndCondition
ocbc.get('/termsAndCondition', (req, res) => {
    // Path
    let path = "/hackathon/v1/onboarding/params/termsAndCondition"
    let url = ENV.OCBC_URL + path
    // token, signature & timestamp
    let body = null
    getTimeSign("GET", path, body)
    .then((timesign) => {
        // headers
        let config = {
            headers: {
            Authorization: `Bearer ${timesign.token}`,
            ContentType: "application/json",
            "X-OCBC-APIKey": ENV.OCBC_APIKEY,
            "X-OCBC-Signature": timesign.signature,
            "X-OCBC-Timestamp": timesign.timestamp
            }
        }
        axios
        .get(url, config)
        .then((data) => {
            let resp = httpRes(res.statusCode, 'Success', data.data)
            res.status(200).json(resp)
        })
        .catch((err) => {
            let resp = httpRes(400, 'Bad request', err)
            res.status(400).json(resp)
        })
    })
    .catch((err) => {
        let resp = httpRes(400, 'Bad request', err)
        res.status(400).json(resp)
    })
})

// 11. countries
ocbc.get('/countries', (req, res) => {
    // Path
    let path = "/hackathon/v1/onboarding/params/countries"
    let url = ENV.OCBC_URL + path
    // token, signature & timestamp
    let body = null
    getTimeSign("GET", path, body)
    .then((timesign) => {
        // headers
        let config = {
            headers: {
            Authorization: `Bearer ${timesign.token}`,
            ContentType: "application/json",
            "X-OCBC-APIKey": ENV.OCBC_APIKEY,
            "X-OCBC-Signature": timesign.signature,
            "X-OCBC-Timestamp": timesign.timestamp
            }
        }
        axios
        .get(url, config)
        .then((data) => {
            let resp = httpRes(res.statusCode, 'Success', data.data)
            res.status(200).json(resp)
        })
        .catch((err) => {
            let resp = httpRes(400, 'Bad request', err)
            res.status(400).json(resp)
        })
    })
    .catch((err) => {
        let resp = httpRes(400, 'Bad request', err)
        res.status(400).json(resp)
    })
})

// 12. POST provinces
ocbc.get('/provinces', (req, res) => {
    // Path
    let path = "/hackathon/v1/onboarding/params/provinces"
    let url = ENV.OCBC_URL + path
    // token, signature & timestamp
    let body = {
        countryId: 1
    }
    getTimeSign("POST", path, body)
    .then((timesign) => {
        // headers
        let config = {
            headers: {
            Authorization: `Bearer ${timesign.token}`,
            ContentType: "application/json",
            "X-OCBC-APIKey": ENV.OCBC_APIKEY,
            "X-OCBC-Signature": timesign.signature,
            "X-OCBC-Timestamp": timesign.timestamp
            }
        }
        axios
        .post(url, body, config)
        .then((data) => {
            let resp = httpRes(res.statusCode, 'Success', data.data)
            res.status(200).json(resp)
        })
        .catch((err) => {
            let resp = httpRes(400, 'Bad request', err)
            res.status(400).json(resp)
        })
    })
    .catch((err) => {
        let resp = httpRes(400, 'Bad request', err)
        res.status(400).json(resp)
    })
})

// 13. POST city
ocbc.get('/city', (req, res) => {
    // Path
    let provinceId = req.query.provinceId
    let path = "/hackathon/v1/onboarding/params/city"
    let url = ENV.OCBC_URL + path
    // token, signature & timestamp
    let body = {
        provinceId: provinceId
    }
    getTimeSign("POST", path, body)
    .then((timesign) => {
        // headers
        let config = {
            headers: {
            Authorization: `Bearer ${timesign.token}`,
            ContentType: "application/json",
            "X-OCBC-APIKey": ENV.OCBC_APIKEY,
            "X-OCBC-Signature": timesign.signature,
            "X-OCBC-Timestamp": timesign.timestamp
            }
        }
        axios
        .post(url, body, config)
        .then((data) => {
            let resp = httpRes(res.statusCode, 'Success', data.data)
            res.status(200).json(resp)
        })
        .catch((err) => {
            let resp = httpRes(400, 'Bad request', err)
            res.status(400).json(resp)
        })
    })
    .catch((err) => {
        let resp = httpRes(400, 'Bad request', err)
        res.status(400).json(resp)
    })
})

// 14. POST District
ocbc.get('/district', (req, res) => {
    // Path
    let cityId = req.query.cityId
    let path = "/hackathon/v1/onboarding/params/district"
    let url = ENV.OCBC_URL + path
    // token, signature & timestamp
    let body = {
        cityId: cityId
    }
    getTimeSign("POST", path, body)
    .then((timesign) => {
        // headers
        let config = {
            headers: {
            Authorization: `Bearer ${timesign.token}`,
            ContentType: "application/json",
            "X-OCBC-APIKey": ENV.OCBC_APIKEY,
            "X-OCBC-Signature": timesign.signature,
            "X-OCBC-Timestamp": timesign.timestamp
            }
        }
        axios
        .post(url, body, config)
        .then((data) => {
            let resp = httpRes(res.statusCode, 'Success', data.data)
            res.status(200).json(resp)
        })
        .catch((err) => {
            let resp = httpRes(400, 'Bad request', err)
            res.status(400).json(resp)
        })
    })
    .catch((err) => {
        let resp = httpRes(400, 'Bad request', err)
        res.status(400).json(resp)
    })
})

// 15. POST subdistrict
ocbc.get('/subdistrict', (req, res) => {
    // Path
    let districtId = req.query.districtId
    let path = "/hackathon/v1/onboarding/params/subdistrict"
    let url = ENV.OCBC_URL + path
    // token, signature & timestamp
    let body = {
        districtId: districtId
    }
    getTimeSign("POST", path, body)
    .then((timesign) => {
        // headers
        let config = {
            headers: {
            Authorization: `Bearer ${timesign.token}`,
            ContentType: "application/json",
            "X-OCBC-APIKey": ENV.OCBC_APIKEY,
            "X-OCBC-Signature": timesign.signature,
            "X-OCBC-Timestamp": timesign.timestamp
            }
        }
        axios
        .post(url, body, config)
        .then((data) => {
            let resp = httpRes(res.statusCode, 'Success', data.data)
            res.status(200).json(resp)
        })
        .catch((err) => {
            let resp = httpRes(400, 'Bad request', err)
            res.status(400).json(resp)
        })
    })
    .catch((err) => {
        let resp = httpRes(400, 'Bad request', err)
        res.status(400).json(resp)
    })
})

// 16. POST zipCode
ocbc.get('/zipCode', (req, res) => {
    // Path
    let subDistrictId = req.query.subDistrictId
    let path = "/hackathon/v1/onboarding/params/zipCode"
    let url = ENV.OCBC_URL + path
    // token, signature & timestamp
    let body = {
        subDistrictId: subDistrictId
    }
    getTimeSign("POST", path, body)
    .then((timesign) => {
        // headers
        let config = {
            headers: {
            Authorization: `Bearer ${timesign.token}`,
            ContentType: "application/json",
            "X-OCBC-APIKey": ENV.OCBC_APIKEY,
            "X-OCBC-Signature": timesign.signature,
            "X-OCBC-Timestamp": timesign.timestamp
            }
        }
        axios
        .post(url, body, config)
        .then((data) => {
            let resp = httpRes(res.statusCode, 'Success', data.data)
            res.status(200).json(resp)
        })
        .catch((err) => {
            let resp = httpRes(400, 'Bad request', err)
            res.status(400).json(resp)
        })
    })
    .catch((err) => {
        let resp = httpRes(400, 'Bad request', err)
        res.status(400).json(resp)
    })
})

// 17. occupation
ocbc.get('/occupation', (req, res) => {
    // Path
    let path = "/hackathon/v1/onboarding/params/occupation"
    let url = ENV.OCBC_URL + path
    // token, signature & timestamp
    let body = null
    getTimeSign("GET", path, body)
    .then((timesign) => {
        // headers
        let config = {
            headers: {
            Authorization: `Bearer ${timesign.token}`,
            ContentType: "application/json",
            "X-OCBC-APIKey": ENV.OCBC_APIKEY,
            "X-OCBC-Signature": timesign.signature,
            "X-OCBC-Timestamp": timesign.timestamp
            }
        }
        axios
        .get(url, config)
        .then((data) => {
            let resp = httpRes(res.statusCode, 'Success', data.data)
            res.status(200).json(resp)
        })
        .catch((err) => {
            let resp = httpRes(400, 'Bad request', err)
            res.status(400).json(resp)
        })
    })
    .catch((err) => {
        let resp = httpRes(400, 'Bad request', err)
        res.status(400).json(resp)
    })
})

// 18. POST jobs
ocbc.get('/jobs', (req, res) => {
    // Path
    let occupationId = req.query.occupationId
    let path = "/hackathon/v1/onboarding/params/jobs"
    let url = ENV.OCBC_URL + path
    // token, signature & timestamp
    let body = {
        occupationId: occupationId
    }
    getTimeSign("POST", path, body)
    .then((timesign) => {
        // headers
        let config = {
            headers: {
            Authorization: `Bearer ${timesign.token}`,
            ContentType: "application/json",
            "X-OCBC-APIKey": ENV.OCBC_APIKEY,
            "X-OCBC-Signature": timesign.signature,
            "X-OCBC-Timestamp": timesign.timestamp
            }
        }
        axios
        .post(url, body, config)
        .then((data) => {
            let resp = httpRes(res.statusCode, 'Success', data.data)
            res.status(200).json(resp)
        })
        .catch((err) => {
            let resp = httpRes(400, 'Bad request', err)
            res.status(400).json(resp)
        })
    })
    .catch((err) => {
        let resp = httpRes(400, 'Bad request', err)
        res.status(400).json(resp)
    })
})

module.exports = ocbc