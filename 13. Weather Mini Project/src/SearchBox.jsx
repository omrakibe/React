import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

function SearchBox() {
  let [city, setCity] = useState("");

  let API_URL = "https://api.openweathermap.org/data/2.5/weather";

  let API_KEY = "c36ad4b88d2b67e6c099a4cf7274c551";

  let getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonRes = await response.json();

    let result = {
      temp: jsonRes.main.temp,
      tempMin: jsonRes.main.temp_min,
      tempMax: jsonRes.main.temp_max,
      humidity: jsonRes.main.humidity,
      feels_like: jsonRes.main.feels_like,
      weather: jsonRes.weather[0].description,
    };
    console.log(result);
  };

  let text = (event) => {
    setCity(event.target.value);
  };

  let submit = (event) => {
    // console.log(city);
    event.preventDefault();
    setCity("");
    getWeatherInfo();
  };
  return (
    <>
      <h1>Search for the Weather</h1>
      <form action="" onSubmit={submit}>
        <TextField
          id="city"
          label="City Name"
          variant="standard"
          required
          value={city}
          onChange={text}
        />

        <br />
        <br />

        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </>
  );
}
export default SearchBox;
