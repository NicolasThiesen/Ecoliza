import React from 'react';
import PropTypes from 'prop-types';
import {BaseControl} from 'react-map-gl';

class MyCustomOverlay extends BaseControl {
  // Instead of implementing render(), implement _render()
  _render() {
    const {viewport} = this._context;
    // draw something
    // _containerRef registers event listeners for map interactions
    return <div ref={this._containerRef} />;
  }
}
export default MyCustomOverlay