import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(
  "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"
);

export default async (req, res) => {
  const { user_email, user_name, user_message } = req.body;
  const msg = {
    to: "lichtplast@gmail.com",
    from: "lichtplast@gmail.com",
    subject: "Formulário de Contato - Lichtplast",
    html: `<p>Você tem um novo envio de formulário de contato</p><br>
    <p><strong>Email: </strong>${user_email}</p><br>
    <p><strong>Nome: </strong>${user_name}</p><br>
    <p><strong>Mensagem: </strong>${user_message}</p><br>`,
  };

  try {
    await sendgrid.send(msg);
  } catch (err) {
    throw new Error(err);
  }

  return res.status(200).json({ message: "sucess" });
};
