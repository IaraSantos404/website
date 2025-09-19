import Styles from "./hero.module.css"
import Entrada from "../../assets/entrada.svg"
import { FaCalendar } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

export default function Hero(){
  return (
    <>
      <section className={Styles.hero}>
        <div className={Styles.hero_container}>
          <div className={Styles.texts}>
            <h1>O <span>maior</span> evento de tecnologia do vale jaguaribe</h1>
            <p>Venha se reinventar e transformar o amanhã -</p>
            <div className={Styles.buttons}>
              <button>Participar do Evento</button>
              <button>Patrocine o Evento</button>
            </div>
            <div className={Styles.infos}>
              <div style={{display: "flex", gap: "10px"}} className={Styles.date}>
                <FaCalendar className={Styles.icon}/>
                <p>20 a 23 de Outubro</p>
              </div>
              <div style={{display: "flex", gap: "10px"}} className={Styles.location}>
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