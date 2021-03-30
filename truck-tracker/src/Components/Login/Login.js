import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

import Schema from "./LoginSchema.js";
import { UserContext } from "../../Utils/UserContext.js";
import LoginForm from "./LoginForm.js";
import { axiosWithAuth } from "../../Utils/axiosWithAuth.js";

const initialFormValues = {
    username: "",
    password: "",
};

const initialFormErrors = {
    username: "",
    password: "",
};

const initialServerErrors = {
    err: "",
};

const buttonDisabled = true;

export default function Login() {
    const [buttonDisable, setButtonDisable] = useState(buttonDisabled);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [serverErrors, setServerErrors] = useState(initialServerErrors);
    const [errors, setErrors] = useState(initialFormErrors);
    const { setUser } = useContext(UserContext);
    const history = useHistory();

    const loginUser = (user) => {
        axiosWithAuth()
            .post("/auth/login", user)
            .then((res) => {
                setUser(res.data);
                console.log(res.data);

                localStorage.setItem("token", res.data.token);
                setFormValues(initialFormValues);
                history.push("/dashboard");
            })
            .catch((err) => {
                console.log("error", err.response.data);
                setServerErrors({ err: err.response });
            });
    };

    const onChange = (name, value) => {
        Yup.reach(Schema, name)
            .validate(value)
            .then(() => {
                setErrors({
                    ...errors,
                    [name]: "",
                });
            })
            .catch((err) => {
                setErrors({
                    ...errors,
                    [name]: err.errors[0],
                });
            });

        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const onSubmit = () => {
        const newUser = {
            username: formValues.username,
            password: formValues.password,
        };
        loginUser(newUser);
    };

    useEffect(() => {
        Schema.isValid(formValues).then((valid) => {
            setButtonDisable(!valid);
        });
    }, [formValues]);

    return (
        <div>
            <div>
                <LoginForm
                    disabled={buttonDisable}
                    values={formValues}
                    change={onChange}
                    errors={errors}
                    submit={onSubmit}
                    serverErrors={serverErrors}
                />
            </div>
        </div>
    );
}
