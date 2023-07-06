import { styled } from "styled-components";
import FirstOption from "../atoms/toggle1/first-option";
import SecondOption from "../atoms/toggle1/second-option";
import FourthOption from "../atoms/toggle2/fourth-option";
import ThirdOption from "../atoms/toggle2/third-option";

const useParamKey = (key) => {
  const Contents = {
    first: <FirstOption />,
    second: <SecondOption />,
    third: <ThirdOption />,
    fourth: <FourthOption />,
  };

  return Contents[key] ? Contents[key] : <S.HOME>HOME</S.HOME>;
};

export default useParamKey;

const HOME = styled.div`
  margin: 50px;
  font-size: 50px;
  font-weight: bold;
`;

const S = { HOME };
