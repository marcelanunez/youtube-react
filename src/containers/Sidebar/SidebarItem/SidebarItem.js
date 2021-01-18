import React from 'react';
import { Icon, Menu, MenuItem,  } from 'semantic-ui-react';
import './SidebarItem.scss'

export const SidebarItem = (props) => {
  const highlight = props.highlight ? 'highlight-item' : null;
  return (
    <Menu.Item>
      <div className={['sidebar-item', highlight].join(' ')}>
        <span>
          <Icon name={props.icon} size='large'/>
        </span>
        <span>
          {props.label}
        </span>
      </div>
    </Menu.Item>
  );
}
export default SidebarItem;