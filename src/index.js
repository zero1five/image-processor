import React, {Component} from 'react';
import './index.css';

class ImageProcessor extends Component {
  render() {
    return (
      <div className="pro-container">
        <ProContent />
      </div>
    );
  }
}

class ProContent extends Component {
  render() {
    return <div className="pro-content">+</div>;
  }
}

export default ImageProcessor;
