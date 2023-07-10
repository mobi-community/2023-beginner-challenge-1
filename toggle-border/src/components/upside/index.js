import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
const Upside = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  localStorage.setItem("data", JSON.stringify(show));

  useEffect(() => {
    const saveData = localStorage.getItem("data");
    console.log(saveData);
    setShow(saveData);
  }, []);

  const [data, setData] = useState([
    {
      id: 1,
      title: "브랜드별",
      content: [
        {
          id: 1,
          subtitle: "나이키",
          information: "여기는 나이키 페이지 입니다",
        },
        {
          id: 2,
          subtitle: "아디다스",
          information: "여기는 아디다스 페이지 입니다",
        },
        {
          id: 3,
          subtitle: "르꼬끄",
          information: "여기는 르꼬끄 페이지 입니다",
        },
      ],
    },
    {
      id: 2,
      title: "종류",
      content: [
        {
          id: 1,
          subtitle: "상의",
          information: "여기는 상의 페이지 입니다",
        },
        {
          id: 2,
          subtitle: "하의",
          information: "여기는 하의 페이지 입니다",
        },
        {
          id: 3,
          subtitle: "원피스",
          information: "여기는 원피스 페이지 입니다",
        },
        {
          id: 4,
          subtitle: "악세사리",
          information: "여기는 악세사리 페이지 입니다",
        },
      ],
    },
    {
      id: 3,
      title: "순위",
      content: [
        {
          id: 1,
          subtitle: "배송비",
          information: "여기는 배송비 페이지 입니다",
        },
        {
          id: 2,
          subtitle: "가격대",
          information: "여기는 가격대 페이지 입니다",
        },
        {
          id: 3,
          subtitle: "별점순",
          information: "여기는 별점순 페이지 입니다",
        },
      ],
    },
  ]);

  return (
    <>
      <div>
        {data.map((data) => (
          <Button
            onClick={() => {
              navigate(`down/${data.id}`);
              setShow(!show);
            }}
          >
            {data.title}
          </Button>
        ))}
      </div>
      <div>{show && <Outlet context={{ data }} />}</div>
    </>
  );
};
export default Upside;

const Button = styled.button`
  width: 100px;
  height: 28px;
  border: none;
  background-color: pink;
  border-radius: 4px;
  color: #545454;
  font-weight: 600;
  margin-left: 10px;
`;
