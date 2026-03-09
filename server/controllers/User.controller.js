import { asyncHandler } from "../utilities/AsyncHandler.utility.js";
import { User } from "../models/user.model.js";
import { ErrorHandler } from "../utilities/ErrorHandler.utility.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import path from "path";
import fs from "fs";


// For handling file uploads
import multer from "multer";



// Encrypt Password function
const encryptPassword = async (plainPassword) => {
  return await bcrypt.hash(plainPassword, 10);
};


// Compare Password function
const comparePassword = async (plainPassword, hash) => {
  return await bcrypt.compare(plainPassword, hash);
};


// Create Token for login
const createToken = async (data) => {
  return await jwt.sign(data, process.env.JWT_KEY, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};


// Code for Loggin user
// export const login = asyncHandler(async (req, res, next) => {
//   // console.log("Login Route hit...");

//   let { email, password } = req.body;

//   email = email?.trim();
//   password = password?.trim();

//   // Check for missing fields
//   if (!email || !password) {
//     return next(new ErrorHandler(400, "All fields are required."));
//   }

//   const user = await User.findOne({ email }).select("+password");
//   if (!user) {
//     return next(new ErrorHandler(400, "Wrong Username or Password."));
//   }

//   if (!(await comparePassword(password, user.password))) {
//     return next(new ErrorHandler(400, "Wrong Username or Password."));
//   }

//   const tokenData = {
//     _id: user._id,
//     name: user.name,
//     email: user.email,
//     semester: user.semester,
//     photo: user.photo,
//     role: user.role,
//   };

//   const token = await createToken(tokenData);

//   return res
//     .status(200)
//     .cookie("token", token, {
//       expires: new Date(
//         Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000,
//       ),
//       httpOnly: true,
//       secure: process.env.NOTE_ENV === "production",
//       sameSite: "lax",
//     })
//     .json({
//       success: true,
//       message: "User logged in successfully",
//       user: tokenData,
//     });
// });




// Code for Registering User
// export const register = asyncHandler(async (req, res, next) => {
//   // console.log("Register req hit...");
//   let {
//     name,
//     email,
//     password,
//     gender,
//     program,
//     semester,
//     college,
//     address,
//     code,
//   } = req.body;

//   // Trim all string inputs
//   name = name?.trim();
//   email = email?.trim();
//   password = password?.trim();
//   program = program?.trim();
//   college = college?.trim();
//   address = address?.trim();
//   code = code?.trim();
//   gender = gender?.toLowerCase();

//   // Check for missing fields
//   if (
//     !name ||
//     !email ||
//     !password ||
//     !gender ||
//     !program ||
//     !semester ||
//     !college ||
//     !address ||
//     !code
//   ) {
//     return next(new ErrorHandler(400, "All fields are required."));
//   }

//   if (code.length !== 6) {
//     return next(new ErrorHandler(400, "Invalid Verification code."));
//   }

//   // Check if user with email already exists
//   const existingUser = await User.findOne({ email });
//   if (existingUser) {
//     return next(new ErrorHandler(400, "Email is already registered."));
//   }

//   // Verify the Email & OTP code..
//   if (!(await verifyEmailCode(email, code))) {
//     return res.status(403).json({
//       success: false,
//       message: "Invalid verification code.",
//     });
//   }

//   // Validate name length
//   if (name.length < 3 || name.length > 30) {
//     return next(
//       new ErrorHandler(400, "Name must be between 3 and 30 characters."),
//     );
//   }

//   // Simple email regex
//   // console.log(email);
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   // Validate email
//   if (!emailRegex.test(email)) {
//     return next(new ErrorHandler(400, "Invalid email address."));
//   }

//   // Validate password length
//   if (password.length < 8 || password.length > 16) {
//     return next(
//       new ErrorHandler(400, "Password must be between 8 and 16 characters."),
//     );
//   }

//   // Validate program, college, address length
//   if (program.length < 3 || program.length > 30)
//     return next(
//       new ErrorHandler(400, "Program must be between 3 and 30 characters."),
//     );
//   if (college.length < 3 || college.length > 30)
//     return next(
//       new ErrorHandler(400, "College must be between 3 and 30 characters."),
//     );
//   if (address.length < 3 || address.length > 30)
//     return next(
//       new ErrorHandler(400, "Address must be between 3 and 30 characters."),
//     );

//   semester = parseInt(semester);
//   if (!(semester >= 1 && semester <= 8)) {
//     return next(new ErrorHandler(400, "Semester must be between 1 and 8."));
//   }
//   // Validate gender
//   const validGenders = ["male", "female", "other"];
//   if (!validGenders.includes(gender.toLowerCase())) {
//     return next(
//       new ErrorHandler(400, "Gender must be male, female, or other."),
//     );
//   }

//   let defaultPhotoLink;
//   if (gender.toLowerCase() === "male")
//     defaultPhotoLink = "uploads/user/profile/profile-boy.jpeg";

//   if (gender.toLowerCase() === "female")
//     defaultPhotoLink = "uploads/user/profile/profile-girl.jpg";

//   if (gender.toLowerCase() === "other")
//     defaultPhotoLink = "uploads/user/profile/profile-other.png";

//   const defaultCoverLink = "uploads/user/cover/defaultCoverLink.jpg";

//   const hashPassword = await encryptPassword(password);

//   let role = "student";

//   // Change role for email you want to make admin...... Here, i want to make these two emails as admin..
//   if (email === process.env.EMAIL_FIRST || email === process.env.EMAIL_SECOND) {
//     role = "admin";
//   }

//   // Create user
//   const user = await User.create({
//     name,
//     email,
//     password: hashPassword,
//     role,
//     gender,
//     program,
//     college,
//     address,
//     semester,
//     photo: defaultPhotoLink,
//     coverPhoto: defaultCoverLink,
//   });

//   const tokenData = {
//     _id: user._id,
//     name: user.name,
//     email: user.email,
//     semester: user.semester,
//     photo: user.photo,
//     role: user.role,
//   };

//   const token = await createToken(tokenData);

//   return res
//     .status(201)
//     .cookie("token", token, {
//       expires: new Date(
//         Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000,
//       ),
//       httpOnly: true,
//       secure: process.env.NOTE_ENV === "production",
//       sameSite: "lax",
//     })
//     .json({
//       success: true,
//       message: "User registered successfully",
//       user: tokenData,
//     });
// });




/**
 *  Upload Profile pic logic
 *  we make a storage with diskStorage - which takes an object with 2 values - Destination and Filename.
 * Destination is where the file will be stored, and filename is name of file that will be given to the file when stored on the specified location.
 * cb stands for callback function. We call this function inside each object values as below - first parameter
 * of cb mean error - so mostly its null. And second paramter is the value (name/ path) we pass to the calback function.
 *
 */

const storage = multer.diskStorage({
  destination: (req, file, cb) => {

    let uploadPath = "uploads/user";        

    if (file.fieldname === "profile-photo") {        
      uploadPath += "/profile";
    } else if (file.fieldname === "cover-photo") {
      uploadPath += "/cover";
    }

    // create folder if not exists.
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }

    cb(null, uploadPath); 
  
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${Date.now()}-${Math.round(Math.random())}${path.extname(file.originalname)}`,
    );
  },
});


// file filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only jpg, jpeg and png images are allowed"), false);
  }
};

// upload the photo
export const uploadProfilePhoto = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024, // 2MB
  },
});

// update Profile pic logic:
// export const editProfilePic = asyncHandler(async (req, res, next) => {
//   console.log("edit profile pic route hit.....");
//   let userId = req.user.userId;

//   if (!req.file) {
//     return res.status(403).json({
//       success: false,
//       message: "No Profile photo uploaded.",
//     });
  
//   }

//     // get existing user data
//     const user = await User.findById(userId);

//     if(!user){
//       return res.status(403).json({
//         success: false,
//         message: "User doesn't exist.",
//       });
//     }

//     // delete existing photo from storage if its not default photo.
//     if(user.photo){
//       deletePhoto(user.photo);
//     }


//     const photoPath = req.file.path;
//     const updatedUser = await User.findByIdAndUpdate(
//       userId,
//       { photo: photoPath },
//       { new: true },
//     );
//     return res.status(200).json({
//       success: true,
//       message: "Profile pic updated successfully.",
//       updatedPhoto: updatedUser.photo,
//     });

// });

