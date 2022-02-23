import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
import Index from "./pages/index";
import Question1 from "./pages/Question1";
import Question2 from "./pages/Question2";
import styled from "styled-components";
import SearchResult from "./pages/SearchResult";
import store from "./store/configure";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const persistor = persistStore(store);

const App = () => {
  return (
    <BrowserRouter>
      {/* 여기에 네비게이션 두시면 됩니다. */}
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MainContainer>
            <Routes>
              <Route exact path="/" element={<Index />} />
              <Route exact path="/question1" element={<Question1 />} />
              <Route exact path="/question2" element={<Question2 />} />
              <Route exact path="/search" element={<SearchResult />} />
            </Routes>
          </MainContainer>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
};
const MainContainer = styled.main``;
export default App;
