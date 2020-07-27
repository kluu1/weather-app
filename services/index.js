import axios from 'axios';

class Services {
  static getWeather = async (city) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);
  };
}

export default Services;
