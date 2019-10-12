import React, {Component } from 'react';
import CadastroBox from "../coponents/CadastroBox";
import Header from "../coponents/Header";
class Cadastro extends Component{
    render(){
        return(
           <> 
           <Header/>
            <CadastroBox/>               
           </>
        )
    }
}
export default Cadastro;