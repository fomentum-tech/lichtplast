import { Form, FormGroup, FormMessage } from "./styles";

import { useForm } from "react-hook-form";
import axios from "axios";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmitForm(values) {
    const config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_URL}/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    try {
      const res = await axios(config);

      if (res.status == 200) {
        reset();
      }
    } catch (err) {
      console.log(err);
    }
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
        </div>
      </Form>
    </>
  );
}
