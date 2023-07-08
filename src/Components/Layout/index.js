import { Outlet } from "react-router-dom";
import Header from "./Header/header";
import styled from "styled-components";
import Side from "./Side/side";

function Layout() {
  return (
    <S.Wrapper>
      <Header />
      <S.Container>
        <Side />
        <Outlet />
      </S.Container>
    </S.Wrapper>
  );
}
export default Layout;
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
`;

const S = {
  Wrapper,
  Container,
};
