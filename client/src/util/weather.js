const apiKey = "e4d5971bc32e69580b23b38529ab190e"; 


export default function weatherCall (cityName) {
    const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + ",us&appid=" + apiKey + "&units=imperial";
    fetch (weatherUrl)
    .then(function(responce) {
      return responce.json(); 
    }) 
    .then(function(data) {
      console.log(data);
  });
  }