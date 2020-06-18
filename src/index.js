const express = require('express')
const app = express()

const path = require('path')
const port = process.env.PORT 
const http = require('http')
const server = http.createServer(app)
const chatbot=require('./chatbot/chatbot')
app.use(express.json())
//const publicDirectoryPath = path.join(__dirname, '../public')
//app.use(express.static(publicDirectoryPath))


//we use .. to get out from directory since utils is same dir as src we dont use ..
app.post('/sendtext',async(req,res)=>{


let responses=await chatbot.textQuery(req.body.text,req.body.parameters)

res.send(responses[0].queryResult)
      }


)




server.listen(port, () => {
    console.log('server is running ')
})

