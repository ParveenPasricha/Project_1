const userModel = require("../Schema/userSchema");

// ✅ Create User (Signup)
const createUser = async (req, res) => {
    try {
        const { user, mobile } = req.body;

        if (!mobile) {
            return res.status(400).json({ msg: "Please Enter a Mobile Number" });
        }

        const existingUser = await userModel.findOne({ mobile });
        if (existingUser) {
            return res.status(409).json({ msg: "You Are Already Registered" });
        }

        const newUser = new userModel({ user, mobile });
        await newUser.save();

        res.status(201).json({ msg: "User Registered Successfully", user: newUser });
    } catch (error) {
        console.error("Error Found:", error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

// ✅ Get User (Login)
const getUser = async (req, res) => {
    try {
        const {mobile } = req.body;

        if (!mobile) {
            return res.status(400).json({ msg: "Please fill all fields!" });
        }

        const existingUser = await userModel.findOne({ mobile });
        if (!existingUser) {
            return res.status(404).json({ msg: "User not found!" });
        }

        res.status(200).json({ msg: "Login successful!", user: existingUser });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ msg: "Something went wrong!", error });
    }
};


module.exports = { createUser, getUser };
