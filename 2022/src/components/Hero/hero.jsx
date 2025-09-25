import Styles from "./hero.module.css"
import Entrada from "../../assets/entrada.svg"
import { FaCalendar } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

export default function Hero(){
  return (
    <>
      <section id="home" className={Styles.hero}>
        <div className={Styles.hero_container}>
          <div className={Styles.texts}>
            <h1>O <span>maior</span> evento de tecnologia do vale jaguaribe</h1>
            <p>Venha se reinventar e transformar o amanhã -</p>
            <div className={Styles.buttons}>
              <a target="__blank" href="https://www.even3.com.br/viii-sescomp-573076">
                <button>Participar do Evento</button>
              </a>
              
              {/* <button>Patrocine o Evento</button> */}
            </div>
            <div className={Styles.infos}>
              <div style={{display: "flex", gap: "5px"}} className={Styles.date}>
                <FaCalendar className={Styles.icon}/>
                <p>20 a 23 de Outubro</p>
              </div>
              <div style={{display: "flex"}} className={Styles.location}>
                <FaLocationDot className={Styles.icon}/>
                <p>Universidade Federal do Ceará Campus Russas</p>
              </div>
            </div>
          </div>
          <img src={Entrada} alt="" />
        </div>
      </section>
    </>
  )
}