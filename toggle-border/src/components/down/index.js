import {
  Outlet,
  useParams,
  useOutletContext,
  useNavigate,
} from "react-router-dom";
import { styled } from "styled-components";

const Down = () => {
  const { data } = useOutletContext();
  const { id } = useParams();
  const navigate = useNavigate();

  const find = data.find((v) => {
    return v.id == id;
  });

  return (
    <>
      {find.content.map((v) => (
        <Button
          onClick={() => {
            navigate(`up/${v.id}`);
          }}
        >
          {v.subtitle}
        </Button>
      ))}
      <Outlet context={{ id, data }} />
    </>
  );
};
export default Down;

const Container = styled.div`
  display: flex;
`;

const Button = styled.button`
  width: 100px;
  height: 28px;
  border: none;
  background-color: black;
  border-radius: 4px;
  color: pink;
  font-weight: 500;
  margin-left: 10px;
  margin-top: 10px;
`;
