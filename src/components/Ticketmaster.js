import React, { useState, useEffect } from 'react'
import '../components/Ticketmaster.css'

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

  useEffect(() => {
    fetchEvents()
  }, [lat, long])

  // let eventMapping = events => {
  //   return events?.map((event, index) => (
  //     <div key={index}>
  //       <img src={event.images[1].url} />
  //       <h2>{event.name}</h2>
  //       <h3>{event._embedded.venues[0].name}</h3>
  //       <a href={event.url} target='_blank'>
  //         Click here for event details.
  //       </a>
  //     </div>
  //   ))
  // }

  return (
    <div>
      <h1>This is Ticketmaster</h1>
      {/* {eventMapping} */}
      {events?.map((event, index) => (
        <div key={index}>
          <img src={event.images[1].url} className='image' />
          <h2>{event.name}</h2>
          <h3>{event._embedded.venues[0].name}</h3>
          <div>
            <span>
              {event.dates.start.localDate} @ {event.dates.start.localTime}
            </span>
          </div>
          <a href={event.url} target='_blank'>
            Click here for event details.
          </a>
        </div>
      ))}
    </div>
  )
}

export default Ticketmaster
