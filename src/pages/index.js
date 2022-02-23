import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;

  button {
    margin: 0 100px;
    width: 25%;
    height: 70px;
    border: 0;
    background: #d3d3d3;
    font-size: large;
    :hover {
      background: #dcdcdc;
      transition: 0.4s;
    }
  }
`;

const SubTitle = styled.h2`
  font: normal 30px/1.5 "inherit";
  text-align: center;
  color: #444;
  margin-top: 70px;
  margin-bottom: 100px;
  span {
    font-weight: bold;
  }
`;

const Index = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <SubTitle>
        <span>오드 컨셉</span> 채용 문제
      </SubTitle>
      <button onClick={() => navigate("/question1")}>Question1</button>
      <button onClick={() => navigate("/question2")}>Question2</button>
    </Container>
  );
};

export default Index;
