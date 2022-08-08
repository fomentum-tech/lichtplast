import nodemailer from "nodemailer";

export default async (req, res) => {
  const { user_name, user_email, user_message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  try {
    const email = await transporter.sendMail({
      from: user_email,
      to: "testedavysonemail@gmail.com",
      subject: `Mensagem de contato - ${user_name}`,
      html: `
      <p>Você tem um novo envio de formulário de contato</p><br>
      <p><strong>Nome: </strong> ${user_name} </p><br>
      <p><strong>Mensagem: </strong> ${user_message} </p><br>
      `,
    });

    console.log("Mensagem enviada", email.messageId);
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};
