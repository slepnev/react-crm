import React from 'react';
import { Link } from 'react-router-dom';
import { MenuList } from './sidebarStyled';

const Sidebar = () => {
  return (
    <MenuList className="collection">
      <Link className="collection-item waves-effect waves-light" to="/entities">Компании</Link>
      <Link className="collection-item waves-effect waves-light" to="/entities-thunk">Компании Redux Thunk</Link>
    </MenuList>

  );
};

export default Sidebar;

