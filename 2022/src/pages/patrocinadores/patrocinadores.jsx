import Styles from './patrocinadores.module.css';
import Alura from "./../../assets/patrocinios/alura.png"
import DigitalCollege from "./../../assets/patrocinios/digitalCollege.png"
import rockseat from "./../../assets/patrocinios/rockseat.png"
import tocaRoshan from "./../../assets/patrocinios/Toca do Roshan 1.png"
import Yello from "./../../assets/patrocinios/yeloo.png"
import Oboticaro from "./../../assets/patrocinios/oboticaro.svg"
import Armagedom from "./../../assets/patrocinios/armagedom.svg"
import DevGirl from "./../../assets/patrocinios/dev girls.svg"
import Fisk from "./../../assets/patrocinios/fisk-logo-1 1.svg"

import Decoration from "./../../assets/decoration.svg"

export default function Patrocinadores() {
  return(
    <>
      <section className={Styles.patrocinadores} id="patrocinadores">
        <img className={Styles.decoration1} src={Decoration} alt="" />
        <br /><br />  
        <div className={Styles.background}>
          <p>que apoiam a sescomp</p>
          <h1>empresas</h1>
        </div>

        <p className={Styles.text}>Terabyte</p>
        <div className={Styles.logos}>
          <a target="_blank" href="https://www.alura.com.br/">
            <img src={Alura} alt="logo da alura" />
          </a>
          <a target="_blank" href="https://www.yeloo.com.br/">
            <img src={Yello} alt="logo da yeloo" />
          </a>

          <a target="_blank" href="https://rocketseat.com.br/">
            <img src={rockseat} alt="logo da rockseat" />
          </a>
        </div>

        <p className={Styles.text}>Megabyte</p>
        <div className={Styles.logos}>
          <a target="_blank" href="https://www.digitalcollege.com.br/">
            <img src={DigitalCollege} alt="logo da digital college" />
          </a>
        </div>

        <p className={Styles.text}>Kilobit</p>
        <div className={Styles.logos}>
          <a target="_blank" href="https://fisk.com.br/">
            <img src={Fisk} alt="logo da fisk" />
          </a>
          <a target="_blank" href="https://www.instagram.com/tocadoroshan_/">
            <img src={tocaRoshan} alt="logo da toca do roshan" />
          </a>
          <a target="_blank" href="https://www.boticario.com.br/">
            <img src={Oboticaro} alt="logo da oboticario" />
          </a>
          
        </div>

        <p className={Styles.text}>Parceiros</p>
        <div className={Styles.logos}>
          <a target="_blank" href="https://www.instagram.com/armagedomsuplementos">
            <img src={Armagedom} alt="logo da armagedom" />
          </a>
          <a target="_blank" href="https://www.developergirls.com.br/">
            <img src={DevGirl} alt="logo da developer girl" />
          </a>
        </div>

        <img className={Styles.decoration2} src={Decoration} alt="" />
      </section>
    </>
  )
}