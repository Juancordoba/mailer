const nodemailer = require("nodemailer");
const accountTransport = require("../account_transport.json");

async function main() {

  console.log(accountTransport.service)

    let transporter = nodemailer.createTransport({
       // debug: true,
        host: "relevo.grupogamma.lan",
        port: 25,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "eventos@grupogamma.com", 
            pass: "vnntsgg"
        },
        tls: {
            rejectUnauthorized: false
        }
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
    from: '"Grupo Gamma" eventos@grupogamma.com>', // sender address
    to: "juancordoba75@hotmail.com", // list of receivers
    subject: "Prueba configuracion gamma", // Subject line
    text: "Ok", // plain text body
    html: "<b>Mail ok</b>", // html body
  });


  console.log(info);


}

main().catch(console.error);