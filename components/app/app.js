import React from 'react';
import UpAndDownComponent from '../up-and-down/up-and-down';
import SideToSideComponent from '../side-to-side/side-to-side';
import AnimationSummaryComponent from '../animation-summary/animation-summary';

export default () => {
  const demo = {
    height: '20em',
  };

  return (
    <div>
      <div style={demo}>
        <h1>up and down</h1>
        <UpAndDownComponent />
      </div>
      <div style={demo}>
        <h1>side to side</h1>
        <SideToSideComponent />
      </div>
      <div style={demo}>
        <h1>animation summary</h1>
        <AnimationSummaryComponent />
      </div>
    </div>
  );
};
