import express from "express";
import Testimonial from "../models/Testimonial.js";
import streamifier from "streamifier";
import cloudinary from "../config/cloudinary.js";
import uploadProfilePhoto from "../middleware/uploadProfilePhoto.js";

const router = express.Router();

function uploadBufferToCloudinary(buffer) {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "portfolio-testimonials",
        resource_type: "image",
        transformation: [
          {
            width: 300,
            height: 300,
            crop: "fill",
            gravity: "face",
          },
          {
            fetch_format: "auto",
            quality: "auto",
          },
        ],
      },
      (error, result) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(result);
      }
    );

    streamifier.createReadStream(buffer).pipe(uploadStream);
  });
}

router.get("/", async (req, res, next) => {
  try {
    const testimonials = await Testimonial.find(
      { status: "approved" },
      {
        name: 1,
        designation: 1,
        profilePhoto: 1,
        linkedinUrl: 1,
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
router.post("/", uploadProfilePhoto.single("profilePhoto"), async (req, res, next) => {
  try {
    const { name, designation, email, linkedinUrl, comment } = req.body;

    let profilePhoto = "";

    if (req.file) {
      const uploadResult = await uploadBufferToCloudinary(req.file.buffer);
      profilePhoto = uploadResult.secure_url;
    }

    const testimonial = await Testimonial.create({
      name,
      designation,
      email,
      profilePhoto,
      linkedinUrl,
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

export default router;