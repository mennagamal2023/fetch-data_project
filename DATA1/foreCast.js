const request = require("request")

const foreCast=(longtitude,latitude,callback)=>{

    const url ="http://api.weatherapi.com/v1/current.json?key=b6b35af0158a4ad8b32185253240303&q=" + latitude + "," + longtitude
   
    request({url , json:true},(error,response)=>{
       
       if(error){
           callback("Error has OCCURED",undefined)
       }else if (response.body.error){
           callback(response.body.error.message,undefined)
       }else{
           callback(undefined , response.body.location.name +",it is "+ response.body.current.condition.text +"& temperature is " +
           response.body.current.temp_c)
           
       }
   
    })
   }

   module.exports = foreCast