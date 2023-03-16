import React, { useRef, useState } from "react";
import axios from "axios";
import api from "../../../config.axios";
import classes from "./Signup.module.css";

function Signup() {
    const nameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const passwordRef = useRef();
    const confPasswordRef = useRef();
    const genderRef = useRef();

    const [validName, setValidName] = useState(true);
    const [validEmail, setValidEmail] = useState(true);
    const [validGender, setValidGender] = useState(true);
    const [validAddress, setValidAddress] = useState(true);
    const [validPassword, setValidPassword] = useState(true);
    const [validCpassword, setValidCpassword] = useState(true);

    const [loadingRegister, setLoadingRegister] = useState(false);
    const submitForm = (e) => {
        e.preventDefault();
        const name = nameRef.current.value.trim();
        const email = emailRef.current.value.trim();
        const genderC = genderRef.current.value.trim();
        const address = addressRef.current.value.trim();
        const password = passwordRef.current.value.trim();
        const cpassword = confPasswordRef.current.value.trim();

        if (name.length < 3) {
            setValidName(false);
            return;
        }
        if (email.length < 5 || !email.includes("@")) {
            setValidName(true);
            setValidEmail(false);
            return;
        }
        if (genderC.length <= 0) {
            setValidName(true);
            setValidEmail(true);
            setValidGender(false);
            return;
        }
        if (address.length < 3) {
            setValidName(true);
            setValidEmail(true);
            setValidGender(true);
            setValidAddress(false);
            return;
        }

        if (password.length < 6) {
            setValidName(true);
            setValidEmail(true);
            setValidGender(true);
            setValidAddress(true);
            setValidPassword(false);
            return;
        }
        if (cpassword.length < 6 || password !== cpassword) {
            setValidName(true);
            setValidEmail(true);
            setValidGender(true);
            setValidAddress(true);
            setValidPassword(true);
            setValidCpassword(false);
            return;
        }

        setValidCpassword(true);
        const data = { name, email, genderC, address, password, cpassword };

        setLoadingRegister(true);
        api.post("/user/sign-up", data)
            .then((response) => {
                alert(response.data.message);
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                    alert(error.response.data.message);
                }
            });
        setLoadingRegister(false);

        window.location.reload();
    };

    return (
        <section className={`${classes.signup_form_parent_container}`}>
            <header className={classes.title__singup}>
                Create Your Account
            </header>
            <form onSubmit={submitForm}>
                <div className={classes.signup__name}>
                    <label htmlFor="name">Full Name</label>
                    <span className={classes.input_icon_field}>
                        <i className={`fas fa-user ${classes.input__icon}`}></i>
                    </span>
                    <input
                        type="text"
                        ref={nameRef}
                        name="name"
                        id="name"
                        placeholder="Enter name"
                    />
                    {!validName && (
                        <p className={classes.invalid_signup_data}>
                            Name is not valid
                        </p>
                    )}
                </div>

                <div className={classes.signup__email}>
                    <label htmlFor="email">Email</label>
                    <span className={classes.input_icon_field}>
                        <i
                            className={`fas fa-envelope ${classes.input__icon}`}
                        ></i>
                    </span>
                    <input
                        type="email"
                        ref={emailRef}
                        name="email"
                        id="email"
                        placeholder="Enter email"
                    />
                    {!validEmail && (
                        <p className={classes.invalid_signup_data}>
                            Email is not valid
                        </p>
                    )}
                </div>
                <div>Gender</div>
                <div className={classes.signup__gender}>
                    <select ref={genderRef} name="gender" id="gender">
                        <option value="">Choose Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    {!validGender && (
                        <p className={classes.invalid_signup_data}>
                            Gender is not selected
                        </p>
                    )}
                </div>

                <div className={classes.signup__address}>
                    <label htmlFor="address">Address</label>
                    <span className={classes.input_icon_field}>
                        <i
                            className={`fas fa-map-marker-alt ${classes.input__icon}`}
                        ></i>
                    </span>
                    <input
                        type="text"
                        ref={addressRef}
                        name="address"
                        id="address"
                        placeholder="Enter address"
                    />
                    {!validAddress && (
                        <p className={classes.invalid_signup_data}>
                            Address is not valid
                        </p>
                    )}
                </div>

                <div className={classes.signup__password}>
                    <label htmlFor="password">Password</label>
                    <span className={classes.input_icon_field}>
                        <i className={`fas fa-lock ${classes.input__icon}`}></i>
                    </span>
                    <input
                        type="password"
                        ref={passwordRef}
                        name="password"
                        id="password"
                        placeholder="Enter password"
                    />
                    {!validPassword && (
                        <p className={classes.invalid_signup_data}>
                            Password should not less than 6
                        </p>
                    )}
                </div>

                <div className={classes.signup__cpassword}>
                    <label htmlFor="cpassword">Confirm Password</label>
                    <span className={classes.input_icon_field}>
                        <i className={`fas fa-lock ${classes.input__icon}`}></i>
                    </span>
                    <input
                        type="password"
                        ref={confPasswordRef}
                        name="cpassword"
                        id="cpassword"
                        placeholder="Confirm password"
                    />
                    {!validCpassword && (
                        <p className={classes.invalid_signup_data}>
                            Password not matched
                        </p>
                    )}
                </div>
                <div className={classes.signup__btn}>
                    <button disabled={loadingRegister}>
                        {loadingRegister ? "Please wait..." : "Sign Up"}
                    </button>
                </div>
            </form>
        </section>
    );
}

export default Signup;
