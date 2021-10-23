//  75101a036370a4e5304c153f3b26c5df



let input = document.querySelector(".search-bar")
let city = document.getElementsByClassName("city");
let te = document.getElementsByClassName("temp");
let button = document.querySelector("button");
let humidity = document.querySelector(".humidity");
let wind =  document.querySelector(".wind");
button.addEventListener("click", () => {
  let finalArrg = input.value ;
  if (finalArrg) {
    api (finalArrg);
  }
  else {
    te[0].innerHTML = "please enter a city name";
  }

})
input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    let finalArrg = input.value ;
    if (finalArrg) {
      api (finalArrg);
    }
    else {
      te[0].innerHTML = "please enter a city name";
    }
  
}


  
})

function api  (city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=75101a036370a4e5304c153f3b26c5df`)
.then((res)=>{
  let allcitys = res.json();
  
  return allcitys
})
.then ((tempofcity) => {
  te[0].innerHTML = Math.ceil(tempofcity.main.temp) +' °C';
  humidity.innerHTML = `Humidity: ${tempofcity.main.humidity}%`
  wind.innerHTML = `Wind speed: ${tempofcity.wind.speed} km/h`

  console.log(tempofcity.main);
})
.catch(rej => {
  te[0].innerHTML = "wrong city"
})
}
