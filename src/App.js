import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
import Index from "./pages/index";
import Question1 from "./pages/Question1";
import Question2 from "./pages/Question2";
import styled from "styled-components";
import SearchResult from "./pages/SearchResult";
import store from "./store/configure";
import { Provider } from "react-redux";



const App = () => {
  return (
    <BrowserRouter>
      {/* 여기에 네비게이션 두시면 됩니다. */}
      <Provider store={store}>
        <MainContainer>
          <Routes>
            <Route exact path="/" element={<SearchResult />} />
            {/* <Route exact path="/" element={<Index />} /> */}
            {/* <Route exact path="/" element={<Question1 />} /> */}
            <Route exact path="/question2" element={<Question2 />} />
          </Routes>
        </MainContainer>
      </Provider>
    </BrowserRouter>
  );
};
const MainContainer = styled.main`

`;
export default App;
