exports.passwordUpdated = (email, name) => {
	return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Updated Successfully</title>
  <style>
    body {
      font-family: 'Helvetica Neue', Arial, sans-serif;
      background-color: #f9f9f9;
      margin: 0;
      padding: 0;
      color: #333;
    }
    .email-container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
    .email-header {
      background-color: #b67203;
      padding: 20px;
      text-align: center;
      color: #ffffff;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
    .email-header h1 {
      margin: 0;
      font-size: 24px;
      letter-spacing: 1px;
    }
    .email-body {
      padding: 20px;
      line-height: 1.6;
    }
    .email-body h2 {
      
      margin-top: 0;
    }
    .email-body p {
      margin: 10px 0;
    }
    .email-footer {
      background-color: #f1f1f1;
      padding: 15px;
      text-align: center;
      font-size: 12px;
      color: #666;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    }
    .email-footer a {
      color: #ff6f61;
      text-decoration: none;
    }
    .button {
      display: inline-block;
      padding: 10px 20px;
      margin: 20px 0;
      background-color: #066aede7;
    
      text-decoration: none;
      border-radius: 5px;
      font-size: 16px;
      font-weight: bold;
    }
    .button:hover { 
      background-color: #3b77f1d3;
    }
    .highlight{
        font-weight: 600;
       
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="email-header">
      <h1>Artful Heaven</h1>
    </div>
    <div class="email-body">
      <h2>Password Updated Successfully</h2>
     
      <p >Hi <span class="highlight">${name},</span></p>
      <p>Your password has been successfully updated for the email <span class="highlight">${email}</span></p>
      <p>We wanted to let you know that your password has been updated successfully.</p>
      <p>If you did not make this change or if you believe an unauthorized person has accessed your account, please contact our support team immediately.</p>
      <p>Thank you for using Artful Heaven!</p>
      <a href="mailto:support@artfulheaven.com" class="button">Contact Support</a>
      <p>Best regards,<br>Artful Heaven Team</p>
    </div>
    <div class="email-footer">
      <p>Artful Heaven, 123 Art Street, Creativity City, 45678</p>
      <p>If you have any questions, please <a href="mailto:support@artfulheaven.com">contact us</a>.</p>
    </div>
  </div>
</body>
</html>
`;
};