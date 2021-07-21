import "./assets/sass/app.scss";

import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./pages/LoginPage";
import ProductManagePage from "./pages/ProductManagePage";
import { ProtectedRoute } from "./ProtectedRoute";
import { useHistory } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Orders from "./pages/Orders";
import StockAndPrice from "./pages/StockAndPrice";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
// import ResponsiveDrawer from "./pages/layout";
function App() {
  let history = useHistory();
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <div className="mainContainer">
            <Header />
            <HomePage />
          </div>
        </Route>
        {/* <Route path="/admin/newadmin" exact>
          <ResponsiveDrawer>Hello</ResponsiveDrawer>
        </Route> */}
        <Route path="/admin/login" exact component={SignIn} />
        <ProtectedRoute
          path="/admin/dashboard"
          exact
          component={ProductManagePage}
        />
        <ProtectedRoute path="/admin/Orders" exact component={Orders} />
        <ProtectedRoute
          path="/admin/StockAndPrice"
          exact
          component={StockAndPrice}
        />
        <Route path="*" exact>
          <Header />
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
