import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SubMenu = ({ item, currentPath, activeMenu, handleMenuClick }) => {
  const [subnav, setSubnav] = useState(currentPath || activeMenu === item.path);

  const showSubnav = () => setSubnav(!subnav);

  const handleClick = () => {
    if (item.subNav) {
      showSubnav();
    }
    handleMenuClick(item.path);
  };

  return (
    <>
      <SidebarLink
        to={item.path}
        onClick={handleClick}
        active={activeMenu === item.path ? "true" : undefined}
      >
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>{item.subNav && <>{subnav ? item.iconOpened : item.iconClosed}</>}</div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((subItem, index) => (
          <DropdownLink
            to={subItem.path}
            key={index}
            active={activeMenu === item.path ? "true" : undefined}
          >
            {subItem.icon}
            <SidebarLabel>{subItem.title}</SidebarLabel>
          </DropdownLink>
        ))}
    </>
  );
};

export default SubMenu;

const SidebarLink = styled(Link)`
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: green;
    border-left: 4px solid greenyellow;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: gray;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: 18px;

  &:hover {
    background: green;
    cursor: pointer;
  }
`;
