import React, { useEffect } from "react";
import Commits from "./routes/Commits";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import { Navigate, Routes, Route } from "react-router-dom";
import { CommitsContextProvider } from "./contexts/Store";
import { PATHS } from "./constants";
import styled from 'styled-components';
import { COLORS } from "./baseComponents/Palette/Palette";

function App() {
  return (
    <AppContainer>
      <CommitsContextProvider>
        <Routes>
          <Route path={PATHS.home} element={<Home />} />
          <Route path={PATHS.commits} element={<Commits />} />
          <Route path={PATHS.notFound} element={<NotFound />} />
          <Route path={PATHS.any} element={<Navigate replace to="/does/not/exist" />} />
        </Routes>
      </CommitsContextProvider>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  background-color: ${COLORS.gray50};
  border-radius: 10px;
  margin: 48px;
  padding: 48px;
`;

export default App;
