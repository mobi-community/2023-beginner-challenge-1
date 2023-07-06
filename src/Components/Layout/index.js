import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router";
import { styled } from "styled-components";
import Sidebar from "../Sidebar";
import { SidebarData } from "../SidebarData";

const Layout = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const savedActiveMenu = localStorage.getItem("activeMenu");
    setActiveMenu(savedActiveMenu);
  }, []);

  useEffect(() => {
    localStorage.setItem("activeMenu", activeMenu);
  }, [activeMenu]);

  const handleMenuClick = (menuId) => {
    if (activeMenu === menuId) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menuId);
    }
  };

  useEffect(() => {
    setActiveMenu(null);
  }, [location]);

  return (
    <Wrapper>
      <SidebarWrapper>
        <Sidebar data={SidebarData} activeMenu={activeMenu} handleMenuClick={handleMenuClick} />
      </SidebarWrapper>
      <Outlet />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: black;
`;

const SidebarWrapper = styled.div`
  background-color: #333;
`;
