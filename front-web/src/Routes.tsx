import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Orders from "./components/Orders";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/orders">
                    <Orders />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;