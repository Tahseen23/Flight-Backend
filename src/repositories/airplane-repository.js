const CrudRepository=require('./crud-repository.js')
const {Airplane}=require('../models')


class AirplaneRepository extends CrudRepository{
  constructor(){
    super(Airplane)
  }
}

module.exports=AirplaneRepository