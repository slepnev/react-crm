import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Sidebar = () => {

  const MenuList = styled.section`
      margin: 0;
  `;

  return (
    <MenuList className="collection">
      <Link className="collection-item waves-effect waves-light" to="/entities">Компании</Link>
    </MenuList>

  );
};

export default Sidebar;

