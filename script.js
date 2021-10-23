//  75101a036370a4e5304c153f3b26c5df



let input = document.querySelector(".search-bar")
let city = document.getElementsByClassName("city");
let te = document.getElementsByClassName("temp");
let button = document.querySelector("button");
let humidity = document.querySelector(".humidity");
let wind =  document.querySelector(".wind");
let description = document.querySelector(".description")
let icons =document.querySelector(".icon")
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

function api  (finalArrg) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${finalArrg}&units=metric&appid=75101a036370a4e5304c153f3b26c5df`)
.then((res)=>{
  let allcitys = res.json();
  
  return allcitys
})
.then ((tempofcity) => {
  te[0].innerHTML = Math.ceil(tempofcity.main.temp) +' °C';
  humidity.innerHTML = `Humidity: ${tempofcity.main.humidity}%`
  wind.innerHTML = `Wind speed: ${tempofcity.wind.speed} km/h`
  city[0].innerHTML = `Weather in ${finalArrg}`
  description.innerHTML = tempofcity.weather[0].description;
  icons.src  = `https://openweathermap.org/img/wn/${tempofcity.weather[0].icon}.png`
  console.log(tempofcity.main);
})
.catch(rej => {
  te[0].innerHTML = "wrong city"
})
}
