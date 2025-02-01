const express=require('express')

const {airportController}=require('../../controllers')
const {AirportMiddlewares}=require('../../middlewares')
const router=express.Router()

router.post('/',
  AirportMiddlewares.validateCreateRequest,
  airportController.createAirport)

router.get('/',
  airportController.getAirports)

router.get('/:id',
  airportController.getAirport)

router.delete('/:id',
  airportController.destoryAirport)

module.exports=router