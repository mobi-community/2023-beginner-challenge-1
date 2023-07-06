import { useSearchParams } from "react-router-dom";
import { styled } from "styled-components";
import { useTargetOption } from "../../context/targetOption";

const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { setTargetOption } = useTargetOption();

  const updateParam = (key) => {
    searchParams.set("key", key);
    localStorage.setItem("key", key);
    setSearchParams(searchParams);
    setTargetOption(key);
  };

  return (
    <S.Container>
      <div onClick={() => updateParam("HOME")}>🫠THIS IS A HEADER🫠</div>
    </S.Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: #ff9eaa;
  color: white;
  font-size: 20px;
  line-height: 50px;
  font-weight: bold;
  letter-spacing: 5px;
`;

const S = { Container };
