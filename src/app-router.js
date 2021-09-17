import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";

export default function AppRouter() {

    const routes = [
        {
            path: `/`,
            exact: true,
            main: () => <Home />
        }
    ]

    return (
        <Switch>
            {routes.map((route, index) => (
                <Route key={index} path={route.path} exact={route.exact || true} children={<route.main />} />
            ))}
        </Switch>
    )
}