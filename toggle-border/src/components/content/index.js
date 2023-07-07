import { useOutletContext, useParams } from "react-router-dom";
import { styled } from "styled-components";

const Content = () => {
  const { id, data } = useOutletContext();
  const { id2 } = useParams();

  console.log(id);
  console.log(id2);
  const find = data.find((v) => {
    return v.id == id;
  });

  const info = find.content.find((v) => {
    return v.id == id2;
  });

  return (
    <>
      <Div>{info.information}</Div>
    </>
  );
};
export default Content;

const Div = styled.div`
  position: relative;
  left: 10px;
  top: 20px;
`;
