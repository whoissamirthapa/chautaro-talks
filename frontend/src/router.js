import React from "react";
import { Switch, Route, Redirect } from "react-router";

import Login from "./page/auth/login/Login";
import Error404 from "./page/Error404/Error404";
import Home from "./page/home/Home";
import HowItWork from "./page/how-work/HowItWork";
import CreateChautaroMeet from "./page/Meet/create-meet/CreateMeet";
import JoinMeet from "./page/Meet/join-meet/JoinMeet";
import ChautaroMeet from "./page/Meet/Meet";
import MeetRoom from "./page/Meet/meet-room/MeetRoom";
import About from "./page/pricing/Pricing";
import DetailTalk from "./page/talks/detail-talk/DetailTalk";
import Talks from "./page/talks/Talks";

function Router() {
    const token = localStorage.getItem("cUser_token");

    return (
        <>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/home" />
                </Route>
                <Route path="/home" exact>
                    <Home />
                </Route>
                <Route path="/how-it-works" exact>
                    <HowItWork />
                </Route>
                <Route path="/talks" exact>
                    <Talks />
                </Route>
                <Route path="/detail-talk/:id" exact>
                    <DetailTalk />
                </Route>
                <Route path="/about" exact>
                    <About />
                </Route>
                <Route path="/chautaro-meet" exact>
                    <ChautaroMeet />
                </Route>
                <Route path="/chautaro-meet/create" exact>
                    <CreateChautaroMeet />
                </Route>
                <Route path="/chautaro-meet/join-meet" exact>
                    <JoinMeet />
                </Route>
                <Route path="/chautaro-meet/meet-room/:roomId" exact>
                    <MeetRoom />
                </Route>
                <Route path="/sign-in" exact>
                    <Login />
                </Route>
                <Route path="*">
                    <Error404 />
                </Route>
            </Switch>
        </>
    );
}

export default Router;
