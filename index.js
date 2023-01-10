const express = require('express')
const {ApolloServer} = require('apollo-server-express')
const mongoose = require('mongoose')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

// Database Connection
const URL= "mongodb+srv://new-user31:new-user31@labnodeapi.16lbmil.mongodb.net/mySecondDatabase?retryWrites=true&w=majority"

mongoose.connect(URL, {
    useUnifiedTopology:true, useNewUrlParser:true
}, ()=>console.log("DB CONNECTED"))


const app = express ()

app.get('/', (req, res) => {
    res.send('Hello SAWASDEE !')
  })

const startServer = async() => {
    
    const apolloServer = new ApolloServer({
        typeDefs, 
        resolvers
    })
    await apolloServer.start()
    apolloServer.applyMiddleware({app:app})
    app.listen(4000,() => console.log("Server Up & Running 4000"))
}

startServer();