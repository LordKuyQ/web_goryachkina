document.addEventListener('DOMContentLoaded', function() {

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  let currentDate = new Date();

  function updateWeather() {
    const startdate = formatDate(currentDate);
    const enddate = formatDate(new Date(currentDate.getTime() + (24 * 60 * 60 * 1000)));
    if (startdate == new Date()) {
      getTodayWeather();
    }
    else{
      getWeather(startdate, enddate);
    }
  }

  document.getElementById('next_date').addEventListener('click', () => {
    currentDate.setDate(currentDate.getDate() + 1);
    updateWeather();
  });

  document.getElementById('back_date').addEventListener('click', () => {
    currentDate.setDate(currentDate.getDate() - 1);
    updateWeather();
  });

  class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }

  async function loadJson(url) {
    const response = await fetch(url);
    if (response.status == 200) {
      return response.json();
    } else {
      throw new HttpError(response);
    }
  }

  async function getTodayWeather() {
    const response = await loadJson(`https://api.open-meteo.com/v1/forecast?latitude=55.0415&longitude=82.9346&current=temperature_2m,weather_code,wind_speed_10m,apparent_temperature`);

    try {
        console.log(response);

        document.getElementById('h3_date').textContent = formatDate(new Date());
        document.getElementById('p_celcia').textContent = response.current.temperature_2m + " °C";

        const weatherCode = response.current.weather_code;
        let precipitationText = "";
        let imgSrc = "";

        switch (true) {
            case [0, 1, 2, 3].includes(weatherCode):
                precipitationText = "ясно";
                imgSrc = "https://yastatic.net/weather/i/icons/funky/dark/skc_d.svg";
                break;
            case [45, 48, 51, 53, 55, 56, 57].includes(weatherCode):
                precipitationText = "туман";
                imgSrc = "https://yastatic.net/weather/i/icons/funky/dark/fg_d.svg";
                break;
            case [61, 63, 65, 66, 67, 80, 81, 82].includes(weatherCode):
                precipitationText = "дождь";
                imgSrc = "https://yastatic.net/weather/i/icons/funky/dark/bkn_ra_d.svg";
                break;
            case [71, 73, 75, 77, 85, 86].includes(weatherCode):
                precipitationText = "снег";
                imgSrc = "https://yastatic.net/weather/i/icons/funky/dark/bkn_sn_d.svg";
                break;
            case [95, 96, 99].includes(weatherCode):
                precipitationText = "гроза";
                imgSrc = "https://yastatic.net/weather/i/icons/funky/dark/ovc_ts_ra.svg";
                break;
            default:
                precipitationText = "облачно";
                imgSrc = "https://yastatic.net/weather/i/icons/funky/dark/ovc.svg";
                break;
        }

        document.getElementById('p_precipitation').textContent = precipitationText;
        document.getElementById('img_column_content').src = imgSrc;

        document.getElementById('p_wind_speed').textContent = response.current.wind_speed_10m + " км/ч";
        document.getElementById('p_apparent').textContent = "по ощущениям " + response.current.apparent_temperature;

    } catch (err) {
        if (err instanceof HttpError && err.response.status == 404) {
            alert("повторите ввод.");
            return demoGithubUser();
        } else {
            throw err;
        }
    }
}


  async function getWeather(startdate, enddate) {
    const response = await loadJson(`https://api.open-meteo.com/v1/forecast?latitude=55.0415&longitude=82.9346&hourly=temperature_2m,apparent_temperature,wind_speed_10m,weather_code,precipitation_probability&start_date=${startdate}&end_date=${enddate}`);

    try {
      console.log(response);

      document.getElementById('h3_date').textContent = startdate;
      document.getElementById('p_celcia').textContent = response.current.temperature_2m + " °C";

      if (response.current.snowfall === 1.00) {
        document.getElementById('p_precipitation').textContent = "снег";
        document.getElementById('img_column_content').src = "https://help.apple.com/assets/67B3DC69C33F63574F01B3A4/67B3DC6DC33F63574F01B3B0/ru_RU/e95fb90fc5a4aac111be78770921beb1.png";
      } else if (response.current.rain === 1.00) {
        document.getElementById('p_precipitation').textContent = "дождь";
        document.getElementById('img_column_content').src = "https://help.apple.com/assets/67B3DC69C33F63574F01B3A4/67B3DC6DC33F63574F01B3B0/ru_RU/4417bf88c7bbcd8e24fb78ee6479b362.png";
      } else if (response.current.precipitation === 1.00) {
        document.getElementById('p_precipitation').textContent = "осадки";
        document.getElementById('img_column_content').src = "https://help.apple.com/assets/67B3DC69C33F63574F01B3A4/67B3DC6DC33F63574F01B3B0/ru_RU/66117fab0f288a2867b340fa2fcde31b.png";
      } else {
        document.getElementById('p_precipitation').textContent = "без осадков";
        document.getElementById('img_column_content').src = "https://help.apple.com/assets/67B3DC69C33F63574F01B3A4/67B3DC6DC33F63574F01B3B0/ru_RU/575900edccbc7def167f7874c02aeb0b.png";
      }

      document.getElementById('p_wind_speed').textContent = response.current.wind_speed_10m + " км/ч";
      document.getElementById('p_apparent').textContent = "по ощущениям " + response.current.apparent_temperature;

    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("повторите ввод.");
        return demoGithubUser();
      } else {
        throw err;
      }
    }
  }

  getTodayWeather();
});
