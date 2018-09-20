import React, { Component } from 'react'
import './App.css'
import CopyToClipboard from 'react-copy-to-clipboard'

class App extends Component {
  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
    this.handleOutsideClick = this.handleOutsideClick.bind(this)

    this.state = {
      popupVisible: false
    }
  }

  handleClick() {
    if (!this.state.popupVisible) {
      document.addEventListener('click', this.handleOutsideClick, false)
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false)
    }

    this.setState(prevState => ({
       popupVisible: !prevState.popupVisible,
    }))
  }
  
  handleOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return
    }
    
    this.handleClick()
  }

  render() {
    return (
      <div className="popover-container" ref={node => { this.node = node }}>
        <button onClick={this.handleClick}>
          Toggle Popover
        </button>
        {this.state.popupVisible && (
          <div className="popover" ref={node => { this.div = node }}>
            <input className='address' defaultValue='2N4XY9Ustf9kLr33o4ZoCEjEPjNxap8uE1S' readOnly />
            <CopyToClipboard text='2N4XY9Ustf9kLr33o4ZoCEjEPjNxap8uE1S'>
              <i className="fas fa-paste clip" />
            </CopyToClipboard>
          </div>
        )}
      </div>
    )
  }
}

export default App
