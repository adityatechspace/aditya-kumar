import express from "express";
import Testimonial from "../models/Testimonial.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const { name, designation, email, comment } = req.body;

    const testimonial = await Testimonial.create({
      name,
      designation,
      email,
      comment,
      status: "pending",
    });

    res.status(201).json({
      success: true,
      message: "Thank you. Your testimonial was submitted for review.",
      testimonial: {
        id: testimonial._id,
        status: testimonial.status,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const testimonials = await Testimonial.find(
      { status: "approved" },
      {
        name: 1,
        designation: 1,
        comment: 1,
        createdAt: 1,
      }
    ).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      testimonials,
    });
  } catch (error) {
    next(error);
  }
});

export default router;