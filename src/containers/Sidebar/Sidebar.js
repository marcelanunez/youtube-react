import React, { Component } from 'react';
import { SidebarItem } from './SidebarItem/SidebarItem';
import {Menu} from 'semantic-ui-react';
import './Sidebar.scss';

export class Sidebar extends Component{
  render() {
    return (
      <Menu borderless vertical stackable fixed='left' className='side-nav'>
        <SidebarItem highlight={true} label='Home' icon='home' />
        <SidebarItem label='Trending' icon='fire' />
        <SidebarItem label='Followers' icon='spy' />
        <SidebarItem label='History' icon='history' />
        <SidebarItem label='Watch Later' icon='clock' />
        <SidebarItem label='Linked Videos' icon='thumbs up' />
        <SidebarItem label='Movies and Shows' icon='film' />
        <SidebarItem label='Report History' icon='flag' />
        <SidebarItem label='Help' icon='help circle' />
        <SidebarItem label='Send Feedback' icon='comment'/>
      </Menu>
    );
  }
}
export default Sidebar;