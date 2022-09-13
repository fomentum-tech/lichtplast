import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  try {
    console.log("REQ.BODY", req.body);
    const { user_email, user_name, user_message } = req.body;

    const msg = {
      to: user_email,
      from: "davysonwss@hotmail.com",
      subject: "Formulário de Contato - Lichtplast",
      html: `<p>Você tem um novo envio de formulário de contato</p><br>
      <p><strong>Nome: </strong>${user_name}</p><br>
      <p><strong>Mensagem: </strong>${user_message}</p><br>`,
    };

    console.log(sendgrid);

    await sendgrid.send(msg);
    res.json({ sucess: true });
  } catch (error) {
    return res.status(error.statusCode || 500).json(error);
  }
};
