import React, { Component } from 'react'

export default class Map extends Component {
  state = {
    viewport: {
      width: 1890,
      height: 1000,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  }

  render() {
    return <h1>Ola</h1>
  }
}
