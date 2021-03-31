import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <div>
                <h1>Login</h1>
                <Link to="/login">
                    <button>Log in</button>
                </Link>
            </div>

            <div>
                <h1>Register</h1>
                <Link to="/register">
                    <button>Register</button>
                </Link>
            </div>

            
        </div>
    );
}
