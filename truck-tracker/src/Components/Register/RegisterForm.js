import React from "react";
import styled from "styled-components";

export default function LoginForm(props) {
    const { disabled, values, change, submit, errors, serverErrors } = props;

    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    };

    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        const useValue = type === "checkbox" ? checked : value;
        change(name, useValue);
    };

    return (
        <div>
            <StyledH1>Create Account</StyledH1>
            <FormDiv>
                <form onSubmit={onSubmit}>
                    <p>{serverErrors.err} </p>
                    <div>
                        <label>
                            <StyledH2>Username:</StyledH2>
                            <input
                                className="username"
                                type="text"
                                name="username"
                                onChange={onChange}
                                value={values.username}
                                placeholder="Please enter your username"
                            />
                        </label>
                        <p>{errors.username}</p>
                    </div>
                    <div>
                        <label>
                            <StyledH2>Email:</StyledH2>
                            <input
                                className="email"
                                type="email"
                                name="email"
                                onChange={onChange}
                                value={values.email}
                                placeholder="Please enter your email"
                            />
                        </label>
                        <p>{errors.email}</p>
                    </div>
                    <div>
                        <label>
                            <StyledH2>Password:</StyledH2>
                            <input
                                className="password"
                                type="password"
                                name="password"
                                onChange={onChange}
                                value={values.password}
                                placeholder="Please enter your password"
                            />
                        </label>
                        <p>{errors.password}</p>
                    </div>
                    <div>
                        <StyledButton type="submit" disabled={disabled}>
                            Create Account
                        </StyledButton>
                    </div>
                </form>
            </FormDiv>
        </div>
    );
}

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

const FormDiv = styled.div`
    background-color: rgba(82, 45, 128, 0.08);
    width: 30%;
    border-radius: 8px;
    margin: auto;
    padding-top: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 2rem;
    border: 1px solid black;

    input {
        width: 100%;
        height: 2.5rem;
        border-radius: 4px;
        padding-left: 0.75rem;
        box-sizing: border-box;
        border: 0.5px solid black;
    }

    h2 {
        opacity: 40%;
        margin-bottom: 0.75rem;
        font-size: 1.15rem;
    }
    p {
        opacity: 40%;
        margin-bottom: 0.75rem;
        font-size: 1.15rem;
        color: red;
    }
`;
