import { styled } from "styled-components";
import { BsFillSuitHeartFill } from "react-icons/bs";
import ToggleOption from "./toggleOption";
import { useState } from "react";

const Toggle = ({ toggle }) => {
  // toggle1-first/second, toggle2-third/fourth 객체 만들어서 map 돌리는 것으로 로직 변경하기

  const [isToggleOpen, setIsToggleOpen] = useState(false);

  if (toggle)
    return (
      <>
        <S.ToggleContainer>
          <S.Title isOpen={isToggleOpen}>
            {toggle.title}
            <BsFillSuitHeartFill
              className="ToggleIcon"
              onClick={() => setIsToggleOpen((prev) => !prev)}
            />
          </S.Title>
          <ToggleOption
            toggleOptionList={toggle.children}
            isOpen={isToggleOpen}
          />
        </S.ToggleContainer>
      </>
    );
};

export default Toggle;

const ToggleContainer = styled.ul`
  margin: 50px;
  list-style: none;
`;

const Title = styled.div`
  padding: 0px;
  font-size: 20px;
  font-weight: bold;
  margin: 20px;
  .ToggleIcon {
    color: salmon;
    margin-left: 10px;
    transform: rotate(${(props) => (props.isOpen ? "180deg" : "0deg")});
  }
`;

const S = { ToggleContainer, Title };
