import React, { Component } from 'react';
import { Subscription } from './Subscription/Subscription';
import { Divider } from 'semantic-ui-react';
import { SidebarHeader } from '../SidebarHeader/SidebarHeader';

export class Subscriptions extends Component {
  render() {
    return (
      <React.Fragment>
        <SidebarHeader title="Subscriptions" />
        <Subscription label="Music Channel" broadcasting />
        <Subscription label="Coursera" amountOfVideos={10} />
        <Subscription label="TEDx Talks" amountOfVideos={23} />
        <Subscription label="Standford iOS" amountOfVideos={4} />
        <Subscription label="Udacity" amountOfVideos={114} />
        <Divider />
      </React.Fragment>
    );
  }
}
export default Subscriptions;
