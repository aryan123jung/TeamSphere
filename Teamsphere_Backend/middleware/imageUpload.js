// const multer = require('multer');
// const path = require('path');

// // Configure Multer storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');  // Define the upload folder
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));  // Create a unique filename
//   }
// });

// // File filter to only allow images
// const fileFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith('image/')) {
//     cb(null, true); // Allow the file
//   } else {
//     cb(new Error('Only image files are allowed!'), false); // Reject the file
//   }
// };

// // Multer configuration
// const upload = multer({
//   storage: storage,
//   fileFilter: fileFilter,
//   limits: { fileSize: 5 * 1024 * 1024 },  // Limit to 5MB
// });












// // module.exports = upload;
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');

// // Ensure the upload folder exists
// if (!fs.existsSync('uploads/')) {
//     fs.mkdirSync('uploads/');
// }

// // Configure Multer storage
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/');  // Define the upload folder
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname));  // Create a unique filename
//     }
// });

// // File filter to only allow images
// const fileFilter = (req, file, cb) => {
//     if (file.mimetype.startsWith('image/')) {
//         cb(null, true); // Allow the file
//     } else {
//         cb(new Error('Only image files are allowed!'), false); // Reject the file
//     }
// };

// // Multer configuration
// const upload = multer({
//   storage: storage,
//   fileFilter: fileFilter,
//   limits: { fileSize: 5 * 1024 * 1024 },  // Limit to 5MB
// }).single('profile_picture');  // The field name 'profile_picture' should match







const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure the upload folder exists
if (!fs.existsSync('uploads/')) {
    try {
        fs.mkdirSync('uploads/');
    } catch (err) {
        console.error("Failed to create uploads directory:", err);
        process.exit(1); // Exit the process if the folder cannot be created
    }
}

// Configure Multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');  // Define the upload folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));  // Create a unique filename
    }
});

// File filter to only allow images
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true); // Allow the file
    } else {
        cb(new Error('Only image files are allowed!'), false); // Reject the file
    }
};

// Multer configuration
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 },  // Limit to 5MB
});

module.exports = upload; // Export the upload object