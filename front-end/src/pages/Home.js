import React, {Component } from 'react';
import Header from "../coponents/Header";
import Mapa from "../img/mapping.jpg";
class Home extends Component{
    render(){
        return( 
           <> 
            <Header/>     
            <image href={Mapa}></image>
           </>
        )
    }
}
export default Home;