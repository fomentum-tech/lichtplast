/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import "swiper/css";

import {
  Hero,
  HeroContainer,
  HeroWrapper,
  HeroHeader,
  HeroDetails,
  HeroBg,
  Main,
  About,
  AboutContent,
  AboutImages,
  Values,
  ValuesWrapper,
  ValuesCards,
  ValuesCard,
  ValuesCardIcon,
  Enterprise,
  EnterpriseContent,
  Contact,
  Footer,
  FooterWrapper,
  FooterContent,
  ContactInfo,
  ContactForm,
  ContactFormMessage,
  ContactFormGroup,
} from "../styles/styles";

export default function Home() {
  SwiperCore.use([Autoplay]);

  return (
    <>
      <Head>
        <title>Lichtplast</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Hero>
        <Swiper slidesPerView={1} loop={true} autoplay={{ delay: 6000 }}>
          <SwiperSlide>
            <HeroBg bg="/images/slider-01.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <HeroBg bg="/images/slider-02.jpg" />
          </SwiperSlide>
        </Swiper>

        <HeroContainer>
          <HeroWrapper>
            <HeroHeader>
              <img src="/images/logo.png" alt="lichtplast" />

              <nav>
                <ul>
                  <li>
                    <a href="#">Serviços</a>
                  </li>

                  <li>
                    <a href="#">A Empresa</a>
                  </li>

                  <li>
                    <a href="#">Contato</a>
                  </li>
                </ul>
              </nav>
            </HeroHeader>

            <p>Mais de 28 anos de experiência em soluções termóplasticas</p>

            <HeroDetails>
              <div></div>
            </HeroDetails>
          </HeroWrapper>
        </HeroContainer>
      </Hero>

      <Main>
        <About>
          <AboutContent>
            <h1>
              Nós somos a <img src="/images/logo-dark.png" alt="lichtplast" />
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci
              nulla pellentesque dignissim enim sit amet venenatis urna.
            </p>
            <button type="button">Fale Conosco</button>
          </AboutContent>
          <AboutImages>
            <div>
              <img
                src="/images/about-image-01.jpg"
                alt=""
                width="277px"
                height="262px"
              />
              <img
                src="/images/about-image-02.jpg"
                alt=""
                width="277px"
                height="183px"
              />
            </div>
            <img
              src="/images/about-image-03.jpg"
              alt=""
              width="210px"
              height="471px"
            />
          </AboutImages>
        </About>

        <Values>
          <ValuesWrapper>
            <h2>Nossos Valores</h2>
            <ValuesCards>
              <ValuesCard>
                <ValuesCardIcon>
                  <img src="/images/icon-business.png" alt="icon business" />
                </ValuesCardIcon>
                <div>
                  <strong>Atuação</strong>
                  <p>
                    Industrialização de produtos através de injeção de
                    termoplásticos em geral
                  </p>
                </div>
              </ValuesCard>

              <ValuesCard>
                <ValuesCardIcon>
                  <img src="/images/icon-trophy.png" alt="icon trophy" />
                </ValuesCardIcon>
                <div>
                  <strong>Compromisso</strong>
                  <p>
                    Oferecer soluções na área de injeção de termoplásticos a
                    preços justos.
                  </p>
                </div>
              </ValuesCard>

              <ValuesCard>
                <ValuesCardIcon>
                  <img src="/images/icon-gear.png" alt="icon gear" />
                </ValuesCardIcon>
                <div>
                  <strong>Produção</strong>
                  <p>
                    Produtos próprios e serviço de terceirização de produção.
                  </p>
                </div>
              </ValuesCard>

              <ValuesCard>
                <ValuesCardIcon>
                  <img src="/images/icon-list.png" alt="icon list" />
                </ValuesCardIcon>
                <div>
                  <strong>Segmentos</strong>
                  <p>
                    Automotivo, construção civil, hospitalar, utensílios
                    domésticos e pet.
                  </p>
                </div>
              </ValuesCard>
            </ValuesCards>
          </ValuesWrapper>
        </Values>

        <Enterprise>
          <img src="/images/enterprise-image.jpg" alt="machines" />
          <EnterpriseContent>
            <h2>A Empresa</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
              porttitor eget dolor morbi non arcu risus quis varius.
            </p>
            <p>
              Elementum curabitur vitae nunc sed velit. Dolor sed viverra ipsum
              nunc aliquet bibendum enim facilisis gravida. Sit amet consectetur
              adipiscing elit. Egestas purus viverra accumsan in nisl. Ut etiam
              sit amet nisl. Bibendum arcu vitae elementum curabitur vitae
              nunc.Amet porttitor eget dolor morbi non arcu risus quis varius.{" "}
            </p>
          </EnterpriseContent>
        </Enterprise>

        <Contact>
          <ContactInfo>
            <h2>Entre em contato</h2>

            <p>
              Você também pode entrar em contato conosco através do nosso email
              para tirar suas dúvidas, solicitar catálogos ou orçamentos
            </p>

            <a href="mailto:contato@lichtplast.com.br">
              contato@lichtplast.com.br
            </a>
          </ContactInfo>

          <ContactForm>
            <div>
              <ContactFormGroup>
                <div>
                  <label htmlFor="name">Seu Nome</label>
                  <input type="text" placeholder="Digite seu nome" id="name" />
                </div>

                <div>
                  <label htmlFor="email">Seu email</label>
                  <input type="email" placeholder="nome@email.com" id="email" />
                </div>
              </ContactFormGroup>

              <ContactFormMessage>
                <label htmlFor="message">Mensagem</label>
                <textarea
                  placeholder="Sua mensagem"
                  id="message"
                  rows="6"
                  maxLength="700"
                ></textarea>
              </ContactFormMessage>

              <button type="submit">Enviar</button>
            </div>
          </ContactForm>
        </Contact>
      </Main>

      <Footer>
        <FooterWrapper>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.9839379900322!2d-46.51617798448248!3d-22.95081864521492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceb79fdd8c7e4d%3A0x8b568c5128c71fc2!2sLichtPlast%20Ind%20e%20Com%20Ltda!5e0!3m2!1spt-BR!2sbr!4v1659723142091!5m2!1spt-BR!2sbr"
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
          <FooterContent>
            <div>
              <img src="/images/logo.png" alt="lichtplast" />
              <strong>(11) 4035 0379</strong>
            </div>
            <div>
              <p>
                R. Azuma - Centro Industrial Rafael Diniz Bragança Paulista -
                SP, 12919-586
              </p>
              <a href="#">fomentum.studio</a>
            </div>
          </FooterContent>
        </FooterWrapper>
      </Footer>
    </>
  );
}