# Akuakultur.ID Backend Service

![https://avatars.githubusercontent.com/u/114127814?s=200&v=4](https://avatars.githubusercontent.com/u/114127814?s=200&v=4)

## Swagger Open API 3.0

```json
openapi: 3.0.0
info:
  title: OCBC Hack@On 2022
  version: 1.0.0
servers:
  - url: http://{{local}}
  - url: http://{{url}}
tags:
  - name: OCBC Onboarding Params
  - name: OCBC Onboarding Apply
  - name: Users
  - name: Products
paths:
  /ocbc/params/marriages:
    get:
      tags:
        - OCBC Onboarding Params
      summary: Akuakultur OCBC Marriage List
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /ocbc/params/religions:
    get:
      tags:
        - OCBC Onboarding Params
      summary: Akuakultur OCBC Religion List
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /ocbc/params/educations:
    get:
      tags:
        - OCBC Onboarding Params
      summary: Akuakultur OCBC Education List
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /ocbc/params/purpose:
    get:
      tags:
        - OCBC Onboarding Params
      summary: Akuakultur OCBC Purpose List
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /ocbc/params/sourceOfFunds:
    get:
      tags:
        - OCBC Onboarding Params
      summary: Akuakultur OCBC sourceOfFunds List
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /ocbc/params/monthlyIncomes:
    get:
      tags:
        - OCBC Onboarding Params
      summary: Akuakultur OCBC monthlyIncomes List
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /ocbc/params/monthlyTransactions:
    get:
      tags:
        - OCBC Onboarding Params
      summary: Akuakultur OCBC monthlyTransactions List
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /ocbc/params/relationship:
    get:
      tags:
        - OCBC Onboarding Params
      summary: Akuakultur OCBC relationship List
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /ocbc/params/citizenship:
    get:
      tags:
        - OCBC Onboarding Params
      summary: Akuakultur OCBC citizenship List
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /ocbc/params/termsAndCondition:
    get:
      tags:
        - OCBC Onboarding Params
      summary: Akuakultur OCBC TnC List
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /ocbc/params/countries:
    get:
      tags:
        - OCBC Onboarding Params
      summary: Akuakultur OCBC countries List
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /ocbc/params/provinces:
    get:
      tags:
        - OCBC Onboarding Params
      summary: Akuakultur OCBC provinces List
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /ocbc/params/city:
    get:
      tags:
        - OCBC Onboarding Params
      summary: Akuakultur OCBC city List
      parameters:
        - name: provinceId
          in: query
          schema:
            type: integer
          example: '1'
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /ocbc/params/district:
    get:
      tags:
        - OCBC Onboarding Params
      summary: Akuakultur OCBC district List
      parameters:
        - name: cityId
          in: query
          schema:
            type: integer
          example: '2'
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /ocbc/params/subdistrict:
    get:
      tags:
        - OCBC Onboarding Params
      summary: Akuakultur OCBC subdistrict List
      parameters:
        - name: districtId
          in: query
          schema:
            type: integer
          example: '15'
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /ocbc/params/zipCode:
    get:
      tags:
        - OCBC Onboarding Params
      summary: Akuakultur OCBC zipcode List
      parameters:
        - name: subDistrictId
          in: query
          schema:
            type: integer
          example: '2'
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /ocbc/params/occupation:
    get:
      tags:
        - OCBC Onboarding Params
      summary: Akuakultur OCBC occupation List
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /ocbc/params/jobs:
    get:
      tags:
        - OCBC Onboarding Params
      summary: Akuakultur OCBC jobs List
      parameters:
        - name: occupationId
          in: query
          schema:
            type: integer
          example: '2'
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /ocbc/onboarding/apply:
    post:
      tags:
        - OCBC Onboarding Apply
      summary: Onboarding New Account
      requestBody:
        content:
          application/json:
            schema:
              type: object
              example:
                nik: '1029837465999999'
                name: ADMIN AKUAKULTUR
                email: admin@akuakultur.id
                phone: '08781267322'
                mother: IBU MIMIN
                dob: '2000-12-20'
                gender: MALE
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /ocbc/onboarding/accountApply:
    post:
      tags:
        - OCBC Onboarding Apply
      summary: Onboarding Verify Account
      requestBody:
        content:
          application/json:
            schema:
              type: object
              example:
                birth_place: BANDUNG
                marriage: SINGLE
                religion: KAT
                education: E
                city: Jakarta Timur, Wil. Kota
                district_code: KALI DERES
                sub_district_code: PEGADUNGAN
                street_address: JL TARUNA JAYA GG.SWADAYA II
                zip_code: '81161'
                rt: '002'
                rw: '001'
                onboarding_token: 803dee2b-46ee-4093-b227-d10af59e66ae
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /ocbc/onboarding/workDataApply:
    post:
      tags:
        - OCBC Onboarding Apply
      summary: Onboarding Work Data Apply
      requestBody:
        content:
          application/json:
            schema:
              type: object
              example:
                work_occupation_id: 1
                work_position_id: 29
                work_industry_id: 4
                work_company_name: Xsis Mitra Utama
                work_started_at: '2015-03-01'
                zip_code: 15314
                city: Tangerang, Kab.
                district_code: BUMI SERPONG DAMAI
                sub_district_code: SETU
                street_address: Delatinos R122 no 10
                rt: '001'
                rw: '001'
                purpose: A
                fund_source: A
                monthly_income: '100000000'
                monthly_transaction: A
                card_delivery: AT_BRANCH
                onboarding_token: 803dee2b-46ee-4093-b227-d10af59e66ae
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /ocbc/onboarding/TNCApply:
    post:
      tags:
        - OCBC Onboarding Apply
      summary: Onboarding TnC Apply
      requestBody:
        content:
          application/json:
            schema:
              type: object
              example:
                confirm: true
                onboarding_token: 803dee2b-46ee-4093-b227-d10af59e66ae
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /ocbc/checkAccount/balance:
    post:
      tags:
        - OCBC Onboarding Apply
      summary: Onboarding Check Account Balance
      requestBody:
        content:
          application/json:
            schema:
              type: object
              example:
                onboarding_token: 803dee2b-46ee-4093-b227-d10af59e66ae
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /ocbc/transfer/inquiry:
    post:
      tags:
        - OCBC Onboarding Apply
      summary: Onboarding Transfer Inquiry
      requestBody:
        content:
          application/json:
            schema:
              type: object
              example:
                accountNumber: '10024151016420220924075811'
                transferAmount: 125000
                paymentDetail: ok
                onboarding_token: 803dee2b-46ee-4093-b227-d10af59e66ae
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /ocbc/transfer/submit:
    post:
      tags:
        - OCBC Onboarding Apply
      summary: Onboarding Transfer Submit
      requestBody:
        content:
          application/json:
            schema:
              type: object
              example:
                accountNumber: '10024151016420220924075811'
                transferAmount: 125000
                paymentDetail: ok
                onboarding_token: 803dee2b-46ee-4093-b227-d10af59e66ae
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /user:
    get:
      tags:
        - Users
      summary: Get all users
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /user/signup:
    post:
      tags:
        - Users
      summary: Signup Add new user
      requestBody:
        content:
          application/json:
            schema:
              type: object
              example:
                fname: Yana
                lname: Bantal
                email: yana@bantal.id
                password: '12345'
                retypePass: '12345'
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /user/login:
    post:
      tags:
        - Users
      summary: Login find one user
      requestBody:
        content:
          application/json:
            schema:
              type: object
              example:
                email: yana@bantal.id
                password: '12345'
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /user/edit_profile:
    put:
      tags:
        - Users
      summary: Update profile
      requestBody:
        content:
          application/json:
            schema:
              type: object
              example:
                password: '12345'
                nik: '3838383838383838'
                name: PARTNER APP
                email: admin@partner.id
                phone: '089090896745'
                mother: IBU PARTNER
                dob: '2000-12-20'
                gender: MALE
                birthPlace: BANDUNG
                marriage: SINGLE
                religion: KAT
                education: E
                province: BALI
                city: Jakarta Timur, Wil. Kota
                district: KALI DERES
                subDistrict: PEGADUNGAN
                street: JL TARUNA JAYA GG.SWADAYA II
                zipCode: '81161'
                rt: '096'
                rw: '13'
                occupation: '1'
                position: '29'
                industry: '4'
                companyName: PT. Satu Dua Tiga
                startedAt: '2000-01-01'
                comProvince: BALI
                comCity: Denpasar, Kota.
                comDistrict: DENPASAR UTARA
                comSubDistrict: PEGUYANGAN
                comStreet: Jl. Jalan ke Sukamakmur
                comZipCode: '41838'
                comRt: '212'
                comRw: '008'
                purpose: A
                fundSource: A
                mIncome: '100000000'
                mTrx: A
                cardDelivery: AT_BRANCH
                onBoardingToken: 048b2714-1eab-478f-b952-f19c73a626d3
                accountNumber: '10018036937720220925045637'
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /product/add:
    post:
      tags:
        - Products
      summary: Add product
      requestBody:
        content: {}
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
    get:
      tags:
        - Products
      summary: Get product
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /product/add_cart:
    post:
      tags:
        - Products
      summary: Add to cart
      requestBody:
        content: {}
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /product/cart:
    get:
      tags:
        - Products
      summary: Get cart
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /:
    get:
      tags:
        - General
      summary: Akuakultur Home Signature
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /oauth/token:
    post:
      tags:
        - General
      summary: OCBC Access Token
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              properties:
                grant_type:
                  type: string
                  example: client_credentials
      parameters:
        - name: Authorization
          in: header
          schema:
            type: string
          example: >-
            Basic
            MjA5YjkzOWEtMDIyZi00NTZhLTliOTMtOWEwMjJmNTU2YTZjOmUzYjEyMGE3LTMyNTktNGRkZS1iMTIwLWE3MzI1OWFkZGU3ZQ==
        - name: Content-Type
          in: header
          schema:
            type: string
          example: application/x-www-form-urlencoded
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
```

📂 [**GitHub** repositories](https://github.com/Akuakultur-ID)

📸 [__Instagram__ `@akuakultur_id`](https://www.instagram.com/akuakultur_id/)

📧 `kontak.akuakultur@gmail.com`
