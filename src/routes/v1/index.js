const express=require('express')
const {infoController}=require('../../controllers')
const airplaneRoutes=require('./airplane-routes')
const cityRoutes=require('./city-routes.js')
const airportRoutes=require('./airport-routes.js')
const flightRoutes=require('./flight-routes.js')

const router=express.Router()

router.use('/airplanes',airplaneRoutes)
router.use('/cities',cityRoutes)
router.use('/airport',airportRoutes)
router.use('/flights',flightRoutes)

router.get('/info',infoController.info)


module.exports=router