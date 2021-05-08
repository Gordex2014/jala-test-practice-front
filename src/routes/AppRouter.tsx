import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Navbar } from "../components/Navbar";

import { Cart } from "../pages/Cart";
import { Menu } from "../pages/Menu";
import { Rate } from "../pages/Rate";
import { Search } from "../pages/Search";

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar>
          <Switch>
            <Route exact path="/" component={Menu} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/rate" component={Rate} />
            <Route exact path="/search" component={Search} />
            <Redirect to="/" />
          </Switch>
        </Navbar>
      </div>
    </Router>
  );
};
