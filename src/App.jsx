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
        <body>
          <h1>Color Selector!</h1>
          <div>Pick your color:</div>
          <p>Hue:{this.state.hue}</p>
          <input
            type="range"
            value={this.state.hue}
            max={0}
            min={0}
            onChange={event => this.setState({ hue: event.target.value })}
          />
          <p>Saturation:{this.state.saturation}</p>
          <input
            type="range"
            value={this.state.saturation}
            max={0}
            min={0}
            onChange={event => this.setState({ hue: event.target.value })}
          />
          <p>Lightness:{this.state.lightness}</p>
          <input
            type="range"
            value={this.state.lightness}
            max={0}
            min={0}
            onChange={event => this.setState({ hue: event.target.value })}
          />
        </body>
      </>
    )
  }
}
