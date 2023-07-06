import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { styled } from "styled-components";

const ToggleOption = ({ toggleOptionList }) => {
  // 하이라이트
  // 하이라이트
  const selectedHistory = localStorage.getItem("key");
  const [targetIndex, setTargetIndex] = useState(
    selectedHistory ? selectedHistory : false
  );

  // 선택된 값 저장
  useEffect(() => {
    localStorage.setItem("key", targetIndex);
  }, [targetIndex]);

  // 클릭된 값을 param으로 전달
  const [searchParams, setSearchParams] = useSearchParams();

  const updateParam = (key, index) => {
    setTargetIndex(index);
    searchParams.set("key", key);
    setSearchParams(searchParams);
  };
  return (
    <>
      {toggleOptionList.map((option, index) => (
        <S.EachToggleOption onClick={() => updateParam(option.key, index)}>
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
`;

const S = { EachToggleOption };
