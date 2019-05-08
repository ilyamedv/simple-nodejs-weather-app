let request = require ("request");



let z = process.env.OWM_API_KEY;
let city = 'New York';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${z}`

request (url, function ( err, response, body){
    if (err){
      console.log('error:', error);

    } else{
      let weather = JSON.parse(body);
      console.log (`It's ${weather.main.temp} degrees in ${weather.name}`);
      console.log ('');
      console.log('body:', body);
    }
})
