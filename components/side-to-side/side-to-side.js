import React, { Component } from 'react';
import radium from 'radium';

class SideToSideComponent extends Component {
  constructor(props) {
    super(props);

    const upAndDown = radium.keyframes({
      '0%': {
        transform: 'translateX(0)',
      },
      '100%': {
        transform: 'translateX(5em)',
      }
    });

    this.componentStyle = {
      height: '10em',
      width: '10em',
      backgroundColor: 'blue',
      borderRadius: '50%',
      animation: `${upAndDown} 0.5s infinite linear alternate-reverse`,
    };
  }

  render() {
    return (
      <div style={this.componentStyle}></div>
    );
  }
}

SideToSideComponent.propTypes = {};

export default radium(SideToSideComponent);
