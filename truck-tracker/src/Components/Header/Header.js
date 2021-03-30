import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../Utils/UserContext";

export default function Header(props) {
    const history = useHistory();
    const { user } = useContext(UserContext);

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        localStorage.removeItem("profile");
        history.push("/home");
        window.location.reload();
    };
console.log("user", user)
    return (
        <div>
            <div>
                <Link to="/home">Home</Link>
            </div>
            <div>
                {user.data ? (
                    <div>
                        <Link to="/home" onClick={logout}>
                            Logout
                        </Link>
                        <h1>Welcome back, {user.data.loggedIn.username}</h1>
                    </div>
                ) : (
                    <div>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                )}
            </div>
        </div>
    );
}
