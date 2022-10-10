const express = require('express')
const axios = require('axios')
const users = express.Router()
const { ENV } = require('./config')
const { httpRes } = require('../utils/response')
const { seq,Table } = require('../models/db')

// middlewares
users.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Authorization, X-Requested-With")
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, OPTION, DELETE")
    next()
})

// get all users
users.get('/', async(req, res) => {
    let users = await Table.Users.findAll({})
    console.log(users)
    if (users == null){
        let resp = httpRes(400, 'Bad request', 'User not found')
        res.status(400).json(resp)
    } else {
        let resp = httpRes(200, 'Success', users)
        res.status(200).json(resp)
    }
})

// register: post new user
users.post('/signup', async(req, res) => {
    if (req.body.password === req.body.retypePass){
        Table.Users.create({ 
            name: `${req.body.fname} ${req.body.lname}`,
            email: req.body.email,
            password: req.body.password,
        }).then(() => {
            let resp = httpRes(200, 'Success', 'Success add new user')
            res.status(200).json(resp)
        })
    } else {
        let resp = httpRes(400, 'Bad request', 'Failes add new user')
        res.status(400).json(resp)
    }
})

// login: find one by email & pass
users.post('/login', async(req, res) => {
    let users = await Table.Users.findOne({
        where: { 
            email: req.body.email,
            password: req.body.password
        }
    })
    console.log(users)
    if (users == null){
        let resp = httpRes(400, 'Bad request', 'User not found')
        res.status(400).json(resp)
    } else {
        let resp = httpRes(200, 'Success', users)
        res.status(200).json(resp)
    }
})

// update: update profile
users.put('/edit_profile', async(req, res) => {
    Table.Users.update(
        {
            "nik" : req.body.nik,
            "name" : req.body.name,
            "phone" : req.body.phone,
            "mother" : req.body.mother,
            "dob" : req.body.dob,
            "gender" : req.body.gender,
            "birthPlace" : req.body.birthPlace,
            "marriage" : req.body.marriage,
            "religion" : req.body.religion,
            "education" : req.body.education,
            "province" : req.body.province,
            "city" : req.body.city,
            "district" : req.body.district,
            "subDistrict" : req.body.subDistrict,
            "street" : req.body.street,
            "zipCode" : req.body.zipCode,
            "rt" : req.body.rt,
            "rw" : req.body.rw,
            "occupation" : req.body.occupation,
            "position" : req.body.position,
            "industry" : req.body.industry,
            "companyName" : req.body.companyName,
            "startedAt" : req.body.startedAt,
            "comProvince" : req.body.comProvince,
            "comCity" : req.body.comCity,
            "comDistrict" : req.body.comDistrict,
            "comSubDistrict" : req.body.comSubDistrict,
            "comStreet" : req.body.comStreet,
            "comZipCode" : req.body.comZipCode,
            "comRt" : req.body.comRt,
            "comRw" : req.body.comRw,
            "purpose" : req.body.purpose,
            "fundSource" : req.body.fundSource,
            "mIncome" : req.body.mIncome,
            "mTrx" : req.body.mTrx,
            "cardDelivery" : req.body.cardDelivery,
            "onBoardingToken" : req.body.onBoardingToken,
            "accountNumber": req.body.accountNumber
        },
        { where: { 
            email: req.body.email,
            password: req.body.password
        }
    }).then(() => {
        let resp = httpRes(200, 'Success', 'Success update profile')
        res.status(200).json(resp)
    }).catch(() => {
        let resp = httpRes(400, 'Bad request', 'Failed update profile')
        res.status(400).json(resp)
    })
})

module.exports = users