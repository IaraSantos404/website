import Button from '../Button/button'
import styles from './header.module.css'
import LogoSescomp from "../../assets/logosescomp.svg"
import LogoUfc from "../../assets/logo ufc.svg"

export default function Header(){
    return(
        <>
            <header id={styles.header}>
                
                {/* <Button texto='Submeter Artigo' className={styles.mobileSubmit}/> */}
                
                <nav className={`${styles.nav_container}`}>
                    <ul>
                        <li><img src={LogoSescomp} alt="Logo da sescomp" className={styles.logoSescomp} /></li>
                        
                        <li>Início</li>
                        <li>Patrocinadores</li>
                        <li>Programação</li>
                        <li className={styles.button}>
                            <button>Inscreva-se</button>
                        </li>
                        <li>Loja</li>
                        <li>Palestrantes</li>
                        <li>Manual</li>
                        <li>Edições Anteriores</li>
                        <li><img src={LogoUfc} alt="Logo da UFC" className={styles.logoUfc} /></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}