const { ENV } = require('./config')
const { Attr } = require('./attr')
const { Sequelize } = require('sequelize')

const seq = new Sequelize(ENV.DB_NAME, ENV.DB_USER, ENV.DB_PASS, {
    host: ENV.DB_HOST,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

const Table = {
    Users: seq.define('users', Attr.UserAttr),
    Products: seq.define('products', Attr.ProductAttr),
    Carts: seq.define('carts', Attr.CartAttr),
}

module.exports = {
    seq, Table
}
