const express=require('express')

const {airplaneController}=require('../../controllers')
const {AirplaneMiddlewares}=require('../../middlewares')
const router=express.Router()

router.post('/',
  AirplaneMiddlewares.validateCreateRequest,
  airplaneController.createAirplane)

router.get('/',
    airplaneController.getAirplanes)

module.exports=router