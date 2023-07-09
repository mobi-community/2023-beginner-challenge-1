import styled from "styled-components";
import { TOGGLE_LIST } from "../../../Consts/menu_list";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Side() {
  const [list, setList] = useState(TOGGLE_LIST);
  const navigate = useNavigate();
  const { category, menu } = useParams();

  const openTitle = (url) => {
    const lists = [...list];
    const findUrl = lists.find((e) => e.path === url);
    findUrl.isSelected = !findUrl.isSelected;
    setList(lists);
  };

  const urlNavigate = (category, menu) => {
    navigate(`${menu}/${category}/${menu}`);
  };

  useEffect(() => {
    const lists = [...list];
    const findUrl = lists.find((e) => e.path === category);
    if (findUrl) {
      findUrl.isSelected = true;
    }
    setList(lists);
  }, [menu]);

  return (
    <S.Wrapper>
      <div>
        <ul>
          {list.map((el, idx) => (
            <S.CategoryList key={idx}>
              <S.Title onClick={() => openTitle(el.path)}>
                {el.category}
                {el.isSelected ? "-" : "+"}
              </S.Title>
              {el.isSelected && (
                <S.ListMenuWrap>
                  {el.children.map((e, idx) => (
                    <S.ListMenu
                      key={idx}
                      state={e.path === menu}
                      onClick={() => urlNavigate(el.path, e.path)}
                    >
                      {e.list}
                    </S.ListMenu>
                  ))}
                </S.ListMenuWrap>
              )}
            </S.CategoryList>
          ))}
        </ul>
      </div>
    </S.Wrapper>
  );
}
export default Side;

const Wrapper = styled.div`
  border-right: 1px solid gray;
  width: 250px;
  height: 88vh;
  padding: 30px;
`;

const CategoryList = styled.li`
  list-style: none;
`;

const Title = styled.span`
  list-style: none;
  font-size: 25px;
  margin-bottom: 15px;
  font-weight: 600;
  cursor: pointer;
`;
const ListMenuWrap = styled.ul`
  font-size: 18px;
  list-style: none;
  margin-left: 40px;
  margin-top: 20px;
  @keyframes dropdown {
    0% {
      transform: translateY(-50%);
    }
    100% {
      transform: translateY(0);
    }
  }
  animation: dropdown 1s ease;
  animation-duration: 0.4s;
  animation-timing-function: ease;
`;

const ListMenu = styled.li`
  margin: 15px 0;
  font-weight: 400;
  cursor: pointer;
  color: ${({ state }) => (state ? "blue" : "")};
  font-weight: ${({ state }) => (state ? "bold" : "")};
`;

const S = {
  Wrapper,
  CategoryList,
  Title,
  ListMenuWrap,
  ListMenu,
};
