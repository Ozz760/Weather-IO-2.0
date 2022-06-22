import { useAuth } from "../../util/auth";
const apiKey = "e4d5971bc32e69580b23b38529ab190e"; 


function weatherCall (cityName) {
  const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + ",us&appid=" + apiKey + "&units=imperial";
  fetch (weatherUrl)
  .then(function(responce) {
    return responce.json(); 
  }) 
  .then(function(data) {
    console.log(data);
});
}

export default function Home() {
  const { isLoggedIn, user } = useAuth();
  return (
    <div>
      {/* TODO: display logged in user's username */}
      <h1>Welcome {isLoggedIn ? user.username : "Guest"}!</h1>
      <hr />
      <p>
        Welcome to Weather.IO. This is a page where you can look at the current
        weather condition of your location and tell other users if there is any
        discrepancies. You need to be login in order to view the comments and
        make comments yourself.
      </p>
    </div>
  );
}
