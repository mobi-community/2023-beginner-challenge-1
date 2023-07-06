import { styled } from "styled-components";
import FOURTHIMG from "../img/4.jpg";

const FourthOption = () => {
  return (
    <>
      <S.Title>FOURTH OPTION</S.Title>
      <div>
        <img src={FOURTHIMG} alt="fourthImg" />
      </div>
    </>
  );
};

export default FourthOption;

const Title = styled.div`
  margin: 50px;
  font-weight: bold;
  font-size: 30px;
`;

const S = { Title };
