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
    <Container>
      {active ? (
        <IoClose size={45} onClick={ToggleMode} />
      ) : (
        <IoMenu size={45} onClick={ToggleMode} />
      )}

      {active ? (
        <nav className={active ? "menu menuOpen" : "menu menuClose"}>
          <ul>
            <li>
              <Link
                to="enterprise"
                smooth={true}
                duration={300}
                offset={-20}
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
                offset={-40}
                onClick={ToggleMode}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </Container>
  );
}
