const { DataTypes } = require('sequelize')

const Attr = {
    
    UserAttr: {
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        createdAt:{type: DataTypes.DATE},
        updatedAt:{type: DataTypes.DATE},
        nik:{type: DataTypes.STRING},
        password:{type: DataTypes.STRING},
        name:{type: DataTypes.STRING},
        email:{type: DataTypes.STRING},
        phone:{type: DataTypes.STRING},
        mother:{type: DataTypes.STRING},
        dob:{type: DataTypes.STRING},
        gender:{type: DataTypes.STRING},
        birthPlace:{type: DataTypes.STRING},
        marriage:{type: DataTypes.STRING},
        religion:{type: DataTypes.STRING},
        education:{type: DataTypes.STRING},
        province:{type: DataTypes.STRING},
        city:{type: DataTypes.STRING},
        district:{type: DataTypes.STRING},
        subDistrict:{type: DataTypes.STRING},
        street:{type: DataTypes.STRING},
        zipCode:{type: DataTypes.STRING},
        rt:{type: DataTypes.STRING},
        rw:{type: DataTypes.STRING},
        occupation:{type: DataTypes.STRING},
        position:{type: DataTypes.STRING},
        industry:{type: DataTypes.STRING},
        companyName:{type: DataTypes.STRING},
        startedAt:{type: DataTypes.STRING},
        comProvince:{type: DataTypes.STRING},
        comCity:{type: DataTypes.STRING},
        comDistrict:{type: DataTypes.STRING},
        comSubDistrict:{type: DataTypes.STRING},
        comStreet:{type: DataTypes.STRING},
        comZipCode:{type: DataTypes.STRING},
        comRt:{type: DataTypes.STRING},
        comRw:{type: DataTypes.STRING},
        purpose:{type: DataTypes.STRING},
        fundSource:{type: DataTypes.STRING},
        mIncome:{type: DataTypes.STRING},
        mTrx:{type: DataTypes.STRING},
        cardDelivery:{type: DataTypes.STRING},
        onBoardingToken:{type: DataTypes.STRING},
        accountNumber:{type: DataTypes.STRING},
    },

    ProductAttr: {
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        createdAt:{type: DataTypes.DATE},
        updatedAt:{type: DataTypes.DATE},
        name :{type: DataTypes.STRING},
        description :{type: DataTypes.STRING},
        image :{type: DataTypes.STRING},
        cash :{type: DataTypes.INTEGER},
        rating :{type: DataTypes.STRING},
        sold :{type: DataTypes.INTEGER},
        dp :{type: DataTypes.INTEGER},
        kaliCicil :{type: DataTypes.INTEGER},
        nominalCicil :{type: DataTypes.INTEGER},
        jarakCicil :{type: DataTypes.INTEGER}
    },

    CartAttr: {
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        createdAt:{type: DataTypes.DATE},
        updatedAt:{type: DataTypes.DATE},
        userid :{type: DataTypes.INTEGER},
        productid :{type: DataTypes.INTEGER},
    }
}

module.exports = {
    Attr
}