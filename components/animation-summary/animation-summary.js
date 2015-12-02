import React, { Component } from 'react';
import radium from 'radium';

class AnimationSummaryComponent extends Component {
  constructor(props) {
    super(props);

    this.componentStyle = {};
    this.state = {
      cssRules: [],
    };
  }

  componentWillMount() {
    this.setState({
      cssRules: document.head.querySelector('style').sheet.cssRules,
    });
  }

  render() {
    return (
      <div style={this.componentStyle}>
        {Object.keys(this.state.cssRules).map(key => (
          <div>{this.state.cssRules[key].cssText}</div>
        ))}
      </div>
    );
  }
}

AnimationSummaryComponent.propTypes = {};

export default radium(AnimationSummaryComponent);
