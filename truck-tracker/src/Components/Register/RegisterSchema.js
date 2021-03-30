import * as Yup from "yup";

export default Yup.object().shape({
    username: Yup.string()
        .required("Please provide a valid username")
        .min(4, "username must be at least 4 characters long"),
    email: Yup.string()
        .email("Please provide a valid email address")
        .required("Please provide an email address"),
    password: Yup.string()
        .required("Password is required")
        .min(4, "Passwords must be at least 4 characters long"),
    instructor: Yup.boolean(),
});
