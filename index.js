require('dotenv').config();
const os = require("os")
const express = require('express')
const context = require('./config/context')
const { ApolloServer } = require('apollo-server-express')
const { importSchema } = require('graphql-import')
const resolvers = require('./resolvers')

const schemaPath = './schema/index.graphql'
const server = new ApolloServer({
    typeDefs: importSchema(schemaPath),
    resolvers,
    context
})

const app = express();
server.applyMiddleware({ app });
const port = 4000;

var ifaces = os.networkInterfaces();
let ip="http://localhost"
Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }

    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      console.log(ifname + ':' + alias, iface.address);
    } else {
      // this interface has only one ipv4 adress
      console.log(ifname, iface.address);
      ip=iface.address
    }
    ++alias;
  });
});

app.get("/teste",(req, resp, next)=>{
   
    resp.json("{nome:'Paulo'}")
    next()
})
app.listen({port}, ()=>{
    console.log(`Executando em http://${ip}:${port}${server.graphqlPath}`)
})