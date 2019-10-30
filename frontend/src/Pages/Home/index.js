import React, { useState, useEffect } from 'react'
import ReactMap, {
  GeolocateControl,
  NavigationControl,
  Marker,
  Popup
} from 'react-map-gl'
import api from '../../services/api'
import { Search } from 'Components'
import Room from '@material-ui/icons/Room'
import './style.css'

export const Home = () => {
  const [market, setMarket] = useState([])
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const res = await api.get('/ponto/all')
      setMarket(res.data)
    }
    fetchData()
  }, [])

  const geolocateStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 17
  }

  const [viewport, setViewport] = useState({
    height: '100vh',
    width: '100vw',
    latitude: -27.5776516,
    longitude: -48.5121398,
    zoom: 12
  })

  return (
    <div>
      <ReactMap
        {...viewport}
        trackUserLocation={true}
        mapStyle="mapbox://styles/nicolasmt/ck1fejr3145k91cqp2qhw4wla"
        mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
        onViewportChange={viewport => {
          setViewport(viewport)
        }}
      >
        <Search />

        {market.map(ponto => (
          <Marker
            key={ponto._id}
            latitude={ponto.location[0]}
            longitude={ponto.location[1]}
          >
            <button
              className="marker-btn"
              onClick={event => {
                event.preventDefault()
                setSelected(ponto)
              }}
            >
              <Room />
            </button>
          </Marker>
        ))}

        {selected ? (
          <Popup
            latitude={selected.location[0]}
            longitude={selected.location[1]}
            offsetLeft={11}
            offsetTop={-2}
            onClose={() => {
              setSelected(null)
            }}
          >
            <div className="popup">
              <h2>{selected.name}</h2>
              <p>{selected.description}</p>
            </div>
          </Popup>
        ) : null}
        {/* Botão de geolocalização do usuário */}
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{ enableHighAccuracy: true, timeout: 6000 }}
          trackUserLocation={true}
        />
        <div style={{ position: 'absolute', right: 40, top: 10 }}>
          <NavigationControl />
        </div>
      </ReactMap>
    </div>
  )
}

export default Home
