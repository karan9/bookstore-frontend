import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

/**
 * Components to be lazy loaded
 * For More information on this api -
 * https://reactjs.org/docs/code-splitting.html
 */
const HomePage = lazy(() => import("./components/pages/home"));
const EditPage = lazy(() => import("./components/pages/edit"));
const AddPage = lazy(() => import("./components/pages/add"));

/**
 * Inital Render component for now
 * it consists our two basic pages
 * - Home
 * - Edit Form
 */
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/add">
            <Suspense fallback={<div>Loading ...</div>}>
              <AddPage />
            </Suspense>
          </Route>
          <Route path="/edit/:id">
            <Suspense fallback={<div>Loading ...</div>}>
              <EditPage />
            </Suspense>
          </Route>
          <Route path="/">
            <Suspense fallback={<div>Loading ...</div>}>
              <HomePage />
            </Suspense>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
