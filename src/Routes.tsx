import * as React from "react";
import {Route, RouteProps, Switch} from "react-router-dom";
const About = React.lazy(() => import('./containers/About'));
const Home = React.lazy(() => import('./containers/Home'));
const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <React.Suspense fallback={loading()}>
                    <Route exact path="/" render={(routeProps: RouteProps) => (
                        <Home {...routeProps} user="Default Ubnmbser"/>
                    )}
                    />
                    <Route path="/about" component={About}/>
                </React.Suspense>
            </Switch>
        );
    }
}

export default Routes;
