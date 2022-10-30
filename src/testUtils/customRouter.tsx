import { useState, useLayoutEffect } from "react";
import { Router } from "react-router-dom";
import { MemoryHistory } from "history";

interface ICustomRouter {
  children: React.ReactNode;
  history: MemoryHistory;
}

const CustomRouter = ({ history, ...props }: ICustomRouter) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      {...props}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};

export default CustomRouter;
