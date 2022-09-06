import nodemailer from "nodemailer";

async function main() {
    let transporter = nodemailer.createTransport({
        debug: true,
        host: "mail.grupogamma.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "eventos@grupogamma.com", 
            pass: "vnntsgg"
        },
    });

    transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log("Server is ready to take our messages");
        }
      });
    

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Grupo Gamma" sistemas@awtsagroup.com>', // sender address
    to: "juancordoba75@hotmail.com, juancordoba75@gmail.com, sistemas@awtsagroup.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

}

main().catch(console.error);