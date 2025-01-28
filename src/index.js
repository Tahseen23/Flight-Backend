const {PORT}=require('./config')
const express=require('express')
const apiRoutes=require('./routes/index.js')
const {serverConfig}=require('./config')

const app=express()

app.use(express.json())
app.use(express.urlencoded())
app.use('/api',apiRoutes)

app.listen(serverConfig.PORT,()=>{
  console.log(`Server is running at ${serverConfig.PORT}`)
})