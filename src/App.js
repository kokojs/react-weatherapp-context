import './App.css';
import Weather from './components/Weather';
import Cities from './components/Cities';
import { CityProvider } from './context/WeatherContext';

function App() {
  return (
    <div className="App">
      <CityProvider>
        <Cities/>
        <Weather/>
      </CityProvider>
    </div>
  );
}

export default App;
