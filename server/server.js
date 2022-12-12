const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 6000;
const app = express();
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');


//graphql middleware

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(port, () =>{
    console.log(`server running on port ${port}`)
});