import React, {lazy,Suspense} from 'react'
import {
    BrowserRouter as Router, Route,
    Switch
} from "react-router-dom";
import {LoadingSpinner} from "./components";
import ScrollToTop from "./helpers/scrollToTop";

const HomePage = lazy(() => import('./pages/homePage'));
const MovieDetailPage = lazy(() => import('./pages/movieDetailPage'));

const App = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Suspense fallback={<LoadingSpinner/>}>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/movies/:id' component={MovieDetailPage}/>
                </Switch>
            </Suspense>

            <ScrollToTop/>
        </Router>
    );
}

export default App;
