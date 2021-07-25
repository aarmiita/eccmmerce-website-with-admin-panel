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
import CategoryPage from "./pages/CategoryPage";
import { StateProvider } from "./context/StateContext";
import ProductDetailesPage from "./pages/ProductDetailesPage";
import CartPage from "./pages/CartPage";
function App() {
  let history = useHistory();
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <div className="mainContainer">
            <Header />
            <HomePage />
            <Footer />
          </div>
        </Route>
        <Route path="/home/cart" exact>
          <Header />
          <CartPage />
          <Footer />
        </Route>
        <Route path="/home/:category/:id" exact>
          <Header />
          <ProductDetailesPage />
          <Footer />
        </Route>

        <Route path="/home/:category" exact>
          <StateProvider>
            <Header />
            <CategoryPage />
            <Footer />
          </StateProvider>
        </Route>
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
