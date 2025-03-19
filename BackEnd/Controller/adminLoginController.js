const adminModel = require('../Schema/adminLoginSchema');
const bcrypt = require('bcrypt');

// Create Admin Login
const createAdminlogin = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ msg: "Please enter both username and password." });
        }

        // Check if user already exists
        const existingUser = await adminModel.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ msg: "User already registered!" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new admin user
        const newUser = new adminModel({ username, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ msg: "User registered successfully!", user: newUser });
    } catch (error) {
        console.error("Error Found:", error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

// Get Admin Login
const getAdminlogin = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ msg: "Please enter both username and password!" });
        }

        // Find user in DB
        const existingUser = await adminModel.findOne({ username });
        if (!existingUser) {
            return res.status(404).json({ msg: "User not found!" });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(401).json({ msg: "Invalid credentials!" });
        }

        res.status(200).json({ msg: "Login successful!", user: existingUser });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ msg: "Something went wrong!", error });
    }
};

module.exports = { createAdminlogin, getAdminlogin };
