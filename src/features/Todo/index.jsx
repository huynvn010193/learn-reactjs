import React, { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import TodoList from "./components/TodoList";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const match = useRouteMatch();
  console.log("🚀 ~ file:match", match);
  return (
    <div>
      TODO SHARED UI
      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.path}/:todoId`} component={DetailPage} />
      </Switch>
    </div>
  );
}

export default TodoFeature;
