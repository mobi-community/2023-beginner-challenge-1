import { styled } from "styled-components";
import { BsFillSuitHeartFill } from "react-icons/bs";
import ToggleOption from "./toggleOption";

const Toggle = () => {
  // toggle1-first/second, toggle2-third/fourth 객체 만들어서 map 돌리는 것으로 로직 변경하기
  const ToggleList = [
    {
      title: "TOGGLE1",
      state: false,
      children: [
        { key: "first", content: "FIRST OPTION", isFocused: false },
        { key: "second", content: "SECOND OPTION", isFocused: false },
      ],
    },
    {
      title: "TOGGLE2",
      state: false,
      children: [
        { key: "third", content: "THIRD OPTION", isFocused: false },
        { key: "fourth", content: "FOURTH OPTION", isFocused: false },
      ],
    },
  ];

  const handleToggle = (toggle, setToggle) => {
    setToggle(!toggle);
  };

  if (ToggleList)
    return (
      <>
        {ToggleList.map((toggle, i) => (
          <S.ToggleContainer>
            <S.Title isOpen={toggle.state}>
              {toggle.title}
              <BsFillSuitHeartFill
                className="ToggleIcon"
                onClick={() => handleToggle(i)}
              />
            </S.Title>
            <ToggleOption toggleOptionList={toggle.children} />
          </S.ToggleContainer>
        ))}
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
    color: salmon;
    margin-left: 10px;
    transform: rotate(${(props) => (props.isOpen ? "180deg" : "0deg")});
  }
`;

const S = { ToggleContainer, Title };
