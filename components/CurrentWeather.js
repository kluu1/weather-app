import { Card, Image } from 'semantic-ui-react';
import { ToastContainer } from 'react-toastify';
import { convertTemp } from '../utils';

const CurrentWeather = ({ data, city }) => {
  const renderImage = () => {
    if (data.weather[0].description.includes('clear')) {
      return <Image src="sunny.png" />;
    } else if (data.weather[0].description.includes('cloud')) {
      return <Image src="sunny_with_clouds.png" />;
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      {data && data.main ? (
        <>
          <Card fluid color="blue">
            <Card.Content>
              <Card.Description>
                <h2>Current Weather in {city}</h2>
                <hr />
                {renderImage()}
                <h3>Feels like: {convertTemp(data.main.feels_like)} F</h3>
                <h4>{data.weather[0].description}</h4>
                <div>Temp: {convertTemp(data.main.temp)} F</div>
                <div>Min: {convertTemp(data.main.temp_min)} F</div>
                <div>Max: {convertTemp(data.main.temp_max)} F</div>
                <div>Humidity: {data.main.humidity} %</div>
                <div>Wind: {data.wind.speed} mph</div>
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

export default CurrentWeather;
