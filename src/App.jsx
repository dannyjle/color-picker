import React, { Component } from 'react'

export class App extends Component {
  state = {
    hue: 0,
    saturation: 0,
    lightness: 0,
  }

  render() {
    return (
      <>
        <h1>Color Selector!</h1>
      </>
    )
  }
}
