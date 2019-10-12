import React, {Component } from 'react';
import Header from "../coponents/Header";
import Map from "../coponents/Map";
class Home extends Component{
    render(){
        return( 
           <> 
            <Header/>     
            <Map/>
           </>
        )
    }
}
export default Home;