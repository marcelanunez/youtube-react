import React from 'react';
import './AppLayout.scss';
import HeaderNav from '../../containers/HeaderNav/HeaderNav';

export const AppLayout = (props) => {
  return (
    <div className="app-layout">
      <HeaderNav></HeaderNav>
      {props.children}
    </div>
  );
};

export default AppLayout;
