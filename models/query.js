const Query = {

    GetCartsProducts: () => `
        select * from carts, products
        where carts.productid = products.id
    `,
}

module.exports = {
    Query
}