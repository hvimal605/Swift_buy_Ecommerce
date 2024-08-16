const User = require('../models/user');
const OTP = require('../models/otp')
const Cart = require('../models/cart')
const otpGenerrator = require('otp-generator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const mailSender = require('../utils/mailSender');
const { passwordUpdated } = require('../mailTemplate/updatedPassword');
require("dotenv").config()





//sendOTP
exports.sendOTP = async (req, res) => {

    try {


        const { email } = req.body;


        const checkUserPresent = await User.findOne({ email });


        if (checkUserPresent) {
            return res.status(401).json({
                success: false,
                message: "User already registered",
            })
        }

        var otp = otpGenerrator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false,
        })
        console.log("otp generated", otp);


        const result = await OTP.findOne({ otp: otp });

        while (result) {
            otp = otpGenerrator.generate(6, {
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                specialChars: false,
            })
            result = await OTP.findOne({ otp: otp });
        }

        const otpPayload = { email, otp };

        const otpBody = await OTP.create(otpPayload)
        console.log(otpBody);

        res.status(200).json({
            success: true,
            message: "OTP Sent Successfully",
            otp,
        })








    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        })

    }
};







//signup
exports.signup = async (req, res) => {
    try {

        const { firstName,
            lastName,
            email,
            password,
            confirmPassword,
            otp } = req.body;
            // console.log("ye dekhe",otp,firstName,lastName,email,password,confirmPassword)

        if (!firstName || !lastName || !email || !password || !confirmPassword || !otp) {
            return res.status(403).json({
                success: false,
                message: "All fields are required",
            })
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Password and ConfirmPassword Value does not match ,please try again"
            })
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User is already registered",
            });
        }


        const recentOtp = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);

        if (recentOtp.length == 0) {

            return res.status(400).json({
                success: false,
                message: "OTP Not found"
            })
        }
        else if (otp !== recentOtp[0].otp) {

            return res.status(400).json({
                success: false,
                message: "Invalid OTP"
            });

        }

        const hashedPassword = await bcrypt.hash(password, 10)







        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName}${lastName} `

        })


        // const cart = new Cart({user})
        // const createdCart = await cart.save()
        //return response
        return res.status(200).json({
            success: true,
            message: "user is registered successfully",
            user,

        });

    }


    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "User cannot be registrered .please try again"
        })


    }





}


//login

exports.login = async (req, res) => {
    try {

        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(403).json({
                success: false,
                message: "All fields are required, please try again",

            })
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "user is not registered , please signup first"
            })
        }

        if (await bcrypt.compare(password, user.password)) {
            const payload = {
                email: user.email,
                id: user._id,

            }
            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: '24h'
            })
            user.token = token;
            user.password = undefined;


            //create cookie and send response
            const Options = {
                expiresIn: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
            }

            res.cookie("token", token, Options).status(200).json({
                success: true,
                token,
                user,
                message: 'logged in successfully',
            })
        }
        else {
            return res.status(401).json({
                success: false,
                message: "Password is incorrect",
            })
        }



    }

    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Login Faliure ,Please try again',
        })
    }

}



//changePassword
exports.changePassword = async (req, res) => {
    try {

        const userDetails = await User.findById(req.user.id)

        const { oldPassword, newPassword } = req.body

        const isPasswordMatch = await bcrypt.compare(
            oldPassword,
            userDetails.password
        )
        if (!isPasswordMatch) {
          
            return res
                .status(401)
                .json({ success: false, message: "The password is incorrect" })
        }

        // Update password
        const encryptedPassword = await bcrypt.hash(newPassword, 10)
        const updatedUserDetails = await User.findByIdAndUpdate(
            req.user.id,
            { password: encryptedPassword },
            { new: true }
        )

        // Send notification email
        try {
            const emailResponse = await mailSender(
                updatedUserDetails.email,
                "Password for your account has been updated",
                passwordUpdated(
                    updatedUserDetails.email,
                    `${updatedUserDetails.firstName} ${updatedUserDetails.lastName}`
                )
            )
            console.log("Email sent successfully:", emailResponse.response)
        } catch (error) {
            // If there's an error sending the email, log the error and return a 500 (Internal Server Error) error
            console.error("Error occurred while sending email:", error)
            return res.status(500).json({
                success: false,
                message: "Error occurred while sending email",
                error: error.message,
            })
        }

        // Return success response
        return res
            .status(200)
            .json({ success: true, message: "Password updated successfully" })
    } catch (error) {
        // If there's an error updating the password, log the error and return a 500 (Internal Server Error) error
        console.error("Error occurred while updating password:", error)
        return res.status(500).json({
            success: false,
            message: "Error occurred while updating password",
            error: error.message,
        })
    }
}




