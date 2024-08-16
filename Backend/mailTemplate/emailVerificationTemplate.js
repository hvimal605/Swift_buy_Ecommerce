const otpTemplate = (otp) => {
	return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OTP Verification</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 50px auto;
            background-color: #ffffff;
            box-shadow: 2px 4px 10px rgba(0,0,0,0.2);
            border: 1px solid #dddddd;
            border-radius: 8px;
            overflow: hidden;
        }
        .header {
            background-color: #a19408d2;
            color: #ffffff;
            padding: 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .content {
            padding: 30px;
            text-align: center;
        }
        .content h2 {
            margin-top: 0;
            color: #333333;
            font-size: 20px;
        }
        .content p {
            color: #666666;
            line-height: 1.6;
            font-size: 16px;
            margin: 20px 0;
        }
        .otp {
            display: inline-block;
            font-size: 24px;
            color: #4A90E2;
            letter-spacing: 4px;
            padding: 10px 20px;
            border: 2px dashed #cdb411;
            border-radius: 4px;
            margin: 20px 0;
            font-weight: 600;
        }
        .footer {
            background-color: #f4f4f4;
            color: #888888;
            text-align: center;
            padding: 20px;
            font-size: 14px;
            border-top: 1px solid #dddddd;
        }
        @media (max-width: 600px) {
            .container {
                margin: 20px auto;
            }
            .content {
                padding: 20px;
            }
            .otp {
                font-size: 20px;
                padding: 8px 16px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Swift Guy</h1>
        </div>
        <div class="content">
            <h2>Verify Your Email Address</h2>
            <p>Thank you for signing up with Artful Heaven! To complete your registration, please use the OTP (One Time Password) below to verify your email address:</p>
            <div class="otp">${otp}</div>
            <p>This OTP is valid for the next 5 minutes. If you did not request this, please ignore this email.</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 Artful Heaven. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;
};
module.exports = otpTemplate;
