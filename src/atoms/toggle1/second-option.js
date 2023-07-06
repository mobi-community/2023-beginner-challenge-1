import { styled } from "styled-components";
import SECONDIMG from "../img/2.jpg";

const SecondOption = () => {
  return (
    <>
      <S.Title>SECOND OPTION</S.Title>
      <div>
        <img src={SECONDIMG} alt="secondImg" />
      </div>
    </>
  );
};

export default SecondOption;

const Title = styled.div`
  margin: 50px;
  font-weight: bold;
  font-size: 30px;
`;

const S = { Title };
