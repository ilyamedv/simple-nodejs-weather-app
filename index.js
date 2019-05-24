const argv = require('yargs').argv;

let request = require ("request");
let z = process.env.OWM_API_KEY;
let city = argv.c || 'New York';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${z}`


request (url, function ( err, response, body){
    if (err){
      console.log('error:', error);

    } else{
      console.log('body:', body);
      console.log ('');

      let weather = JSON.parse(body);
      if (weather.cod != 404)
      {
        console.log (`It's ${weather.main.temp} degrees in ${weather.name}`);

      }
    }
})
