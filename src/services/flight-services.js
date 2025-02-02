const {FlightRepository}=require('../repositories')
const AppError = require('../utils/errors/app-error')
const {StatusCodes}=require('http-status-codes')
const {comapreTime}=require('../utils/helpers/datetime-helper')


const flightRepository=new FlightRepository()

async function createFlight(data){
  try{
    if (comapreTime(data.arrivalTime,data.departureTime)){
      throw new AppError('Arrivel time cannot be greater than departure Time',StatusCodes.BAD_REQUEST)
    }
    const flight=await flightRepository.create(data)
    return flight
  }catch(error){
    if (error.name==='SequelizeValidationError'){
      let explanation=[]
      error.errors.forEach((err)=>{
        explanation.push(err.message)
      })
      throw new AppError(explanation,StatusCodes.BAD_REQUEST)
    }
    throw new AppError('Cannot create new flight Object',StatusCodes.INTERNAL_SERVER_ERROR)
  }
}


module.exports={
  createFlight,
}