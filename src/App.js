import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./pages/LoginPage";
import ProductManagePage from "./pages/ProductManagePage";
import { ProtectedRoute } from "./ProtectedRoute";
import { useHistory } from "react-router-dom";
import HomePage from "./pages/HomePage";
function App() {
  let history = useHistory();
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Header />
          <HomePage />
        </Route>
        <Route path="/admin/login" exact component={SignIn} />
        <ProtectedRoute
          path="/admin/dashboard"
          exact
          component={ProductManagePage}
        />
      </Switch>
    </>
  );
}

export default App;
