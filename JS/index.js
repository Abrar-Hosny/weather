var searchBtn = document.querySelector("#search");
var countryInput = document.querySelector("#countryName");
var displaySection = document.querySelector("main .display .row");




function gotLocation(position){
  lat =  position.coords.latitude;
long = position.coords.longitude;
  console.log(lat ,long);
  getLoctaion(lat , long);
  
}

async function getLoctaion(lat , long){
  var req= await fetch(`http://api.weatherapi.com/v1/forecast.json?key=51d6791ef4a44063915235132242806&q=${long},${lat}&days=7`); 
  var data = await req.json(); 
  console.log(data);
  
  display(data);
}


navigator.geolocation.getCurrentPosition(gotLocation);


  

  function getDate (date){
  var  nameOfDay = new Date(date) ; 
  var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var dayName = daysOfWeek[nameOfDay.getDay()];
  
  return dayName ;
  }

    

 



  async function getWeather(countryName) {
    var request2 = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=51d6791ef4a44063915235132242806&q=${countryName}&days=7`); 
    var data2 = await request2.json();

  try{
    if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  }
  
  catch (error) {
  }

  return data2 ; 
}


countryInput.addEventListener("input", async function () {
    var countryName = countryInput.value;
    try{
   var data =  await getWeather(countryName);
      console.log(data.location.name);
      display(data) ; 

}
catch(e){
    console.log("sad");

}

});


// current



function display(x) {


  displaySection.innerHTML =  `<div class="col-lg-4">
          <div class="item">
        <div class="card w-100 pb-4 ">
                       <div class="card-header d-flex justify-content-between" >
                         <p>${getDate(x.forecast.forecastday[0].date)}</p>
                         <p>29 June</p>
                   
                        </div>
     
                      <div class="p-4">
                       <p>${x.location.name}</p>
                       <h4 class="fs-1">${x.current.temp_c}°C</h4>
                    <img src=${x.current.condition.icon}>
                   <p>${x.current.condition.text}</p>
                      </div>
                       <div class="d-flex">
                         <div>
                           <img src="../images/icon-umberella.png" alt="umberella">
                           <span>${x.current.temp_f}%</span>
                         </div>
                         <div>
                           <img src="../images/icon-wind.png" alt="umberella">
                           <span>${x.current.wind_kph}Km/h</span>
                         </div>
                         <div>
                           <img src="../images/icon-compass.png" alt="umberella">
                           <span>${x.current.wind_dir}</span>
                         </div>
                    
                         </div>

        </div>



       </div>
        </div>
        <!-- --------------------------------------- -->
        <div class="col-lg-4">
          <div class="item">
            <div class="card w-100 pb-5">
              <div class="card-header" >
                <p class="text-center">${getDate(x.forecast.forecastday[1].date)}</p>
              </div>
             <div class="p-4 text-center">
               <img src=${x.forecast.forecastday[1].day.condition.icon}>

               <h4 class="fs-1">${x.forecast.forecastday[1].day.maxtemp_c}°C</h4>
            <h5 class="fs-5 text-lighter text-white">${x.forecast.forecastday[1].day.maxtemp_c}°C</h5>

              <p> ${x.forecast.forecastday[1].day.condition.text}</p>
              
          </div>
        </div>
          </div>
      </div>
<!-- ="=======================================================""" -->
      <div class="col-lg-4">
        <div class="item">
          <div class="card w-100 pb-5">
            <div class="card-header" >
              <p class="text-center">${getDate(x.forecast.forecastday[2].date)}</p>
            </div>
           <div class="p-4 text-center">
 <img src=${x.forecast.forecastday[2].day.condition.icon}>
            <h4 class="fs-1">${x.forecast.forecastday[2].day.maxtemp_c}°C</h4>
            <h5 class="fs-5 text-lighter text-white">${x.forecast.forecastday[2].day.maxtemp_c}°C</h5>

              <p> ${x.forecast.forecastday[2].day.condition.text}</p>
            
        </div>
      </div>
        </div>
    </div>

          `;
  }


  



