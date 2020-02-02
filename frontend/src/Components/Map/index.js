import React, { useState, useEffect } from 'react'
import ReactMap, {GeolocateControl,NavigationControl,Marker,Popup,FlyToInterpolator} from "react-map-gl"
import api from "../../services/api"
import Search from '../Search'



//Icons 
import Room from '@material-ui/icons/Room'

//Styles
import "./style.css"


export default function Map()  {
  const [darkStyle,setDarkSyle] = useState(false)
  const [market,setMarket] = useState([])
  const [filter,setFilter] = useState()
  const [selected,setSelected] = useState(null)
  const [data,setData] = useState()
  const [camera,setCamera] = useState([0,null])
  useEffect (()=>{
    navigator.geolocation.getCurrentPosition(position => {
      setViewport({
        height: 'calc(100vh - 80px)',
        width: '100vw',
        latitude:position.coords.latitude,
        longitude:position.coords.longitude,
        zoom: 12
      })
    })
    async function fetchData() {
      const res = await api.get("/ponto/all")
      setMarket(res.data)
      
    }
    fetchData()
    
  },[filter])
  useEffect (() => {
    setCamera([750,new FlyToInterpolator()])
    if(data!==undefined){
      setViewport({
        height: 'calc(100vh - 80px)',
        width: '100vw',
        latitude:data.location[0],
        longitude:data.location[1],
        zoom: 12
      })
    }
    setTimeout(()=>{setCamera([0,null])})
  },[data])

  const geolocateStyle = {
    position: 'absolute',
    bottom: 105,
    right: 0,
    margin: 17
  }

    const [viewport,setViewport] = useState({
      height: 'calc(100vh - 80px)',
      width: '100vw',
      latitude:-27.563090799999998,
      longitude:-48.5287365,
      zoom: 12
    })

    return(
      
     <div>
       <ReactMap 
      {...viewport}
      trackUserLocation={true}
      mapStyle = {
         darkStyle ? "mapbox://styles/nicolasmt/ck1fejr3145k91cqp2qhw4wla" : "mapbox://styles/nicolasmt/ck2hmyt471nm11cp3ckoexjjm"
      }
      mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN} 
      transitionDuration={camera[0]}
      transitionInterpolator={camera[1]}
      onViewportChange={viewport => {
        setViewport(viewport)
      }}
      >
        <Search data={setData.bind(this)}/>
        {/* Adiciona no mapa cada Ponto de reciclagem  */}
        {market.map(ponto => (
          <Marker
          key={ponto._id}
          latitude={ponto.location[0]}
          longitude={ponto.location[1]}
          >
            <button className="marker-btn" onClick={(event)=>{
              event.preventDefault()
              setSelected(ponto)
            }}>
              <Room/>
            </button>

          </Marker>
        ))}
        {/* Poup up aparece quando a seleção do Lugar/Point muda */}
        {selected ? (
          <Popup
           latitude={selected.location[0]} 
           longitude={selected.location[1]}
           offsetLeft={11}
           offsetTop={-2}
           onClose={()=>{
             setSelected(null)
           }}
           >
            <div className="popup">
              <h2>{selected.name}</h2>
              <p>{selected.description}</p>
            </div>
          </Popup>
        ): null}
        {/* Botão de geolocalização do usuário */}
        
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{enableHighAccuracy: true, timeout:6000}}
          trackUserLocation={true}
        />
        <div style={{position: 'absolute', right: 17, bottom:25}}>

          <NavigationControl />
        </div>

        </ReactMap>
       
     </div>
    )
  
}
