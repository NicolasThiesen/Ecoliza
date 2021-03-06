import React, {useState} from 'react'
import './styles.css'
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
  } from 'react-places-autocomplete'

export default function InputAucomplete() {
    const [address, setAddress] = useState('')

    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
    })

    const handleSelect = async address => {
        const results = await geocodeByAddress(address)
        const latLang = await getLatLng(results[0])
        setAddress(address)
        setCoordinates(latLang)
      }
  return (
    <>
    <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading
          }) => (  
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Procurar',
                  className: 'location-search-input'
                })}
              />

              <div className="autocomplete-dropdown">
                <div className="content">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item'
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: '#00a035', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' }
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  )
                })}
                </div>
              </div>
            </div>
          )}
        </PlacesAutocomplete>
        </>
  )
}
