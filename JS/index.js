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


  displaySection.innerHTML =  `<div class="item ">
            <div class="col-lg-4 ">
              <div class="card" style="width: 18rem;">
                <div class="card-header d-flex justify-content-between">
                  <p>Saturday</p>
                  <p>29 June</p>
                </div>
               <div class="p-4">
                <p>${x.location.name} </p>
                <h4 class="fs-1">27.0*C</h4>
                <i>Icon</i>
                <p>clear</p>
                <div class="d-flex">
                  <div>
                    <img src="../images/icon-umberella.png" alt="umberella">
                    <span>23*</span>
                  </div>
                  <div>
                    <img src="../images/icon-wind.png" alt="umberella">
                    <span>23*</span>
                  </div>
                  <div>
                    <img src="../images/icon-compass.png" alt="umberella">
                    <span>23*</span>
                  </div>
                </div>
               </div>
              </div>
            </div>
          </div>
          `;
  }

