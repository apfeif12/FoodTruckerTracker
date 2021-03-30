import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./Components/Login/Login.js";
import Register from "./Components/Register/Register.js";
import Home from "./Components/Home/Home.js";
import Header from "./Components/Header/Header.js";

import { UserContext } from "./Utils/UserContext";
import PrivateRoute from "./Utils/PrivateRoute";
import { useProfile } from "./Utils/useProfile";

function App() {
    const [user, setUser] = useProfile();
    return (
        <div className="App">
            <UserContext.Provider value={{ user, setUser }}>
                <Header/>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </Switch>
            </UserContext.Provider>
        </div>
    );
}

export default App;
