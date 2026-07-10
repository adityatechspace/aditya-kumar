import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    profilePhoto: {
  type: String,
  default: "",
},

    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [80, "Name cannot exceed 80 characters"],
    },

    designation: {
      type: String,
      required: [true, "Designation is required"],
      trim: true,
      maxlength: [120, "Designation cannot exceed 120 characters"],
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
      default: "",
    },

    linkedinUrl: {
  type: String,
  default: "",
},

    comment: {
      type: String,
      required: [true, "Comment is required"],
      trim: true,
      minlength: [10, "Comment must contain at least 10 characters"],
      maxlength: [700, "Comment cannot exceed 700 characters"],
    },

    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const Testimonial = mongoose.model("Testimonial", testimonialSchema);

export default Testimonial;