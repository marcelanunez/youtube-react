import React, { Component } from 'react';
import { Menu, Image, MenuItem, Form, Input, Icon } from 'semantic-ui-react';
import './HeaderNav.scss';
import logo from '../../assets/images/logo.jpg';

class HeaderNav extends Component {
  render() {
    return (
      <Menu borderless className="top-menu" fixed="top">
        <MenuItem header className="logo">
          <Image src={logo} size="tiny" />
        </MenuItem>
        <Menu.Menu className="nav-container">
          <MenuItem className="search-input">
            <Form>
              <Form.Field>
                <Input placeholder="Search" size="small" action="Go"></Input>
              </Form.Field>
            </Form>
          </MenuItem>
        </Menu.Menu>
        <Menu.Menu position='right'>
          <MenuItem>
            <Icon className="header-icon" name="video camera" size="large" />
          </MenuItem>
          <MenuItem>
            <Icon className="header-icon" name="grid layout" size="large" />
          </MenuItem>
          <MenuItem>
            <Icon className="header-icon" name="chat" size="large" />
          </MenuItem>
          <MenuItem>
            <Icon className="header-icon" name="alarm" size="large" />
          </MenuItem>
          <MenuItem name="avatar">
            <Image src="http://via.placeholder.com/80x80" avatar />
          </MenuItem>
        </Menu.Menu>
      </Menu>
    );
  }
}
export default HeaderNav;
