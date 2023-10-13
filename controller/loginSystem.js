const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const abc = require("../models/loginSystem");

const crypto = require("crypto");
const nodemailer = require("nodemailer");
const { config } = require("dotenv");
const userconfig = require("../config/config")


// Send reset email
const sendResetPasswordEmail = async (name, email, token) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: "Fatima.sagheer@outlook.com",
        pass: "Python@21669",
      },
    });
    const mailOptions = {
      from: "Fatima.sagheer@outlook.com",
      to: email,
      subject: "Reset Password",
      html: `<p>Hi ${name}, please use the link to reset your password: <a href="http://localhost:8080/signUp/reset-password?token=${token}">Reset Password</a></p>`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log(" Mail sent: Successfully  " + info.response);
      }
    });
  } catch (error) {
    res.status(400).send({ success: false, message: "Invalid Email" });
  }
};

// sign up user
const signUpUser = async (req, res) => {
  try {
    const { name, email, password,role } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const loginuser = new abc({
      name,
      email,
      password: hashPassword,
      role
    });
  
    await loginuser.save();
    res.status(201).json({ message: "user created " });
  } catch (error) {
    res.status(500).json({  message: "user not created  " });
  }
};

// login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await abc.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
     
      const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
      console.log(req.body)
      res.status(200).json({ message: "Login successful",  token });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ error: error.mesage });
  }
};

// Reset Password
const resetPassword = async (req, res) => {
  try {
    const email = req.body.email;
    const userData = await abc.findOne({ email: email });
    if (userData) {
      const randomString = crypto.randomBytes(32).toString("hex");
      const data = await abc.updateOne(
        { email: email },
        { $set: { token: randomString } }
      );
      sendResetPasswordEmail(userData.name, userData.email, randomString);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { signUpUser, loginUser, resetPassword };
