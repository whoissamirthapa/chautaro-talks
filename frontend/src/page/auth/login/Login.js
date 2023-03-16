import React, { useRef, useState } from "react";
import axios from "axios";
import api from "../../../config.axios";
import { useHistory } from "react-router";
import classes from "./Login.module.css";
import HomeBase from "../../../components/HomeBase/HomeBase";
import Signup from "../register/Signup";

function Login() {
    const history = useHistory();

    const [infoSignIn, setInfoSignIn] = useState(true);
    const [infoSignUp, setInfoSignUp] = useState(false);
    const [loadingLogin, setLoadingLogin] = useState(false);

    const emailRef = useRef();
    const passwordRef = useRef();

    const toggleSingIn = () => {
        setInfoSignIn(!infoSignIn);
        setInfoSignUp(!infoSignUp);
    };

    const toggleSingUp = () => {
        setInfoSignIn(!infoSignIn);
        setInfoSignUp(!infoSignUp);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const loginData = { email, password };

        setLoadingLogin(true);
        api.post("/user/sign-in", loginData)
            .then((res) => {
                localStorage.setItem("cUser_token", res.data.token);

                alert(res?.data?.message);

                history.push("/");
            })
            .catch((err) => {
                if (err?.response) {
                    alert(err?.response?.data?.message);
                }
            });
        setLoadingLogin(false);
    };

    return (
        <HomeBase>
            <header
                className={`${
                    infoSignIn
                        ? classes.signin__toggler
                        : classes.signup__toggler
                }`}
            >
                <div
                    className={`${
                        infoSignIn
                            ? classes.active_sign_in
                            : classes.passive_sign_in
                    }`}
                >
                    <button
                        className={`${
                            infoSignIn
                                ? classes.active_sign_in_btn
                                : classes.passive_sign_in_btn
                        }`}
                        onClick={toggleSingIn}
                        disabled={infoSignIn}
                    >
                        Sign In
                    </button>
                </div>
                <div
                    className={`${
                        infoSignUp
                            ? classes.active_sign_in
                            : classes.passive_sign_in
                    }`}
                >
                    <button
                        className={`${
                            infoSignUp
                                ? classes.active_sign_in_btn
                                : classes.passive_sign_in_btn
                        }`}
                        onClick={toggleSingUp}
                        disabled={infoSignUp}
                    >
                        Sign Up
                    </button>
                </div>
            </header>
            {infoSignIn && (
                <section className={`${classes.login_form_parent_container}`}>
                    <header className={classes.title__singin}>
                        Sign In Your Account
                    </header>
                    <form onSubmit={handleLogin}>
                        <div className={classes.signin__email}>
                            <label htmlFor="email">Email</label>
                            <span className={classes.input_icon_field}>
                                <i
                                    className={`fas fa-envelope ${classes.input__icon}`}
                                ></i>
                            </span>
                            <input
                                type="email"
                                name="email"
                                ref={emailRef}
                                id="email"
                                placeholder="Enter email"
                                required
                            />
                        </div>
                        <div className={classes.signin__password}>
                            <label htmlFor="password">Password</label>
                            <span className={classes.input_icon_field}>
                                <i
                                    className={`fas fa-lock ${classes.input__icon}`}
                                ></i>
                            </span>
                            <input
                                type="password"
                                name="password"
                                ref={passwordRef}
                                id="password"
                                placeholder="Enter password"
                                required
                            />
                        </div>
                        <div className={classes.signin__btn}>
                            <button disabled={loadingLogin}>
                                {loadingLogin ? "Please wait..." : "Sign In"}
                            </button>
                        </div>
                    </form>
                </section>
            )}

            {infoSignUp && <Signup />}
        </HomeBase>
    );
}

export default Login;
