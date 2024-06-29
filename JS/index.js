var searchBtn = document.querySelector("#search");
var countryInput = document.querySelector("#countryName");
var displaySection = document.querySelector("main section.display .row");

// because we want to use await and there is two condition to use it
// 1- in function async
// 2- we put it before a promise
  // var request = await fetch("http://api.weatherapi.com/v1/search.json?key=51d6791ef4a44063915235132242806&q=lond");
  //will return location and current

console.log(displaySection)



async function getWeather(countryName) {
  try {
    var request2 = await fetch(`http://api.weatherapi.com/v1/current.json?key=51d6791ef4a44063915235132242806&q=${countryName}`);
    var data2 = await request2.json();
    console.log(data2); 
  }
  
  catch (error) {
    console.log("sss");
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


  displaySection.innerHTML =  `<  <!-- ="===========================""" -->
        <div class="col-lg-4 ">
          <div class="item">
        <div class="card w-100 pb-4" style="width: 18rem;">
                       <div class="card-header d-flex justify-content-between" >
                         <p>Saturday</p>
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
        <div class="col-lg-4 ">
          <div class="item">
            <div class="card w-100 pb-5" style="width: 18rem;">
              <div class="card-header" >
                <p class="text-center">🇸unday</p>
              </div>
             <div class="p-4 text-center">
              <p>Alex</p>
              <h4 class="fs-1">27.0*C</h4>
              <i>Icon</i>
              <p>clear</p>
              
          </div>
        </div>
          </div>
      </div>
<!-- ="=======================================================""" -->
      <div class="col-lg-4">
        <div class="item">
          <div class="card w-100 pb-5" style="width: 18rem;">
            <div class="card-header" >
              <p class="text-center">🇸unday</p>
            </div>
           <div class="p-4 text-center">
            <p>Alex</p>
            <h4 class="fs-1">27.0*C</h4>
            <i>Icon</i>
            <p>clear</p>
            
        </div>
      </div>
        </div>
    </div>

          `;
  }

