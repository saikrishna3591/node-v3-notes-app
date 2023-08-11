const request = require("request")

const forecast=(lattitude,longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=ba9e1817cdd847211e5a544147e6ea39&query='+lattitude+','+longitude
    request({url:url,Json:true},(error,response)=>{
        console.log(url)
        console.log(response.body)
        if(error){
            callback('Unable to connect weather services',undefined)
        }else if(response.body.error){
            callback('Unable to find location',undefined)
        }else{
            console.log(response.body.current)
            // callback(undefined,response.body.current.weather_descriptions[0])
        }
    })
}

module.exports=forecast