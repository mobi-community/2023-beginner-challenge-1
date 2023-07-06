import { styled } from "styled-components";
import THIRDIMG from "../img/3.jpg";

const ThirdOption = () => {
  return (
    <>
      <S.Title>THIRD OPTION</S.Title>
      <div>
        <img src={THIRDIMG} alt="thirdImg" />
      </div>
    </>
  );
};

export default ThirdOption;

const Title = styled.div`
  margin: 50px;
  font-weight: bold;
  font-size: 30px;
`;

const S = { Title };
