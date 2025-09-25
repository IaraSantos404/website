import Styles from "./ingresso.module.css"
import { IoMdCheckmark } from "react-icons/io";
import Ticket from "../../assets/ticket.svg"
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Ingresso(){
  return(
    <>
      <section id={Styles.ingresso}>
        <div>
          <div className={Styles.texts}>
            <h1>Garanta seu ingresso</h1>
            <ul>
              <li>
                <IoMdCheckmark color="#F14D7C"/>
                <span>Acesso aos 4 dias de evento</span>
              </li>
              <li>
                <IoMdCheckmark color="#F14D7C"/>
                <span>Certificado de participação</span>
              </li>
              <li>
                <IoMdCheckmark color="#F14D7C"/>
                <span>Acesso a conteúdos exclusivos</span>
              </li>
            </ul>
            <a target="__blank" href="https://www.even3.com.br/viii-sescomp-573076">
              <button>Garantir meu ingresso <FaLongArrowAltRight /></button>
            </a>
          </div>
          <img src={Ticket} alt="ticket" />
        </div>
        
      </section>
    </>
  )
}