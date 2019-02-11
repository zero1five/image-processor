import React, {PureComponent} from 'react';
import ImageProcessor from '../src';

export default class App extends PureComponent {
  render() {
    return (
      <div style={{width: 300, height: 175, margin: '300px auto 0px'}}>
        <ImageProcessor />
      </div>
    );
  }
}
