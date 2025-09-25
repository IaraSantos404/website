import Styles from './patrocinadores.module.css';
import Alura from "./../../assets/patrocinios/alura.png"
import DigitalCollege from "./../../assets/patrocinios/digitalCollege.png"
import rockseat from "./../../assets/patrocinios/rockseat.png"
import tocaRoshan from "./../../assets/patrocinios/Toca do Roshan 1.png"
import Yello from "./../../assets/patrocinios/yeloo.png"


export default function Patrocinadores() {
  return(
    <>
      <section className={Styles.patrocinadores} id="patrocinadores">
        <div className={Styles.background}>
          <p>que apoiam a sescomp</p>
          <h1>empresas</h1>
        </div>

        <p className={Styles.text}>Terabyte</p>
        <div className={Styles.logos}>
          <a href="">
            <img src={Alura} alt="logo da alura" />
          </a>
          <a href="">
            <img src={Yello} alt="logo da yeloo" />
          </a>

          <a href="">
            <img src={rockseat} alt="logo da rockseat" />
          </a>
          
        </div>

        <p className={Styles.text}>Megabyte</p>
        <div className={Styles.logos}>
          <a href="">
            <img src={DigitalCollege} alt="logo da digital college" />
          </a>
        </div>

        <p className={Styles.text}>Kilobit</p>
        <div className={Styles.logos}>
          <a href="">
            <img src={tocaRoshan} alt="logo da toca do roshan" />
          </a>
          
        </div>
        
      </section>
    </>
  )
}