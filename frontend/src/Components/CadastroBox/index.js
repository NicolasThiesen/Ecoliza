import React, { useState }  from 'react'
import InputAuto from "../InputAucomplete"
import './style.css'
import ErrorIcon from '@material-ui/icons/Error';
import { Formik, Form,Field } from "formik";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete'
import api from 'services/api';

export default function CadastroBox() {
  const [error,setError] = useState(false);
  const [address, setAddress] = React.useState('')

    const [coordinates, setCoordinates] = React.useState();

    const handleSelect = async address => {
        const results = await geocodeByAddress(address);
        
        const {lat, lng} = await getLatLng(results[0]);
        setAddress(address);
        setCoordinates([lat,lng]);
      }
  const handleSubmit = async values => {  
    const trashes = values.trash_type.split(",")
    api.post("/ponto",{trash_type:trashes,location:coordinates,name:values.name,adress:address,description:values.description},{headers:{"adm-token":localStorage.getItem("token")}})
      .catch( function (eror){
        setError(true)
      })
      .finally(window.location.reload())

  }

  return (
    <div className="box">
      <div className="header">
        <h3>Cadastro de Ponto de Coleta</h3>
      </div>
      <Formik onSubmit={handleSubmit} initialValues={{}}>
        <Form>
          <label>Endereço</label>
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
          <label htmlFor="name">Nome do Local</label>
          <Field type="text" name="name" required autoFocus></Field>
          <label htmlFor="trash_type">Tipo de lixo reciclado:</label>
          <Field name="trash_type" placeholder="Tipos de lixo separado por vírgula"></Field>
          <label htmlFor="description">Descrição</label>
          <Field name="description"></Field>
          { error && <div className="box-error"><span className="error-msg">Erro na autenticação</span><ErrorIcon/></div>}
          <button type="submit">Cadastrar</button>
        </Form>
      </Formik>
    </div>
  )
}
