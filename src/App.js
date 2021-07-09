import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProductManagePage from "./pages/ProductManagePage";
import { ProtectedRoute } from "./ProtectedRoute";
import { useHistory } from "react-router-dom";
import HomePage from "./pages/HomePage";
function App() {
  let history = useHistory();
  return (
    <>
      <Switch>
        <div>
          <Route path="/home" exact>
            <Header />
            <HomePage />
          </Route>
        </div>
        <div>
          <Route path="admin/login" exact component={LoginPage} />
        </div>
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
