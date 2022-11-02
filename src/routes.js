import {BrowserRouter, Route, Routes as Switch} from "react-router-dom";

import Home from "./pages/Home";
import FinalStage from "./pages/FinalStage";


export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Home/>}/>
                <Route path="/finalstage" exact element={<FinalStage/>}/>
            </Switch>
        </BrowserRouter>
    );
}