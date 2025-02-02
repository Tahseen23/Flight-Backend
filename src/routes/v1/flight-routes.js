const express=require('express')

const {flightController}=require('../../controllers')
const {FlightMiddlewares}=require('../../middlewares')
const router=express.Router()

router.post('/',
  FlightMiddlewares.validateCreateRequest,
  flightController.createFlight)


module.exports=router