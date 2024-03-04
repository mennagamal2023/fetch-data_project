 const request = require("request")

//  const url ="https://api.weatherapi.com/v1/current.json?key=b6b35af0158a4ad8b32185253240303&q=30.46,31.82=no"

//  request({url , json:true},(error,response)=>{
    
//     if(error){
//         console.log("Error has OCCURED")
//     }else if (response.body.error){
//         console.log(response.body.error.message)
//     }else{
//          console.log(response.body.location.name , response.body.current.condition.text)
//         console.log(response.body)
       
//     }

//  })
////////////////////////////////////////////////////////////////////
//  const geCodeUrl="https://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"

//  request({url:geCodeUrl , json:true},(error,response)=>{
    
//         if(error){
//             console.log("unable to connect gecode services")
//         }else if(response.body.message) {
   
//             console.log(response.body.message)
//         }else if (response.body.features.length ==0){
//             console.log("unable to connect to location")

//         }else{
//             const longtitude=response.body.features[0].center[0]
//             const latitude=response.body.features[0].center[1]
            
//             console.log(longtitude ,latitude)
//         }
//  })    

/////////////////////////////////////////////////////////////////////////////////
const foreCast=require("./DATA1/foreCast")
const geCode =require("./DATA1/gecode")
const country = process.argv[2]

geCode(country ,(error , data) =>{
    console.log("Error is" , error)
    console.log("lat & long is"  , data)
    foreCast( data.latitude , data.longtitude , (error,data) => {
        console.log("Error is" , error)
        console.log("Address is"  , data)
    })

})





