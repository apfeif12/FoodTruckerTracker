import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

import Schema from "./RegisterSchema.js";
import { UserContext } from "../../Utils/UserContext.js";
import RegisterForm from "./RegisterForm.js";
import { axiosWithAuth } from "../../Utils/axiosWithAuth.js";

const initialFormValues = {
    username: "",
    email: "",
    password: "",
};

const initialFormErrors = {
    username: "",
    email: "",
    password: "",
};

const initialServerErrors = {
    err: "",
};

const buttonDisabled = true;

export default function Register() {
    const [buttonDisable, setButtonDisable] = useState(buttonDisabled);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [serverErrors, setServerErrors] = useState(initialServerErrors);
    const [errors, setErrors] = useState(initialFormErrors);
    const { setUser } = useContext(UserContext);
    const history = useHistory();

    const createNewUser = (newUser) => {
        axiosWithAuth()
            .post("/auth/register", newUser)
            .then((res) => {
                setUser(res.data.registered);
                console.log(res);

                setFormValues(initialFormValues);
                localStorage.setItem("token", res.data.token);
                history.push("/dashboard");
            })
            .catch((err) => {
                console.log(err);
                setServerErrors({ err: err.response.data.message });
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
            email: formValues.email,
            password: formValues.password,
        };
        createNewUser(newUser);
    };

    useEffect(() => {
        Schema.isValid(formValues).then((valid) => {
            setButtonDisable(!valid);
        });
    }, [formValues]);

    return (
        <div>
            <RegisterForm
                disabled={buttonDisable}
                values={formValues}
                change={onChange}
                errors={errors}
                submit={onSubmit}
                serverErrors={serverErrors}
            />
        </div>
    );
}
