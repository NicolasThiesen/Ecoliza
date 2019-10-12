import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

import  './style.css';

export default function CadastroBox() {
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null
  });

  const handleSelect = async address => {
    const results = await geocodeByAddress(address)
    

    const latLang = await getLatLng(results[0]);
    console.log(address,latLang);
    setAddress(address);
    setCoordinates(latLang);
  };

  return (
    <div className="box">
      
        <div className="header">
                <h2>Cadastro de Ponto de Coleta</h2>
        </div>
            <form>
              <label>Endereço</label>
              <PlacesAutocomplete
               value = {address}
               onChange={setAddress} 
               onSelect={handleSelect}>
               {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
               <div>
                 <input
                 {...getInputProps({
                  placeholder: "Procurar",
                  className: 'location-search-input',
                })}
                 />

                <div className="autocomplete-dropdown-container">
                              {loading && <div>Loading...</div>}
                              {suggestions.map(suggestion => {
                                const className = suggestion.active
                                  ? 'suggestion-item--active'
                                  : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                  <div
                                    {...getSuggestionItemProps(suggestion, {
                                      className,
                                      style,
                                    })}
                                  >
                                    <span>{suggestion.description}</span>
                                  </div>
                                );
                              })}
                  </div>

                </div>
                )}
              </PlacesAutocomplete>
                <label for='input-nome'>Nome do Local</label>
                <input type="text"  id="input-nome" required autoFocus></input>
                <label>Tipo de lixo reciclado:</label><br/>
                <select>
                  <option value="Orgânico">Orgânico</option>
                  <option value="Vidro">Vidro</option>
                  <option value="Plástico">Plantico</option>
                  <option value="Metais">Metais</option>
                  <option value="Pilha">Pilha</option>
                </select>
                <label for='input-imagem' className="labelimg">Imagem do local</label>
                <div className="file">
                  <button>Foto do Local</button>
                  <input type="file" id="input-imagem" required ></input>
                </div>
                <button type="submit">Cadastrar</button>
                
            </form>

    </div>
  );
}
