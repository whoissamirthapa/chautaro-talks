const mongoose = require("mongoose");
const User = require("../model/user");

const sha256 = require("js-sha256");
const jwt = require("jsonwebtoken");
const { resPonse } = require("../../utils/res");

exports.signUp = async (req, res, next) => {
    const { name, email, gender, address, password, cpassword } = req.body;

    try {
        const emailRgx =
            /@gmail.com|@yahoo.com|@hotmail.com|@protonmail.com|@live.com/;

        if (!emailRgx.test(email)) {
            throw "Email is not supported";
        }

        if (password.length < 6) {
            throw "Password is not valid";
        }

        if (password !== cpassword) {
            throw "Password is not matched";
        }

        const userExist = await User.findOne({ email });

        if (userExist) {
            throw "User already exists";
        }

        const user = new User({
            name,
            email,
            gender,
            address,
            password: sha256(password + process.env.SALT),
        });

        await user.save();

        res.status(200).json({
            success: true,
            message: ` User ${name} registered successfully`,
        });
    } catch (error) {
        console.log(error);
    }
};

exports.signIn = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            res.status(400).json({
                message: "User not registered",
            });
            throw "User not found";
        }

        let signInPassword = sha256(password + process.env.SALT);
        if (user.password !== signInPassword) {
            res.status(400).json({
                message: "Invalid Credendital",
            });
            throw "Invalid Credential";
        }

        const token = jwt.sign({ id: user.id }, process.env.SCRET);

        res.status(200).json({
            message: "User logged in successfully",
            token,
        });
    } catch (error) {
        console.log(error);
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});

        if (users) {
            resPonse(res, true, users, 200, "All users");
            return;
        }
        resPonse(res, false, null, 404, "Not Found", "No user found");
    } catch (error) {
        console.log(error);
    }
};
