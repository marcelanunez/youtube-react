import React from 'react';
import { Menu } from 'semantic-ui-react';
import './SidebarHeader.scss';

export const SidebarHeader = (props) => {
  const heading = props.title ? props.title.toUpperCase() : '';
  return (
    <Menu.Item>
      <Menu.Header className='side-bar-header'>{heading}</Menu.Header>
    </Menu.Item>
  )

}
export default SidebarHeader;