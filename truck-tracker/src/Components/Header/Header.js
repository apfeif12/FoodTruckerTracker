import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../Utils/UserContext";
import styled from "styled-components";

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
    console.log("user", user);
    return (
        <Container>
            <Nav>
                <Link to="/home">Home</Link>
            </Nav>
            <Nav>
                <Link to="/dashboard">Dashboard</Link>
            </Nav>

            {user.data ? (
                <Nav>
                    <Link to="/home" onClick={logout}>
                        Logout
                    </Link>
                    {/* <h1>Welcome back, {user.data.loggedIn.username}</h1> */}
                </Nav>
            ) : (
                <Nav>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </Nav>
            )}
        </Container>
    );
}

const Container = styled.div`
    height: 75px;
    background-color: #484c52;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Nav = styled.h2`
    color: white;
    text-decoration: none;
`;
