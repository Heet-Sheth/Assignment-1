import React from "react";
import { NavLink, BrowserRouter, Switch, Route } from "react-router-dom";
import AddForm from "./add/addform";
import "./index.css";
import ReadForm from "./read/readform";
import UpdateForm from "./update/editform";
export default function Index() {
  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <div className="menu-container">
            <NavLink exact to="/" className="link" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/add" className="link" activeClassName="active">
              Add
            </NavLink>
            <NavLink to="/read" className="link" activeClassName="active">
              Read
            </NavLink>
            <NavLink to="/edit" className="link" activeClassName="active">
              Update
            </NavLink>
          </div>
          <div className="body">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/add">
                <AddForm />
              </Route>
              <Route path="/read">
                <ReadForm />
              </Route>
              <Route path="/edit/:id/:fnm/:lnm/:age/:gen/:hobby">
                <UpdateForm />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
function Home() {
  return <h1>Home</h1>;
}
