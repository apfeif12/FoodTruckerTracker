import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Home() {
    return (
        <Background>
            <Container>
                <StyledH1>Welcome to Food Truck Tracker!</StyledH1>
                <div>
                    <StyledH2>Login</StyledH2>
                    <Link to="/login">
                        <StyledButton>Log in</StyledButton>
                    </Link>
                </div>
                <div>
                    <StyledH2>Register</StyledH2>
                    <Link to="/register">
                        <StyledButton>Register</StyledButton>
                    </Link>
                </div>
            </Container>
        </Background>
    );
}

const Background = styled.div`
    background: rgb(2, 0, 36);
    background: linear-gradient(
        90deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(9, 113, 121, 1) 0%,
        rgba(0, 212, 255, 1) 100%
    );
    width: 100%;
    height: 100vh;
`;

const Container = styled.div`
    display: flex;
    background-color: white;
    width: 30%;
    border-radius: 8px;
    margin: auto;
    padding: 2rem;
    border: 1px solid black;
    flex-direction: column;
`;

const StyledH1 = styled.h1`
    font-weight: 600;
    font-size: 50px;
    line-height: 50px;
    text-align: center;
    letter-spacing: 3px;
    color: #b7b6c2;
    opacity: 0.4;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
        1px 1px 0 #000;
`;

const StyledH2 = styled.h1`
    font-weight: 600;
    font-size: 30px;
    line-height: 50px;
    text-align: center;
    letter-spacing: 3px;
    color: #4d4f51;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
        1px 1px 0 #000;
`;

const StyledButton = styled.button`
    background-color: rgba(9, 113, 121, 1);
    width: 100%;
    margin-top: 1rem;
    border: none;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 15px 75px 15px 75px;
    border-radius: 10px;
    box-sizing: border-box;

    &:hover {
        opacity: 0.7;
    }
`;
