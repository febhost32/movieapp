import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import DetailMovie from "../pages/detailMovie";
import ErrorPage from "../pages/errorpage";
import Banner from "../pages/banner";

const Routers = () =>{
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/detailmovie">
                <DetailMovie />
            </Route>
            
            <Route exact path="/banner">
                <Banner />
            </Route>

        
            <Route exact path="/*">
                <ErrorPage />
            </Route>

        </Switch>

    )



}

export default Routers;