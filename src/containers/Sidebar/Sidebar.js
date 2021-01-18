import React, { Component } from 'react';
import { SidebarItem } from './SidebarItem/SidebarItem';
import {Divider, Menu} from 'semantic-ui-react';
import './Sidebar.scss';
import SidebarHeader from './SidebarHeader/SidebarHeader';
import { SidebarFooter } from "./SidebarFooter/SidebarFooter";

 class Sidebar extends Component{
  render() {
    return (
      //Components get props passed here
      <Menu borderless vertical stackable fixed='left' className='side-nav'>
        <SidebarItem highlight={true} label='Home' icon='home' />
        <SidebarItem label='Trending' icon='fire' />
        <SidebarItem label='Followers' icon='spy' />
        <Divider />
        <SidebarHeader title='Library'/>
        <SidebarItem label='History' icon='history' />
        <SidebarItem label='Watch Later' icon='clock' />
        <SidebarItem label='Linked Videos' icon='thumbs up' />
        <Divider />
        <SidebarHeader title='More from Youtube'/>
        <SidebarItem label='Movies and Shows' icon='film' />
        <Divider />
        <SidebarItem label='Report History' icon='flag' />
        <SidebarItem label='Help' icon='help circle' />
        <SidebarItem label='Send Feedback' icon='comment' />
        <Divider/>
        <SidebarFooter/>
      </Menu>
    );
  }
}
export default Sidebar;