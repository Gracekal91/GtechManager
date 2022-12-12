const express = require('express');
require('dotenv').config();
const colors = require('colors');
const port = process.env.PORT || 4000;
const cors = require('cors');
const app = express();
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const dbConnect = require('./config/db');

//connect to the database

dbConnect();

//Middleware for cors
app.use(cors());

//graphql middleware

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true
    }))


app.listen(4000, () =>{
    console.log(`server running on port ${port}`)
});