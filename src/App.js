import NavBar from "./Components/NavBar";
import AddData from "./Components/AddData";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
      <Footer />
    </BrowserRouter>
  );
}

export default App;
