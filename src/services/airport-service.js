const {AirportRepository}=require('../repositories')
const AppError = require('../utils/errors/app-error')
const {StatusCodes}=require('http-status-codes')


const airportRepository=new AirportRepository()

async function createAirport(data){
  try{
    const airport=await airportRepository.create(data)
    return airport
  }catch(error){
    if (error.name==='SequelizeValidationError'){
      let explanation=[]
      error.errors.forEach((err)=>{
        explanation.push(err.message)
      })
      throw new AppError(explanation,StatusCodes.BAD_REQUEST)
    }
    throw new AppError('Cannot create new airport Object',StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

async function getAirports(){
  try{
    const airports=await airportRepository.getAll()
    return airports

  }catch(error){
    throw new AppError('Cannot fetch data of all airports',StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

async function getAirport(id){
  try{
    const airport=await airportRepository.get(id)
    return airport

  }catch(error){
    if (error.statusCode===StatusCodes.NOT_FOUND){
      throw new AppError('The airport you requested is not present',error.statusCode)
    }
    throw new AppError('Cannot fetch data of all airplnes',StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

async function destoryAirport(id) {
  try{
    const response=await airportRepository.destroy(id)
    return response

  }catch(error){
    if (error.statusCode===StatusCodes.NOT_FOUND){
      throw new AppError('The airport you requested to delete is not present',error.statusCode)
    }
    throw new AppError('Cannot fetch data of all airport',StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

module.exports={
  createAirport,
  getAirports,
  getAirport,
  destoryAirport
}