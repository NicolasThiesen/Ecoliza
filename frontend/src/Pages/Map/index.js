import React, { Component } from 'react'
import { Map } from 'Components'
class Home extends Component {
  render() {
    return (
      <Map darkStyle={this.props.darkStyle} />  
    )
  }
}
export default Home