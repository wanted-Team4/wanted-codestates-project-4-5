import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
import Index from "./pages/index";
import Question1 from "./pages/Question1";
import Question2 from "./pages/Question2";
import SearchResult from "./pages/SearchResult";
import store from "./store/configure";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const persistor = persistStore(store);

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <main>
            <Routes>
              <Route exact path="/" element={<Index />} />
              <Route exact path="/question1" element={<Question1 />} />
              <Route exact path="/question2" element={<Question2 />} />
              <Route exact path="/search" element={<SearchResult />} />
            </Routes>
          </main>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
