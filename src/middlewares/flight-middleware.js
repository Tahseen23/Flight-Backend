const {StatusCodes}=require('http-status-codes')

const {ErrorResponse}=require('../utils/common')
const AppError = require('../utils/errors/app-error')

function validateCreateRequest(req,res,next){
  if (!req.body.flightNumber){
    ErrorResponse.message='Something went wrong while creating Airport'

    ErrorResponse.error =  new AppError(['flightNumber  not Found '],StatusCodes.BAD_REQUEST)
    return res.status(StatusCodes.BAD_REQUEST).json(
      ErrorResponse
    )
  }
  if (!req.body.airplaneId){
    ErrorResponse.message='Something went wrong while creating Flight'

    ErrorResponse.error =  new AppError(['airplaneId  not Found '],StatusCodes.BAD_REQUEST)
    return res.status(StatusCodes.BAD_REQUEST).json(
      ErrorResponse
    )
  }

  if (!req.body.departureAirportId){
    ErrorResponse.message='Something went wrong while creating Flight'

    ErrorResponse.error =  new AppError(['DepartureAirportId Number not Found '],StatusCodes.BAD_REQUEST)
    return res.status(StatusCodes.BAD_REQUEST).json(
      ErrorResponse
    )
  }

  if (!req.body.departureAirportId){
    ErrorResponse.message='Something went wrong while creating Flight'

    ErrorResponse.error =  new AppError(['DepartureAirportId Number not Found '],StatusCodes.BAD_REQUEST)
    return res.status(StatusCodes.BAD_REQUEST).json(
      ErrorResponse
    )
  }


  if (!req.body.arrivalTime){
    ErrorResponse.message='Something went wrong while creating Flight'

    ErrorResponse.error =  new AppError(['ArrivalT ime Number not Found '],StatusCodes.BAD_REQUEST)
    return res.status(StatusCodes.BAD_REQUEST).json(
      ErrorResponse
    )
  }


  if (!req.body.arrivalAirportId){
    ErrorResponse.message='Something went wrong while creating Flight'

    ErrorResponse.error =  new AppError(['Arriva lAirportId Number not Found '],StatusCodes.BAD_REQUEST)
    return res.status(StatusCodes.BAD_REQUEST).json(
      ErrorResponse
    )
  }

  if (!req.body.departureTime){
    ErrorResponse.message='Something went wrong while creating Flight'

    ErrorResponse.error =  new AppError(['Departure Time Number not Found '],StatusCodes.BAD_REQUEST)
    return res.status(StatusCodes.BAD_REQUEST).json(
      ErrorResponse
    )
  }

  if (!req.body.price){
    ErrorResponse.message='Something went wrong while creating Flight'

    ErrorResponse.error =  new AppError(['price  not Found '],StatusCodes.BAD_REQUEST)
    return res.status(StatusCodes.BAD_REQUEST).json(
      ErrorResponse
    )
  }

  if (!req.body.boardingGate){
    ErrorResponse.message='Something went wrong while creating Flight'

    ErrorResponse.error =  new AppError(['Boarding Gate Number not Found '],StatusCodes.BAD_REQUEST)
    return res.status(StatusCodes.BAD_REQUEST).json(
      ErrorResponse
    )
  }

  if (!req.body.totalSeats){
    ErrorResponse.message='Something went wrong while creating Flight'

    ErrorResponse.error =  new AppError(['Total Seats Number not Found '],StatusCodes.BAD_REQUEST)
    return res.status(StatusCodes.BAD_REQUEST).json(
      ErrorResponse
    )
  }



  next()
}

module.exports={
  validateCreateRequest
}