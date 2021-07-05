import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather';

function App() {

  //TODO: Pass down LAT and LON as props

  return (
    <div className="App">
      <Weather latitude={"LAT goes here"} longitude={"LON goes here"} />
    </div>
  );
}

export default App;
