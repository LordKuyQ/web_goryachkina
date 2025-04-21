document.addEventListener('DOMContentLoaded', function(arr) {
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
  
  async function getWeather(startdate, enddate) {

    const response = await loadJson(`https://api.open-meteo.com/v1/forecast?latitude=55.0415&longitude=82.9346&hourly=temperature_2m&current=temperature_2m&timezone=auto&start_date=${startdate}&end_date=${enddate}`);
      try{
        console.log(response);
        document.getElementById('p_celcia').textContent = response.current.temperature_2m + " °C";
      } 
      catch (err) {
        if (err instanceof HttpError && err.response.status == 404) {
          alert("повторите ввод.");
          return demoGithubUser();
        } else {
          throw err;
        }
      }
  }

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  
  const startdate = formatDate(new Date());
  const enddate = formatDate(new Date(new Date().setDate(new Date().getDate() + 1)));
  
  getWeather(startdate, enddate);
});
