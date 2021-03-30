import React from "react";

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
            <h1>Create Account</h1>
            <div>
                <form onSubmit={onSubmit}>
                    <p>{serverErrors.err} </p>
                    <div>
                        <label>
                            <h2>Username:</h2>
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
                            <h2>Email:</h2>
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
                            <h2>Password:</h2>
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
                        <button type="submit" disabled={disabled}>
                            Create Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
