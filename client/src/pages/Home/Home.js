import { useAuth } from "../../util/auth";
import weatherCall from "../../util/weather";
import { useState, useEffect } from "react";
const apiKey = "e4d5971bc32e69580b23b38529ab190e"; 



export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //fetching data from the api
    fetch ("https://api.openweathermap.org/data/2.5/weather?q=SanDiego,us&appid=" + apiKey + "&units=imperial")
    .then((response) => console.log(response));
  }, []);
  
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
      <form id="search-form">
        <input type="text" id="search-input" className="form-input w-100 fs-3" placeholder="Enter a city name" />
        <button type="submit" id="submit button" className="col-12 bg-info fs-4 my-4 p-2 border-dark">
          Submit 
        </button>
      </form>
      <div>
        <h3>
          Weather Info
        </h3>
        <p>
          Location: 
        </p>
      </div>
    </div>
  );
}
