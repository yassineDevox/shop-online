const multer = require("multer");

const MIME_TYPES = {
  "image/jpeg": "jpeg",
  "image/png": "png",
  "image/jpg": "jpg",
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + extension);
  },
});

module.exports = multer({storage:storage}).single('image')
