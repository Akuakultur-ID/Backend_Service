const express = require('express')
const axios = require('axios')
const products = express.Router()
const { ENV } = require('./config')
const { httpRes } = require('../utils/response')
const { seq,Table } = require('../models/db')
const { Query } = require('../models/query')

// middlewares
products.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Authorization, X-Requested-With")
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, OPTION, DELETE")
    next()
})

// get all users
products.get('/', async(req, res) => {
    let users = await Table.Products.findAll({})
    console.log(users)
    if (users == null){
        let resp = httpRes(400, 'Bad request', 'Product not found')
        res.status(400).json(resp)
    } else {
        let resp = httpRes(200, 'Success', users)
        res.status(200).json(resp)
    }
})

// add new product
products.post('/add', async(req, res) => {
    Table.Products.create({ 
        "name" : req.body.name,
        "description" : req.body.description,
        "image" : req.body.image,
        "cash" : req.body.cash,
        "rating" : req.body.rating,
        "sold" : req.body.sold,
        "dp" : req.body.dp,
        "kaliCicil" : req.body.kaliCicil,
        "nominalCicil" : req.body.nominalCicil,
        "jarakCicil" : req.body.jarakCicil
    }).then(() => {
        let resp = httpRes(200, 'Success', 'Success add new product')
        res.status(200).json(resp)
    }).catch((err)=>{
        console.log(err)
        let resp = httpRes(400, 'Bad request', 'failed add new product')
        res.status(400).json(resp)
    })
})

// login: find one by email & pass
products.post('/login', async(req, res) => {
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
products.put('/edit_profile', async(req, res) => {
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

// add to cart
products.post('/add_cart', async(req, res) => {
    Table.Carts.create({ 
        "userid" : req.body.userid,
        "productid" : req.body.productid,
    }).then(() => {
        let resp = httpRes(200, 'Success', 'Success add cart')
        res.status(200).json(resp)
    }).catch(() => {
        let resp = httpRes(400, 'Bad request', 'Failed add cart')
        res.status(400).json(resp)
    })
})

// get cart
products.get('/cart', async(req, res) => {
    const [results, metadata] = await seq.query(Query.GetCartsProducts())
    let resp = httpRes(200, 'Success', results)
    res.status(200).json(resp)
})

module.exports = products