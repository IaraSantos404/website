import Styles from "./footer.module.css"
import Logo from "./../../assets/logoFooter.svg"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from "react-router-dom";
  
export default function Footer(){


  return(
    <footer id={Styles.footer}>
      <div className={Styles.container}>
        
        <div className={Styles.logoEndereco}>
          <img src={Logo} alt="Logo" className={Styles.logo}/>
          <p>Rua Felipe Santiago, 411 - Cidade Universitária,</p>
          <p>Russas - CE, 62900-000</p>
        </div>

        <div className={Styles.nav}>
          <h3>Navegação</h3>
          <ul>
            <li><a href="#home">Início</a></li>
            <li><a href="#about">Conheça a SESCOMP</a></li>
            <li><Link to="/palestrantes">Palestrantes</Link></li>
            <li><Link target="__blank" to="https://www.even3.com.br/viii-sescomp-573076">Programação</Link></li>
            {/* <li><a href="#contato">Loja</a></li> */}
          </ul>
        </div>

        <div className={Styles.links}>
          <h3>Links Importantes</h3>
          <ul>
            <li><a target="__blank" href="https://www.even3.com.br/viii-sescomp-573076">Realizar a inscrição do evento</a></li>
            <li><a target="__blank" href="https://wa.me/+5574988757145">Seja um patrocinador</a></li>
          </ul>
        </div>

        <div className={Styles.social}>
          <h3>Siga-nos</h3>
          <div className={Styles.icons}>
            <div>
              <a target="__blank" href="https://www.facebook.com/sescompufc/?locale=pt_BR"><FaFacebook/></a>
            </div>
            <div>
              <a target="__blank" href="https://www.instagram.com/sescompufc/"><FaInstagram/></a>
            </div>
            <div>
              <a target="__blank" href="https://www.linkedin.com/company/sescomp-ufc/">
              <FaLinkedin/>
              </a>
            </div>
            
            
          </div>
        </div>
      </div>

      <div className={Styles.copy}>
        <p>&copy; {new Date().getFullYear()} - Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
