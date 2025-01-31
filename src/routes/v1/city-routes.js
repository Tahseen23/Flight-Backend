const express=require('express')

const {cityController}=require('../../controllers')
const {CityMiddlewares}=require('../../middlewares')
const router=express.Router()


router.post('/',
  CityMiddlewares.validateCreateRequest,
    cityController.createCity)


module.exports=router