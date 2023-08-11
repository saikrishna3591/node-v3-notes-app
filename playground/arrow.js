// normal function
// const square = function(x){
//     return x*x
// }
// console.log(square(3))

// arrow function
// const square = (x) =>{
//     return x*x
// }
// console.log(square(2))
// const square = (x) => x*x
// console.log(square(4))

// // function using this keyword
// const event ={
//     name:'Birthday Party',
//     printGuestList: function(){
//         console.log('Guest list for '+ this.name)

//     }
// }
// event.printGuestList()

// arrow function using this keyword 
// const event ={
//     name:'Birthday Party',
//     printGuestList: () =>{
//         console.log('Guest list for '+ this.name)

//     }
// }
// event.printGuestList() //this keyword wont works in arrow function
// ES6function
// const event ={
//     name:'Birthday Party',
//     printGuestList(){
//         console.log('Guest list for '+ this.name)

//     }
// }
// event.printGuestList()
// const event ={
//     name:'Birthday Party',
//     guestList:['sai','Rupesh','sunny'],
//     printGuestList(){
//         // const that = this //it will work but without that it wont work. for that we should use arrow function.
//         console.log('Guest list for '+ this.name)
//         this.guestList.forEach(function(guest){
//             console.log(guest + ' is attending '+that.name)
//         })

//     }
// }
// event.printGuestList()
// const event ={
//     name:'Birthday Party',
//     guestList:['sai','Rupesh','sunny'],
//     printGuestList(){
//         // const that = this //it will work but without that it wont work. for that we should use arrow function.
//         console.log('Guest list for '+ this.name)
//         this.guestList.forEach((guest)=>{
//             console.log(guest + ' is attending '+this.name)
//         })

//     }
// }
// event.printGuestList()
// const request = require('request')

// request({url:url,Json:true},(error,response) => {
//     console.log(response.body)
// })
// const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZ2F1dGFtZ292aW5kYTM4IiwiYSI6ImNsazg0b2JwNTA5bGozZnQ1M2R2YjI0aG4ifQ.geA3JAOAtJw1tGqqrXKAjw&limit=1'

// request({url:url,json:true},(error,response) =>{
//     if(error){
//         console.log('unable to connect to location')
//     }else if(response.body.features.length === 0){
//         console.log('unable to find location, try another search')
//     }
//     else{
//         const lattitude = (response.body.features[0].center[1])
//         const longitude = (response.body.features[0].center[0])
//         const location = response.body.features[0].place_name
//         console.log(lattitude,longitude)
//     }
    
// })