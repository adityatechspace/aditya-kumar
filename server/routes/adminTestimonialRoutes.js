import express from "express";
import Testimonial from "../models/Testimonial.js";
import requireAdmin from "../middleware/requireAdmin.js";

const router = express.Router();

router.use(requireAdmin);

/*
  Returns all submissions, including private email and status.
  Only accessible with a valid admin token.
*/
router.get("/testimonials", async (req, res, next) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      testimonials,
    });
  } catch (error) {
    next(error);
  }
});

/*
  Approve or reject a testimonial.
  Expected body: { status: "approved" } or { status: "rejected" }
*/
router.patch("/testimonials/:id/status", async (req, res, next) => {
  try {
    const { status } = req.body;

    if (!["approved", "rejected", "pending"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Status must be pending, approved, or rejected.",
      });
    }

    const testimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: "Testimonial not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Testimonial status updated.",
      testimonial,
    });
  } catch (error) {
    next(error);
  }
});

/*
  Permanently delete a testimonial.
*/
router.delete("/testimonials/:id", async (req, res, next) => {
  try {
    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: "Testimonial not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Testimonial deleted.",
    });
  } catch (error) {
    next(error);
  }
});

export default router;