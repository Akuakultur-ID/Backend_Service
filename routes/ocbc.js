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

// ###################################
// ON BOARDING PARAMETERS
// ###################################

// 1. list marriages
ocbc.get('/params/marriages', (req, res) => {
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
ocbc.get('/params/religions', (req, res) => {
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
ocbc.get('/params/educations', (req, res) => {
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
ocbc.get('/params/purpose', (req, res) => {
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
ocbc.get('/params/sourceOfFunds', (req, res) => {
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
ocbc.get('/params/monthlyIncomes', (req, res) => {
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
ocbc.get('/params/monthlyTransactions', (req, res) => {
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
ocbc.get('/params/relationship', (req, res) => {
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
ocbc.get('/params/citizenship', (req, res) => {
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
ocbc.get('/params/termsAndCondition', (req, res) => {
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
ocbc.get('/params/countries', (req, res) => {
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
ocbc.get('/params/provinces', (req, res) => {
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
ocbc.get('/params/city', (req, res) => {
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
ocbc.get('/params/district', (req, res) => {
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
ocbc.get('/params/subdistrict', (req, res) => {
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
ocbc.get('/params/zipCode', (req, res) => {
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
ocbc.get('/params/occupation', (req, res) => {
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
ocbc.get('/params/jobs', (req, res) => {
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

// ###################################
// ON BOARDING
// ################################### 

// 1. onboarding apply
ocbc.post('/onboarding/apply', (req, res) => {
    // Path
    let path = "/hackathon/v1/onboarding/apply"
    let url = ENV.OCBC_URL + path
    // token, signature & timestamp
    let body = {
        nik: req.body.nik,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        mother_maiden_name: req.body.mother,
        dob: req.body.dob,
        gender: req.body.gender
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

// 2. account apply
ocbc.post('/onboarding/accountApply', (req, res) => {
    // Path
    let path = "/hackathon/v1/onboarding/accountApply"
    let url = ENV.OCBC_URL + path
    // token, signature & timestamp
    let body = {
        "accountVerification": {
            "birth_place": req.body.birth_place,
            "marriage": req.body.marriage,
            "religion": req.body.religion,
            "education": req.body.education
         },
         "KtpAddress": {
            "city": req.body.city,
            "district_code": req.body.district_code,
            "sub_district_code": req.body.sub_district_code,
            "street_address": req.body.street_address,
            "zip_code": req.body.zip_code,
            "rt": req.body.rt,
            "rw": req.body.rw
         }
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
            "X-OCBC-Timestamp": timesign.timestamp,
            "X-OCBC-ONBOARDING-TOKEN": req.body.onboarding_token
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

// 3. work data apply
ocbc.post('/onboarding/workDataApply', (req, res) => {
    // Path
    let path = "/hackathon/v1/onboarding/workDataApply"
    let url = ENV.OCBC_URL + path
    // token, signature & timestamp
    let body = {
        "currentEmployee": {
            "work_occupation_id": req.body.work_occupation_id,
            "work_position_id": req.body.work_position_id,
            "work_industry_id": req.body.work_industry_id,
            "work_company_name": req.body.work_company_name,
            "work_started_at": req.body.work_started_at
        },
        "workAddress": {
            "zip_code": req.body.zip_code,
            "city": req.body.city,
            "district_code": req.body.district_code,
            "sub_district_code": req.body.sub_district_code,
            "street_address": req.body.street_address,
            "rt": req.body.rt,
            "rw": req.body.rw
        },
        "purpose": {
            "purpose": req.body.purpose,
            "fund_source": req.body.fund_source,
            "monthly_income": req.body.monthly_income,
            "monthly_transaction": req.body.monthly_transaction
        },  
        "card_delivery": req.body.card_delivery
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
            "X-OCBC-Timestamp": timesign.timestamp,
            "X-OCBC-ONBOARDING-TOKEN": req.body.onboarding_token
            }
        }
        axios
        .post(url, body, config)
        .then((data) => {
            let resp = httpRes(res.statusCode, 'Success', data.data)
            res.status(200).json(resp)
        })
        .catch((err) => {
            console.log(err)
            let resp = httpRes(400, 'Bad request', err)
            res.status(400).json(resp)
        })
    })
    .catch((err) => {
        let resp = httpRes(400, 'Bad request', err)
        res.status(400).json(resp)
    })
})

// 4. TnC Apply
ocbc.post('/onboarding/TNCApply', (req, res) => {
    // Path
    let path = "/hackathon/v1/onboarding/TNCApply"
    let url = ENV.OCBC_URL + path
    // token, signature & timestamp
    let body = req.body.confirm == true ? {
            "title": [
                "T&C Umum",
                "T&C Layanan E-Banking",
                "T&C One Wallet",
                "T&C Tanda Link"
            ]
        } : {"title": []}
    getTimeSign("POST", path, body)
    .then((timesign) => {
        // headers
        let config = {
            headers: {
            Authorization: `Bearer ${timesign.token}`,
            ContentType: "application/json",
            "X-OCBC-APIKey": ENV.OCBC_APIKEY,
            "X-OCBC-Signature": timesign.signature,
            "X-OCBC-Timestamp": timesign.timestamp,
            "X-OCBC-ONBOARDING-TOKEN": req.body.onboarding_token
            }
        }
        axios
        .post(url, body, config)
        .then((data) => {
            let resp = httpRes(res.statusCode, 'Success', data.data)
            res.status(200).json(resp)
        })
        .catch((err) => {
            console.log(err)
            let resp = httpRes(400, 'Bad request', err)
            res.status(400).json(resp)
        })
    })
    .catch((err) => {
        let resp = httpRes(400, 'Bad request', err)
        res.status(400).json(resp)
    })
})

// 5. Check Account
ocbc.post('/checkAccount/balance', (req, res) => {
    // Path
    let path = "/hackathon/v1/checkAccount/balance"
    let url = ENV.OCBC_URL + path
    let body = null
    // token, signature & timestamp
    getTimeSign("GET", path, body)
    .then((timesign) => {
        // headers
        let config = {
            headers: {
            Authorization: `Bearer ${timesign.token}`,
            ContentType: "application/json",
            "X-OCBC-APIKey": ENV.OCBC_APIKEY,
            "X-OCBC-Signature": timesign.signature,
            "X-OCBC-Timestamp": timesign.timestamp,
            "X-OCBC-ONBOARDING-TOKEN": req.body.onboarding_token
            }
        }
        axios
        .get(url, config)
        .then((data) => {
            let resp = httpRes(res.statusCode, 'Success', data.data)
            res.status(200).json(resp)
        })
        .catch((err) => {
            console.log(err)
            let resp = httpRes(400, 'Bad request', err)
            res.status(400).json(resp)
        })
    })
    .catch((err) => {
        console.log(err)
        let resp = httpRes(400, 'Bad request', err)
        res.status(400).json(resp)
    })
})

// 6. Transfer Inquiry 
ocbc.post('/transfer/inquiry', (req, res) => {
    // Path
    let path = "/hackathon/v1/transfer/inquiry"
    let url = ENV.OCBC_URL + path
    // token, signature & timestamp
    let body = {
        "accountNumber": req.body.accountNumber,
        "transferAmount": req.body.transferAmount,
        "paymentDetail": req.body.paymentDetail
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
            "X-OCBC-Timestamp": timesign.timestamp,
            "X-OCBC-ONBOARDING-TOKEN": req.body.onboarding_token
            }
        }
        axios
        .post(url, body, config)
        .then((data) => {
            let resp = httpRes(res.statusCode, 'Success', data.data)
            res.status(200).json(resp)
        })
        .catch((err) => {
            console.log(err)
            let resp = httpRes(400, 'Bad request', err)
            res.status(400).json(resp)
        })
    })
    .catch((err) => {
        let resp = httpRes(400, 'Bad request', err)
        res.status(400).json(resp)
    })
})

// 7. Transfer submit
ocbc.post('/transfer/submit', (req, res) => {
    // Path
    let path = "/hackathon/v1/transfer/submit"
    let url = ENV.OCBC_URL + path
    // token, signature & timestamp
    let body = {
        "transactionUUID": req.body.uuid,
        "password": req.body.pass
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
            "X-OCBC-Timestamp": timesign.timestamp,
            "X-OCBC-ONBOARDING-TOKEN": req.body.onboarding_token
            }
        }
        axios
        .post(url, body, config)
        .then((data) => {
            let resp = httpRes(res.statusCode, 'Success', data.data)
            res.status(200).json(resp)
        })
        .catch((err) => {
            console.log(err)
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