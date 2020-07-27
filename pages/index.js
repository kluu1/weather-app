import React, { useState, useEffect, useContext } from 'react';
import { Card, Image, Input, Icon, Button } from 'semantic-ui-react';
import { ToastContainer, toast } from 'react-toastify';
import { store } from '../store';
import { convertTemp } from '../utils';
import services from '../services';

const Weather = () => {
  const { state, dispatch } = useContext(store);

  const [city, setCity] = useState('');
  const [data, setData] = useState({});
  const [newCity, setNewCity] = useState('');

  useEffect(() => {
    setCity(state && state.city);
    const weather = async () => {
      const currentWeater = await services.getWeather(state.city);
      setData(currentWeater.data);
    };
    weather();
  }, []);

  const handleSearch = async () => {
    try {
      const currentWeater = await services.getWeather(newCity);
      setData(currentWeater.data);
    } catch (e) {
      toast.error('City not found!');
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      {data && data.main ? (
        <>
          <Input
            fluid
            icon={<Icon name="search" onClick={handleSearch} inverted circular link />}
            placeholder="Search..."
            onChange={(e) => setNewCity(e.target.value)}
            value={newCity}
          />
          <Card fluid color="blue">
            <Card.Content>
              <Card.Description>
                <h2>Current Weather in {city}</h2>
                <Image src="sunny.png" />
                <h3>Feels like: {convertTemp(data.main.feels_like)} F</h3>
                <div>Temp: {convertTemp(data.main.temp)} F</div>
                <div>Min: {convertTemp(data.main.temp_min)} F</div>
                <div>Max: {convertTemp(data.main.temp_max)} F</div>
                <div>Humidity: {data.main.humidity}</div>
              </Card.Description>
            </Card.Content>
          </Card>
        </>
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default Weather;
