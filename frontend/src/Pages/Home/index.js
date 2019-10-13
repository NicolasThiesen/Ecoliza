import React, { Component } from 'react';
import { Header, Map } from 'Components';
import { Point } from "./point.png";
class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Map />
        <img alt="a" src={Point}></img>
      </>
    )
  }
}
export default Home
