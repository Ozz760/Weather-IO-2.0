import { useAuth } from "../util/auth";
import fetchWeather from "../util/weather";

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
        make comments your self.
      </p>
    </div>
  );
}
