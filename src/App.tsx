import React, { useEffect } from "react";
import Commits from "./routes/Commits";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Padded from "./baseComponents/Padded/Padded";
import { Navigate, Routes, Route } from "react-router-dom";
import { CommitsContextProvider } from "./contexts/CommitsContext";
import { PATHS } from "./constants";
import styled from "styled-components";
import { COLORS } from "./baseComponents/Palette/Palette";

function App() {
  return (
    <AppContainer aria-label="commits-feed-app">
      <Padded all={"48"}>
        <CommitsContextProvider>
          <Routes>
            <Route path={PATHS.home} element={<Home />} />
            <Route path={PATHS.commits} element={<Commits />} />
            <Route path={PATHS.notFound} element={<NotFound />} />
            <Route
              path={PATHS.any}
              element={<Navigate replace to={PATHS.notFound} />}
            />
          </Routes>
        </CommitsContextProvider>
      </Padded>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  background-color: ${COLORS.gray50};
  border-radius: 10px;
  max-width: 1350px;
  margin-inline: auto;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export default App;
