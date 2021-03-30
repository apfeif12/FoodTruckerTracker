import React from "react";
import { Link } from "react-router-dom";

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
            <h1>Login</h1>
            <div>
                <form onSubmit={onSubmit}>
                    <p>{serverErrors.err} </p>
                    <div>
                        <label>
                            <h2>Username:</h2>
                            <input
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
                            <h2>Password:</h2>
                            <input
                                type="password"
                                name="password"
                                onChange={onChange}
                                value={values.password}
                                placeholder="Please enter your password"
                            />
                        </label>
                        <p>{errors.password}</p>
                    </div>
                    <div></div>
                    <button type="submit" disabled={disabled}>
                        Login
                    </button>
                </form>
                <Link to="/register">
                    <button>Don't have an account? Create one here!</button>
                </Link>
            </div>
        </div>
    );
}
