import React, { useState, useEffect, useContext } from 'react';
import { Input, Icon } from 'semantic-ui-react';
import { ToastContainer, toast } from 'react-toastify';
import { store } from '../store';
import services from '../services';
import CurrentWeather from '../components/CurrentWeather';

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
      setCity(newCity);
      setNewCity('');
    } catch (e) {
      setNewCity('');
      toast.error('City not found!');
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <Input
        fluid
        icon={<Icon name="search" onClick={handleSearch} inverted circular link />}
        placeholder="Search..."
        onChange={(e) => setNewCity(e.target.value)}
        value={newCity}
      />
      <CurrentWeather data={data} city={city} />
    </div>
  );
};

export default Weather;
