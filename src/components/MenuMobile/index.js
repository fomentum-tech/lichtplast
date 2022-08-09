import { Container } from "./styles";

import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";

import { useState } from "react";

export function MenuMobile() {
  const [active, setMode] = useState(false);

  const ToggleMode = () => {
    console.log("Clicou");
    setMode(!active);
  };

  return (
    <Container>
      <IoClose
        size={45}
        className={active ? "icon iconActive" : "icon"}
        onClick={ToggleMode}
      />
      <nav className={active ? "menu menuOpen" : "menu menuClose"}>
        <ul>
          <li>
            <Link to="services" smooth={true} duration={200}>
              Serviços
            </Link>
          </li>

          <li>
            <Link to="enterprise" smooth={true} duration={300} offset={-100}>
              A Empresa
            </Link>
          </li>

          <li>
            <Link to="contact" smooth={true} duration={400} offset={-100}>
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
