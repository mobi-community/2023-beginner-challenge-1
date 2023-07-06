import { useSearchParams } from "react-router-dom";
import { styled } from "styled-components";
import { useTargetOption } from "../../../context/targetOption";

const ToggleOption = ({ toggleOptionList, isOpen }) => {
  const { targetOption, setTargetOption } = useTargetOption();

  // 클릭된 값을 param으로 전달
  const [searchParams, setSearchParams] = useSearchParams();

  const updateParam = (key) => {
    setTargetOption(key);
    localStorage.setItem("key", key);
    searchParams.set("key", key);
    setSearchParams(searchParams);
  };

  if (isOpen)
    return (
      <>
        {toggleOptionList.map((option, i) => (
          <S.EachToggleOption
            key={i}
            onClick={() => updateParam(option.key)}
            isTarget={option.key === targetOption}
          >
            {option.content}
          </S.EachToggleOption>
        ))}
      </>
    );
};

export default ToggleOption;

const EachToggleOption = styled.li`
  font-size: 16px;
  font-weight: 300;
  margin: 20px;
  background-color: ${(props) =>
    props.isTarget ? "rgba(255, 158, 170, 0.4)" : "transparent"};
`;

const S = { EachToggleOption };
