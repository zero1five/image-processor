import React, {PureComponent} from 'react';
import ImageProcessor from '../src';

export default class App extends PureComponent {
  render() {
    return (
      <div style={{width: 600, height: 350, margin: '300px auto 0px'}}>
        <ImageProcessor />
      </div>
    );
  }
}
