import * as Yup from "yup";

export default Yup.object().shape({
    username: Yup.string()
        .required("Please provide a valid username")
        .min(4, "username must be at least 4 characters long"),
    password: Yup.string()
        .required("Password is required")
        .min(4, "Passwords must be at least 4 characters long"),
});
