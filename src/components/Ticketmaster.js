import React, { useState, useEffect } from 'react'

const Ticketmaster = ({ lat, long }) => {
  const [events, setEvents] = useState([])

  const url = `https://app.ticketmaster.com/discovery/v2/events.json?&apikey=${process.env.REACT_APP_TM_API_KEY}&latlong=`
  const latlon = lat + ',' + long

  const fetchEvents = async () => {
    try {
      const res = await fetch(url + latlon)
      const data = await res.json()
      console.log(data)
      setEvents(data._embedded.events)
    } catch (err) {
      console.log(err)
    }
  }

  //   fetch(url + latlon)
  //     .then(res => res.json())
  //     .then(json => console.log(json))

  useEffect(() => {
    console.log(lat, long)
    fetchEvents()
  })

  return (
    <div>
      <h1>This is Ticketmaster</h1>
      {events?.map((event, index) => (
        <h2 key={index}>{event.name}</h2>
      ))}
    </div>
  )
}

export default Ticketmaster
