import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddComment from "./Add/add";
import EditComent from "./Edit/edit";
import "./index.css";
import ListComment from "./List/list";
function CommentPage() {
  const [writer, setWrite] = useState(false);
  const hideShow = () => {
    setWrite(!writer);
  };
  return (
    <div>
      <BrowserRouter className="homeContainer">
        {writer ? (
          <AddComment callParentFunction={() => hideShow()} />
        ) : (
          <ListComment />
        )}
        <div className="addBtn" onClick={() => setWrite(!writer)}>
          <div className="addBtnInnertext">+</div>
        </div>
        <Switch>
          <Route path="/edit/:num">
            <EditComent />
          </Route>
          <Route path="/read">
            <ListComment />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default CommentPage;
