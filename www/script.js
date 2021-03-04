const totalCases = document.querySelector(".total_cases");
const deaths = document.querySelector(".deaths");
const recovered = document.querySelector(".recovered");
const newCases = document.querySelector(".new_cases");
var settings = {
  async: true,
  crossDomain: true,
  url:
    "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
  method: "GET",
  headers: {
    "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
    "x-rapidapi-key": "7ab5bc98e5msh2a02aa319f5d355p1f98bdjsn76fd281af303",
  },
};

$.ajax(settings).done(function (response) {
  displayData(response);
});

function displayData(data) {
  const parsedData = JSON.parse(data);
  console.log(parsedData.countries_stat);
  const countries = parsedData.countries_stat;
  countries.forEach(function (country) {
    if (country.country_name == "India") {
      totalCases.innerHTML = country.cases;
      deaths.innerHTML = country.deaths;
      recovered.innerHTML = country.total_recovered;
      newCases.innerHTML = country.new_cases;
    }
  });
}
