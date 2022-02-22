import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
import Index from "./pages/index";
import Question1 from "./pages/Question1";
import Question2 from "./pages/Question2";
import styled from "styled-components";
import SearchResult from "./pages/SearchResult";

const App = () => {
  return (
    <BrowserRouter>
      {/* 여기에 네비게이션 두시면 됩니다. */}
      <MainContainer>
        <Routes>
          <Route exact path="/" element={<SearchResult />} />
          {/* <Route exact path="/" element={<Index />} /> */}
          <Route exact path="/question1" element={<Question1 />} />
          <Route exact path="/question2" element={<Question2 />} />
        </Routes>
      </MainContainer>
    </BrowserRouter>
  );
};
const MainContainer = styled.main`
    width:100%;
    height: 100vh;
    display:flex;
    justify-content: left;
    /* align-items: center; */
`;
export default App;
