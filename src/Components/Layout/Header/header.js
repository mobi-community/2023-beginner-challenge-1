import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return <Wrapper onClick={() => navigate(`/`)}>CHALLENGE1</Wrapper>;
}
export default Header;

const Wrapper = styled.div`
  font-size: 50px;
  cursor: pointer;
  padding: 30px;
  display: flex;
  justify-content: center;
  box-shadow: 2px 2px 5px 2px gray;
`;
