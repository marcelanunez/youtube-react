import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import './VideoPreview.scss';

export class VideoPreview extends Component {
  render() {
    return (
      <div className="video-preview">
        <div className="image-container">
          <Image src="http://via.placeholder.com/210x118" />
          <div className="time-label">
            <span>05:22</span>
          </div>
        </div>
        <div className="video-info">
          <div className="semi-bold show-max-two-lines">Video Title</div>
          <div className="video-preview-metadata-container">
            <div className="channel-tile">Channel Title</div>
            <div>
              <span>2.1 M views · 2 Days ago</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
