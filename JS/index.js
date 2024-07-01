var searchBtn = document.querySelector("#search");
var countryInput = document.querySelector("#countryName");
var displaySection = document.querySelector("main section.display .row");

// because we want to use await and there is two condition to use it
// 1- in function async
// 2- we put it before a promise
  // var request = await fetch("http://api.weatherapi.com/v1/search.json?key=51d6791ef4a44063915235132242806&q=lond");
  //will return location and current

  // var lat , long ; 

  function gotLocation(position){
    console.log(position)
  }

  function getLoctaion(){
    var req= fetch(`http://api.weatherapi.com/v1/current.json?key=51d6791ef4a44063915235132242806&q=${long},${at}`); 
    var data = req.json(); 
    
  }

    searchBtn.addEventListener("click" ,   async()=>{
    await navigator.geolocation.getCurrentPosition(gotLocation);

    }
)


// async function myInfo(lat , long){
   
//   var myLoc =await fetch(`http://api.weatherapi.com/v1/lon.json.json?key=51d6791ef4a44063915235132242806&q=${lat},${long}`); 
  
//     var data =await myLoc.json() ; 
   
//     console.log("long ", data);
// }
  
  // myLocation() ;
  // myInfo(lat , long)



  

