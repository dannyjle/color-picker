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
          <h4>Pick your color:</h4>
          <div className={'color'}></div>
          <p>Hue: {this.state.hue}</p>
          <input
            type="range"
            value={this.state.hue}
            max={360}
            min={0}
            onChange={event => this.setState({ hue: event.target.value })}
          />
          <p>Saturation: {this.state.saturation}</p>
          <input
            type="range"
            value={this.state.saturation}
            max={100}
            min={0}
            onChange={event =>
              this.setState({ saturation: event.target.value })
            }
          />
          <p>Lightness: {this.state.lightness}</p>
          <input
            type="range"
            value={this.state.lightness}
            max={100}
            min={0}
            onChange={event => this.setState({ lightness: event.target.value })}
          />
        </body>
      </>
    )
  }
}
