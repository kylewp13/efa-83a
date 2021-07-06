import { useState, useEffect } from 'react'
import './App.css'
import Ticketmaster from './components/Ticketmaster'
import Weather from './components/Weather'
import Nasa from './components/Nasa'
import Github from './components/Github'

function App() {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position)
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
    })
  }, [])

  return (
    <div className='App'>
      <Weather long={location.longitude} lat={location.latitude}/>
      <Nasa long={location.longitude} lat={location.latitude} />
      <Ticketmaster long={location.longitude} lat={location.latitude} />
      <h1>Project commits</h1>
      <Github />
    </div>
  )
}

export default App;
