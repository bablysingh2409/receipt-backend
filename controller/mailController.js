// const nodemailer = require('nodemailer');
// require('dotenv').config();


// const smtpPassword = process.env.SMTP_PASSWORD;

// const callbackController = {
//   requestCallback: async (req, res) => {
//     try {
//       const { expenditureType, amount } = req.body;

//       // Send email notification
//       await sendEmailNotification({ expenditureType, amount });

//       res.status(200).json({ message: 'Callback request submitted successfully' });
//     } catch (error) {
//       console.error('Error submitting callback request:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   },
// };

// async function sendEmailNotification({ expenditureType, amount }) {
//   // nodemailer to send emails
//   const transporter = nodemailer.createTransport({
//     // email service 
//     service:'gmail',
//     host: 'smtp.gmail.com',
//     port: 587,
//     auth: {
//         user: 'bablysingh2409@gmail.com',
//         pass: smtpPassword
//     }
//   });


//   // Email content
//   const emailContent = {
//     from: 'bablysingh2409@gmail.com',
//     to: 'bablysingh2409@gmail.com',
//     subject: 'Receipt',
//     text: `Your expenditure Type is : ${expenditureType}\n  and amount is : ${amount}`,
    
//   };

//   // Send the email

//   const sendMail=async(transporter,emailContent)=>{
//     try{
//        await transporter.sendMail(emailContent);
//        console.log('email has sent')
//     }
//     catch(err){
//         console.log(err)
//     }
//   }
//   sendMail(transporter,emailContent);
// }



// module.exports = callbackController;
