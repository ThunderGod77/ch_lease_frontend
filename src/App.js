import NavBar from "./Components/NavBar";
import AddData from "./Components/AddData";
import Home from "./Components/Home";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/addData" exact>
          <AddData />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
