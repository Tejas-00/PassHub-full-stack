const express = require('express')
require('dotenv').config()
const bodyparser = require('body-parser')
const cors = require('cors')

// import mongoDB
const { MongoClient } = require('mongodb')

// connection url
const url = "mongodb://localhost:27017/"
const client = new MongoClient(url)

// Database name
const dbName = 'passhub'

const app = express();
const port = 3000;

app.use(bodyparser.json())
app.use(cors())

client.connect()

// getting credentials from database
app.get('/', async (req, res)=>{
    const db = client.db(dbName)
    const collection = db.collection('credential')
    const findResult = await collection.find({}).toArray();
    res.json(findResult)
})

// save credential to database
app.post('/', async (req, res)=>{
    const credential = req.body
    const db = client.db(dbName)
    const collection = db.collection('credential')
    const findResult = await collection.insertOne(credential);
    res.send({success: true})
})

// delete crendential
app.delete('/', async (req, res)=>{
    const credential = req.body
    const db = client.db(dbName)
    const collection = db.collection('credential')
    const findResult = await collection.deleteOne(credential);
    res.send({success: true})
})

app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})