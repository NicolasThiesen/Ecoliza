import React, { useState, useEffect } from 'react';
import ReactMap, {GeolocateControl,NavigationControl,Marker,Popup} from "react-map-gl";
import api from "../../services/api";
import point from "../../img/search-icon.png";
import "./style.css";
export default function Map()  {
  const [market,setMarket] = useState([]);
  const [filter,setFilter] = useState( );
  const [selected,setSelected] = useState(null);
  useEffect (()=>{
    async function fetchData() {
      const res = await api.get("/ponto");
      setMarket(res.data);
    }
    fetchData();
    
  },[filter]);
  
  const geolocateStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 17
  };
    const [viewport,setViewport] = useState({
      height: '100vh',
      width: '100vw',
      latitude:-27.5776516,
      longitude: -48.5121398,
      zoom: 12
    });
    return(
     <div>
       <ReactMap 
      {...viewport}
      trackUserLocation={true}
      mapboxApiAccessToken="pk.eyJ1Ijoibmljb2xhc210IiwiYSI6ImNrMWZlaWNydjBsNWozY255cW1jYzhtZnYifQ.cNg1-mPZ3nMEuM_3JLza0w" 
      mapStyle = "mapbox://styles/nicolasmt/ck1fejr3145k91cqp2qhw4wla"
      onViewportChange={viewport => {
        setViewport(viewport);
      }}
      >
        <div className="search">
          <input></input>
        </div>
        {market.map(ponto => (
          <Marker
          key={ponto._id}
          latitude={ponto.location[0]}
          longitude={ponto.location[1]}
          >
            <button className="marker-btn" onClick={(event)=>{
              event.preventDefault();
              setSelected(ponto);
            }}>P
              <image src={point} alt="Pointer"></image>
            </button>

          </Marker>
        ))}
        {selected ? (
          <Popup
           latitude={selected.location[0]} 
           longitude={selected.location[1]}
           offsetLeft={5}
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
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
        />
        <div style={{position: 'absolute', right: 25, top:10}}>
          <NavigationControl />
        </div>
       </ReactMap>
     </div>
    )
  
}
