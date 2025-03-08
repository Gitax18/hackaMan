exports.OTPMailTemplate = (otp) => {
  const htmlString = `
  <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>OTP Verification</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          text-align: center;
          padding: 20px;
        }
        .container {
          background: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          display: inline-block;
        }
        .otp {
          font-size: 24px;
          font-weight: bold;
          color: #333;
          margin: 20px 0;
        }
        .footer {
          margin-top: 20px;
          font-size: 12px;
          color: #666;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>OTP Verification</h2>
        <p>Use the following OTP to verify your email for <strong>HackaMan</strong>:</p>
        <div class="otp">${otp}</div>
        <p>This OTP is valid for a 1 hour. Do not share it with anyone.</p>
        <p class="footer">If you did not request this OTP, please ignore this email.</p>
      </div>
    </body>
    </html>
  `;

  return htmlString;
};

exports.OTPTextTemplate = (otp) => {
  return `Your OTP for HackaMan verification is: ${otp}. Do not share this OTP with anyone. If you did not request this, please ignore this message.`;
};
