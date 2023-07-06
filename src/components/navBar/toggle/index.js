import { useSearchParams } from "react-router-dom";
import { styled } from "styled-components";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { useEffect, useState } from "react";

const Toggle = () => {
  // 클릭된 값을 param으로 전달
  const [searchParams, setSearchParams] = useSearchParams();

  // 하이라이트
  const selectedHistory = localStorage.getItem("key");
  const [targetIndex, setTargetIndex] = useState(
    selectedHistory ? selectedHistory : false
  );

  const updateParam = (key, index) => {
    setTargetIndex(index);
    searchParams.set("key", key);
    setSearchParams(searchParams);
  };

  // 선택된 값 저장
  useEffect(() => {
    localStorage.setItem("key", targetIndex);
  }, [targetIndex]);

  const [isToggle1Open, setIsToggle1Open] = useState(false);
  const [isToggle2Open, setIsToggle2Open] = useState(false);

  const handleToggle = (toggle, setToggle) => {
    setToggle(!toggle);
  };

  return (
    <>
      <S.ToggleContainer>
        <S.Title isOpen={isToggle1Open}>
          TOGGLE1
          <BsFillSuitHeartFill
            className="ToggleIcon"
            onClick={() => handleToggle(isToggle1Open, setIsToggle1Open)}
          />
        </S.Title>
        {isToggle1Open && (
          <div>
            <S.ToggleOption
              isTarget={targetIndex === 1}
              onClick={() => updateParam("first", 1)}
            >
              FIRST OPTION
            </S.ToggleOption>
            <S.ToggleOption
              isTarget={targetIndex === 2}
              onClick={() => updateParam("second", 2)}
            >
              SECOND OPTION
            </S.ToggleOption>
          </div>
        )}
      </S.ToggleContainer>
      <S.ToggleContainer>
        <S.Title isOpen={isToggle2Open}>
          TOGGLE2
          <BsFillSuitHeartFill
            className="ToggleIcon"
            onClick={() => handleToggle(isToggle2Open, setIsToggle2Open)}
          />
        </S.Title>
        {isToggle2Open && (
          <div>
            <S.ToggleOption
              isTarget={targetIndex === 3}
              onClick={() => updateParam("third", 3)}
            >
              THIRD OPTION
            </S.ToggleOption>
            <S.ToggleOption
              isTarget={targetIndex === 4}
              onClick={() => updateParam("fourth", 4)}
            >
              FOURTH OPTION
            </S.ToggleOption>
          </div>
        )}
      </S.ToggleContainer>
    </>
  );
};

export default Toggle;

const ToggleContainer = styled.div`
  margin: 50px;
  list-style: none;
`;

const Title = styled.ul`
  padding: 0px;
  font-size: 20px;
  font-weight: bold;
  margin: 20px;
  .ToggleIcon {
    color: #ff9eaa;
    margin-left: 10px;
    transform: rotate(${(props) => (props.isOpen ? "180deg" : "0deg")});
  }
`;

const ToggleOption = styled.li`
  font-size: 16px;
  font-weight: 300;
  margin: 20px;
  background-color: ${(props) =>
    props.isTarget ? "rgba(255, 158, 170, 0.4)" : "transparent"};
`;

const S = { ToggleContainer, Title, ToggleOption };
