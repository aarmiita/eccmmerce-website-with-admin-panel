import "./App.css";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { ProtectedRooute } from "./ProtectedRooute";
function App() {
  return (
    <>
      <Switch>
        <Route path="/home">
          <Header />
        </Route>
        <Route path="/admin/login" exact component={LoginPage} />
      </Switch>
    </>
  );
}

export default App;
