import multer from "multer";

const allowedMimeTypes = ["image/jpeg", "image/png", "image/webp"];

const storage = multer.memoryStorage();

const uploadProfilePhoto = multer({
  storage,
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, callback) => {
    if (allowedMimeTypes.includes(file.mimetype)) {
      callback(null, true);
      return;
    }

    callback(
      new Error("Only JPEG, PNG, and WebP profile photos are allowed.")
    );
  },
});

export default uploadProfilePhoto;