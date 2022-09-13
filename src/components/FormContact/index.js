import { Form, FormGroup, FormMessage } from "./styles";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { MessageErrorForm } from "./styles";

import sendEmail from "../../pages/api/contact";

export default function ContactForm() {
  const [errorForm, setErrorForm] = useState(false);
  const [messageSend, setMessageSend] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmitForm(values) {
    fetch("./api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        reset();
        setErrorForm(false);
        setMessageSend(true);
        console.log("Formulário enviado com sucesso!");
      })
      .catch((err) => {
        setMessageSend(false);
        setErrorForm(true);
        console.log("Meu erro", err);
      });
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmitForm)}>
        <div>
          <FormGroup>
            <div>
              <label htmlFor="name">Seu Nome</label>
              <input
                type="text"
                placeholder="Digite seu nome"
                id="name"
                {...register("user_name", {
                  required: true,
                })}
              />
              {errors?.user_name && <span>Você deve digitar um nome</span>}
            </div>

            <div>
              <label htmlFor="email">Seu email</label>
              <input
                type="email"
                placeholder="nome@email.com"
                id="email"
                name="user_email"
                maxLength="80"
                {...register("user_email", {
                  required: true,
                })}
              />
              {errors?.user_email && <span>Você deve digitar um email</span>}
            </div>
          </FormGroup>

          <FormMessage>
            <label htmlFor="message">Mensagem</label>
            <textarea
              placeholder="Sua mensagem"
              id="message"
              rows="6"
              name="message"
              maxLength="1000"
              {...register("user_message", {
                required: true,
              })}
            ></textarea>
            {errors?.user_message && (
              <span>Você deve escrever uma mensagem</span>
            )}
          </FormMessage>

          <button type="submit" value="Send">
            Enviar
          </button>
          {errorForm && (
            <MessageErrorForm>
              Não foi possível enviar sua mensagem, tente novamente!
            </MessageErrorForm>
          )}
          {messageSend ? (
            <MessageErrorForm color="green">
              Mensagem enviada com sucesso!
            </MessageErrorForm>
          ) : null}
        </div>
      </Form>
    </>
  );
}
