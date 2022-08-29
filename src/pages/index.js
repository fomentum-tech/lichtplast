import Head from "next/head";

import {
  Hero,
  HeroContainer,
  HeroWrapper,
  HeroHeader,
  HeroContent,
  HeroDetails,
  Menu,
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
  ContactInfo,
  Footer,
  FooterWrapper,
  FooterContent,
} from "../styles/styles";

import ContactForm from "../components/FormContact";
import { MenuMobile } from "../components/MenuMobile";

import { Link } from "react-scroll";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";

export default function Home() {
  SwiperCore.use([Autoplay]);

  return (
    <>
      <Head>
        <title>Lichtplast</title>
      </Head>

      <MenuMobile />

      <Hero>
        <Swiper slidesPerView={1} loop={true} autoplay={{ delay: 3000 }}>
          <SwiperSlide>
            <HeroBg bg="/images/bg-01.jpg" />
          </SwiperSlide>

          <SwiperSlide>
            <HeroBg bg="/images/bg-02.jpg" />
          </SwiperSlide>
        </Swiper>

        <HeroContainer>
          <HeroWrapper>
            <HeroHeader>
              <img src="/images/logo.svg" alt="lichtplast" />

              <Menu>
                <ul>
                  <li>
                    <Link
                      to="enterprise"
                      smooth={true}
                      duration={300}
                      offset={-100}
                    >
                      A Empresa
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="contact"
                      smooth={true}
                      duration={400}
                      offset={-100}
                    >
                      Contato
                    </Link>
                  </li>
                </ul>
              </Menu>
            </HeroHeader>

            <HeroContent>
              <p>Mais de 12 anos de experiência em soluções termóplasticas</p>
            </HeroContent>
            <HeroDetails>
              <div></div>
            </HeroDetails>
          </HeroWrapper>
        </HeroContainer>
      </Hero>

      <Main>
        <About>
          <AboutContent>
            <h1>Desde 2010 injetando muito mais que plásticos</h1>
            <p>Qualidade compromisso e seriedade</p>
            <Link
              type="button"
              to="contact"
              smooth={true}
              duration={400}
              offset={-50}
            >
              Fale Conosco
            </Link>
          </AboutContent>
          <AboutImages>
            <div>
              <img src="/images/about-image-01.jpg" alt="" />
              <img src="/images/about-image-02.jpg" alt="" />
            </div>
            <img
              src="/images/about-image-03.jpg"
              alt=""
              className="about-image-03"
            />
          </AboutImages>
        </About>

        <Values>
          <ValuesWrapper>
            <h2>Nossos Valores</h2>
            <ValuesCards>
              <ValuesCard>
                <ValuesCardIcon>
                  <img src="/images/icon-business.svg" alt="icon business" />
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
                  <img src="/images/icon-trophy.svg" alt="icon trophy" />
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
                  <img src="/images/icon-gear.svg" alt="icon gear" />
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
                  <img alt="icon list" src="/images/icon-list.svg" />
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

        <Enterprise id="enterprise">
          <img src="/images/enterprise-image.jpg" alt="machines" />
          <EnterpriseContent>
            <h2>A Empresa</h2>
            <p>
              Somos uma empresa direcionada a uma relação parceira, transparente
              e profissional com colaboradores, fornecedores e clientes.
            </p>
            <p>
              Com investimento em treinamento e tecnologia, utilizamos um
              Sistema de Gestão de Qualidade que nos permite implementar,
              documentar, registrar e acompanhar continuamente o processo
              produtivo, garantindo produtos que atendam as necessidades de
              nossos clientes.
            </p>
          </EnterpriseContent>
        </Enterprise>

        <Contact id="contact">
          <ContactInfo>
            <h2>Entre em contato</h2>

            <p>
              Você também pode entrar em contato conosco através do nosso email
              para tirar suas dúvidas, solicitar catálogos ou orçamentos
            </p>

            <a href="mailto:adm@lichtplast.com.br">adm@lichtplast.com.br</a>
          </ContactInfo>

          <ContactForm />
        </Contact>
      </Main>

      <Footer>
        <FooterWrapper>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.9804390949485!2d-46.5140214!3d-22.950947499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceb61e647d620d%3A0x41cd4f6cd2104fa!2sRua%20Sumika%20Aoki%2C%20487%20-%20Centro%20Industrial%20Rafael%20Diniz%2C%20Bragan%C3%A7a%20Paulista%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1661809799137!5m2!1spt-BR!2sbr"
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          <FooterContent>
            <div>
              <img src="/images/logo.svg" alt="lichtplast" />
              <strong>(11) 4035 0379</strong>
            </div>
            <div>
              <p>
                Rua Sumika Aoki, 487 - Centro Industrial Rafael Diniz, Bragança
                Paulista - SP, 12929-583
              </p>
              
              <a href="https://website-fomentum-tech.vercel.app/" target="_blank" rel="noreferrer">fomentum:tech</a>
            </div>
          </FooterContent>
        </FooterWrapper>
      </Footer>
    </>
  );
}
