const express = require("express");
const router = express.Router();
const User = require("../Model/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = "BLACKHOLEINFIVERSEPRESENTSUNIGURU";const emailExistence = require("email-existence");

router.post(
  "/createuser",
  body("name").isLength({ min: 3 }),
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  async (req, res) => {
    // Validate the request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const email = req.body.email;

    // Check if email already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists in our database" });
    }

    // Verify email existence
    emailExistence.check(email, async (error, response) => {
      if (error || !response) {
        return res.status(400).json({ message: "Email address does not exist or cannot be verified" });
      }

      // Proceed with user creation if the email is valid
      const salt = await bcrypt.genSalt(10);
      const encodedPassword = await bcrypt.hash(req.body.password, salt);

      try {
        await User.create({
          name: req.body.name,
          email: req.body.email,
          password: encodedPassword,
        });
        return res.json({ success: true });
      } catch (err) {
        console.error("Error while creating user:", err);
        return res.status(500).json({ success: false, message: "Server error" });
      }
    });
  }
);

router.post("/login", [
  body("email").isEmail(),
  body("password", "Incorrect Password").isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let email = req.body.email;
    try {
      let userData = await User.findOne({ email });
      if (!userData) {
        console.log("hello");
        return res.status(400).json({ errors: "Invalid email" });
      }
      const decodepassword = await bcrypt.compare(
        req.body.password,
        userData.password
      );
      if (!decodepassword) {
        console.log("helloo");
        return res.status(400).json({ errors: "Invalid password" });
      }
      const data = {
        user: {
          id: userData._id,
        },
      };
      console.log(data.user.id);
      const authtoken = jwt.sign(data, jwtSecret);
      return res.json({ success: true, authtoken: authtoken });
    } catch (error) {
      console.log("yuuppp", error);
      res.json({ success: false });
    }
  },
]);

module.exports = router;