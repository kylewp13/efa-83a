const Ticketmaster = ({ lat, long }) => {
  fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=${process.env.REACT_APP_TM_API_KEY}&latlong=${lat}${long}`
  )
    .then(res => res.json())
    .then(json => console.log(json))

  return (
    <div>
      <h1>This is Ticketmaster</h1>
    </div>
  )
}

export default Ticketmaster
