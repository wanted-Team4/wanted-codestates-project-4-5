import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("/question1")}>Question1</button>
    </>
  );
};

export default Index;
