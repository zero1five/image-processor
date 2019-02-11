import React, {Component} from 'react';
import './style/index.css';

/**
 * 点击加号添加图片到对应的canvas渲染区域
 *
 */

class ImageProcessor extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  handleFiles = ev => {
    const reader = new FileReader();
    reader.readAsDataURL(ev.target.files[0]);
    reader.onload = e => {
      this.drawCanvas(e.target.result);
    };
  };

  drawCanvas = imgData => {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    const img = new Image();
    img.src = imgData;
    img.onload = function() {
      context.drawImage(img, 0, 0);
    };
  };

  render() {
    return (
      <div className="pro-container">
        <div className="pro-content" onClick={() => this.input.current.click()}>
          +
        </div>
        <canvas id="canvas" className="pro-canvas-mask" />
        <input
          ref={this.input}
          accept="image/*"
          type="file"
          style={{display: 'none'}}
          onChange={this.handleFiles}
        />
      </div>
    );
  }
}

export default ImageProcessor;
