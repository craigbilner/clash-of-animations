import React, { Component } from 'react';
import radium from 'radium';

class UpAndDownComponent extends Component {
  constructor(props) {
    super(props);

    const upAndDown = radium.keyframes({
      '0%': {
        transform: 'translateY(0)',
      },
      '100%': {
        transform: 'translateY(5em)',
      },
    });

    this.componentStyle = {
      height: '10em',
      width: '10em',
      backgroundColor: 'red',
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

UpAndDownComponent.propTypes = {};

export default radium(UpAndDownComponent);
