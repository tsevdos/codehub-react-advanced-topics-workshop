import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
// CPC
import {
  UserList,
  UserListContainer,
  UserListContainer3,
  TodoApp,
  TodoAppContainer,
} from "./examples/CPC/index";
// HoC
import {
  HoCStarWarsCharacters1,
  HoCStarWarsCharacters2,
  HoCStarWarsCharacters3,
  HoCStarWarsCharacters4,
  HoCExerciseCard,
  HoCCardSolution,
} from "./examples/HoC/index";
// Render props
import {
  StarWarsCharactersRP,
  StarWarsCharactersRP1,
  StarWarsCharactersRP2,
  StarWarsCharactersRP3,
  StarWarsCharactersRP4,
  RPExerciseCard,
  RPCardSolution,
} from "./examples/RP/index";
// Hooks
import {
  HookUseState,
  HookUseEffect,
  HookUseEffect2,
  HookUseReducer,
  CustomHook,
  HookExerciseCard,
  HookCardSolution,
} from "./examples/Hooks/index";
// CSS
import "./app.css";

ReactDOM.render(
  <BrowserRouter>
    <div className="container">
      <div className="row">
        <div className="col-3">
          <aside>
            <h2>Examples</h2>
            <h5>Presentational and Container components</h5>
            <nav className="nav flex-column">
              <NavLink to="/CPC/01" className="nav-link">
                01
              </NavLink>
              <NavLink to="/CPC/02" className="nav-link">
                02
              </NavLink>
              <NavLink to="/CPC/03" className="nav-link">
                03
              </NavLink>
              <NavLink to="/CPC/exercise" className="nav-link">
                exercise
              </NavLink>
              <NavLink to="/CPC/solution" className="nav-link">
                solution
              </NavLink>
            </nav>
            <h5>Higher-order components (HOC)</h5>
            <nav className="nav flex-column">
              <NavLink to="/HoC/01" className="nav-link">
                01
              </NavLink>
              <NavLink to="/HoC/02" className="nav-link">
                02
              </NavLink>
              <NavLink to="/HoC/03" className="nav-link">
                03
              </NavLink>
              <NavLink to="/HoC/04" className="nav-link">
                04
              </NavLink>
              <NavLink to="/HoC/exercise" className="nav-link">
                exercise
              </NavLink>
              <NavLink to="/HoC/solution" className="nav-link">
                solution
              </NavLink>
            </nav>
            <h5>Render props</h5>
            <nav className="nav flex-column">
              <NavLink to="/RP/01" className="nav-link">
                01
              </NavLink>
              <NavLink to="/RP/02" className="nav-link">
                02
              </NavLink>
              <NavLink to="/RP/03" className="nav-link">
                03
              </NavLink>
              <NavLink to="/RP/04" className="nav-link">
                04
              </NavLink>
              <NavLink to="/RP/05" className="nav-link">
                05
              </NavLink>
              <NavLink to="/RP/exercise" className="nav-link">
                exercise
              </NavLink>
              <NavLink to="/RP/solution" className="nav-link">
                solution
              </NavLink>
            </nav>
            <h5>React Hooks</h5>
            <nav className="nav flex-column">
              <NavLink to="/hooks/01" className="nav-link">
                01
              </NavLink>
              <NavLink to="/hooks/02" className="nav-link">
                02
              </NavLink>
              <NavLink to="/hooks/03" className="nav-link">
                03
              </NavLink>
              <NavLink to="/hooks/04" className="nav-link">
                04
              </NavLink>
              <NavLink to="/hooks/05" className="nav-link">
                05
              </NavLink>
              <NavLink to="/hooks/exercise" className="nav-link">
                exercise
              </NavLink>
              <NavLink to="/hooks/solution" className="nav-link">
                solution
              </NavLink>
            </nav>
          </aside>
        </div>

        <div className="col-9">
          <h1>React Advanced Topics</h1>
          {/* Presentational and Container components */}
          <Route exact path="/CPC/01" component={UserList} />
          <Route exact path="/CPC/02" component={UserListContainer} />
          <Route exact path="/CPC/03" component={UserListContainer3} />
          <Route exact path="/CPC/exercise" component={TodoApp} />
          <Route exact path="/CPC/solution" component={TodoAppContainer} />
          {/* Higher-order components (HOC) */}
          <Route exact path="/HoC/01" component={HoCStarWarsCharacters1} />
          <Route exact path="/HoC/02" component={HoCStarWarsCharacters2} />
          <Route exact path="/HoC/03" component={HoCStarWarsCharacters3} />
          <Route exact path="/HoC/04" component={HoCStarWarsCharacters4} />
          <Route exact path="/HoC/exercise" component={() => <HoCExerciseCard title="My card" />} />
          <Route exact path="/HoC/solution" component={() => <HoCCardSolution title="My card" />} />
          {/* Render props */}
          <Route exact path="/RP/01" component={StarWarsCharactersRP} />
          <Route exact path="/RP/02" component={StarWarsCharactersRP1} />
          <Route exact path="/RP/03" component={StarWarsCharactersRP2} />
          <Route exact path="/RP/04" component={StarWarsCharactersRP3} />
          <Route exact path="/RP/05" component={StarWarsCharactersRP4} />
          <Route exact path="/RP/exercise" component={() => <RPExerciseCard title="My card" />} />
          <Route exact path="/RP/solution" component={() => <RPCardSolution title="My card" />} />
          {/* Hooks */}
          <Route exact path="/hooks/01" component={HookUseState} />
          <Route exact path="/hooks/02" component={HookUseEffect} />
          <Route exact path="/hooks/03" component={HookUseEffect2} />
          <Route exact path="/hooks/04" component={HookUseReducer} />
          <Route exact path="/hooks/05" component={CustomHook} />
          <Route
            exact
            path="/hooks/exercise"
            component={() => <HookExerciseCard title="My card" />}
          />
          <Route
            exact
            path="/hooks/solution"
            component={() => <HookCardSolution title="My card" />}
          />
        </div>
      </div>
    </div>
  </BrowserRouter>,
  document.getElementById("app")
);
