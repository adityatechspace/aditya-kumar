import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
    const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;
    const jwtSecret = process.env.JWT_SECRET;

    if (!adminEmail || !adminPasswordHash || !jwtSecret) {
      return res.status(500).json({
        success: false,
        message: "Admin authentication is not configured on the server.",
      });
    }

    const isEmailCorrect =
      email.trim().toLowerCase() === adminEmail;

    const isPasswordCorrect = await bcrypt.compare(
      password,
      adminPasswordHash
    );

    if (!isEmailCorrect || !isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const token = jwt.sign(
      {
        role: "admin",
        email: adminEmail,
      },
      jwtSecret,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      success: true,
      message: "Admin login successful.",
      token,
    });
  } catch (error) {
    next(error);
  }
});

export default router;