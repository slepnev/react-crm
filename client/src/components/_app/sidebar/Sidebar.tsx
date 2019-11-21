import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItemParams, MenuList } from './sidebarStyled';

const Sidebar = () => {
  return (
    <MenuList className="collection">
      <Link className="collection-item waves-effect waves-light" to="/app1">
        App1
        <MenuItemParams>
          <li>Hooks</li>
          <li>Fetch</li>
          <li>Css modules</li>
        </MenuItemParams>
      </Link>
      <Link className="collection-item waves-effect waves-light" to="/app2">
        App2
        <MenuItemParams>
          <li>Redux / Thunk</li>
          <li>Styled-components</li>
        </MenuItemParams>
      </Link>
    </MenuList>

  );
};

export default Sidebar;

