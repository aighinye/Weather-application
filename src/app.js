function displayTemperature(response){
    console.log(response.data.main.temp);
}

let Apikey ="243c458c7335db869e116o40t5bf4ad2";
let ApiUrl =
`https://api.openweathermap.org/data/2.5/weather?q=FCT Abuja&appid=${apikey}`;


axios.get(apiUrl).then(displayTemperature);