const request =require('request')


// const geocode = (address,callback)=>{
//     const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiZ2F1dGFtZ292aW5kYTM4IiwiYSI6ImNsazg0b2JwNTA5bGozZnQ1M2R2YjI0aG4ifQ.geA3JAOAtJw1tGqqrXKAjw'
//     console.log(url)
//     request({url:url,Json:true},(error,response)=>{
//         console.log(url)
//         console.log(response.body.features[0])
        // if(error){
        //     callback('unable to connect to location',undefined)
        // }else if(response.body.features.length === 0){
        //     callback('unable to find location, try another search',undefined)
        // }else{
        //     callback(undefined,{
        //         lattitude:response.body.features[0].center[1],
        //         longitude:response.body.features[0].center[0],
        //         location:response.body.features[0].place_name
        //     })
            
        
        //}

//     })
// }


// module.exports = geocode

// request({url:url,Json:true},(error,response) => {
//     console.log(response.body)
// })
const postal='813221'
const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+postal+'.json?access_token=pk.eyJ1IjoiZ2F1dGFtZ292aW5kYTM4IiwiYSI6ImNsazg0b2JwNTA5bGozZnQ1M2R2YjI0aG4ifQ.geA3JAOAtJw1tGqqrXKAjw&limit=1'

request({url:url,json:true},(error,response) =>{
    if(error){
        console.log('unable to connect to location')
    }else if(response.body.features.length === 0){
        console.log('unable to find location, try another search')
    }
    else{
        const lattitude = (response.body.features[0].center[1])
        const longitude = (response.body.features[0].center[0])
        const location = response.body.features[0].place_name
        console.log(lattitude,longitude)
    }
    
})