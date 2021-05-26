import React, { Component } from 'react'

export class App extends Component {
  state = {
    hue: Math.floor(Math.random() * (359 - 1) + 1),
    saturation: Math.floor(Math.random() * (100 - 1) + 1),
    lightness: Math.floor(Math.random() * (100 - 1) + 1),
  }

  handleButtonClick = event => {
    const newHue = Math.floor(Math.random() * (359 - 1) + 1)
    const newSaturation = Math.floor(Math.random() * (100 - 1) + 1)
    const newLightness = Math.floor(Math.random() * (100 - 1) + 1)

    const newState = {
      hue: newHue,
      saturation: newSaturation,
      lightness: newLightness,
    }
    this.setState(newState)
  }

  render() {
    const newBackgroundColor = `hsl(${this.state.hue},${this.state.saturation}%,${this.state.lightness}%)`

    const newStyle = { backgroundColor: newBackgroundColor }

    return (
      <>
        <main>
          <h1>Color Selector!</h1>
          <h4>Pick your color:</h4>
          <h5>
            <button onClick={this.handleButtonClick}>Randomizer</button>
          </h5>
          <div className="colorBox" style={newStyle}>
            {`hsl(${this.state.hue},${this.state.saturation}%,${this.state.lightness}%)`}
          </div>
          <article>
            <p>Hue: {this.state.hue}</p>
            <input
              type="range"
              value={this.state.hue}
              max={360}
              min={0}
              onChange={event => this.setState({ hue: event.target.value })}
            />
            <p>Saturation: {this.state.saturation}%</p>
            <input
              type="range"
              value={this.state.saturation}
              max={100}
              min={0}
              onChange={event =>
                this.setState({ saturation: event.target.value })
              }
            />
            <p>Lightness: {this.state.lightness}%</p>
            <input
              type="range"
              value={this.state.lightness}
              max={100}
              min={0}
              onChange={event =>
                this.setState({ lightness: event.target.value })
              }
            />
          </article>
        </main>
      </>
    )
  }
}
