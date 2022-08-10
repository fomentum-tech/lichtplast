import { Container } from "./styles";

import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-scroll";

import { useState } from "react";

export function MenuMobile() {
  const [active, setMode] = useState(false);

  const ToggleMode = () => {
    setMode(!active);
  };

  return (
    <Container className={active ? "icon iconActive" : "icon"}>
      {active ? (
        <IoClose size={45} onClick={ToggleMode} />
      ) : (
        <IoMenu size={45} onClick={ToggleMode} />
      )}

      <nav className={active ? "menu menuOpen" : "menu menuClose"}>
        <ul>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={200}
              onClick={ToggleMode}
            >
              Serviços
            </Link>
          </li>

          <li>
            <Link
              to="enterprise"
              smooth={true}
              duration={300}
              offset={-100}
              onClick={ToggleMode}
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
              onClick={ToggleMode}
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
