import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./header.module.css";
import LogoSescomp from "../../assets/logosescomp.svg";
import LogoUfc from "../../assets/logo ufc.svg";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    return (
    <>
        <header id={styles.header}>
            <nav className={styles.nav_container}>

            <img
            onClick={() => navigate("/")}
            src={LogoSescomp}
            alt="Logo da sescomp"
            className={styles.logoSescomp}
            />

            <ul className={styles.nav_links}>
                <li onClick={() => navigate("/")}>Início</li>
                <li><a href="#patrocinadores">Patrocinadores</a></li>
                <li><a target="__blank" href="https://www.even3.com.br/viii-sescomp-573076">Programação</a></li>
                <li className={styles.button}>
                    <a target="__blank" href="https://www.even3.com.br/viii-sescomp-573076">
                        <button>Inscreva-se</button>
                    </a>
                </li>
                <li onClick={() => navigate("/palestrantes")}>Palestrantes</li>
                <li><a target="__blank" href="https://sescomp.com.br/2024/"> Edições Anteriores</a></li>
            </ul>

            <a target="__blank" href="https://www.campusrussas.ufc.br/">
                <img
                src={LogoUfc}
                alt="Logo da UFC"
                className={styles.logoUfc}
                />
            </a>
            


            <div
            className={styles.hamburger}
            onClick={() => setMenuOpen(true)}
            >
            <FaBars color="#F14D7C"/>
            </div>
        </nav>

    
        <div className={`${styles.sideMenu} ${menuOpen ? styles.open : ""}`}>
            <div className={styles.closeBtn} onClick={() => setMenuOpen(false)}>
            <FaTimes />
            </div>
            <ul>
                <li onClick={() => navigate("/")}>Início</li>
                <li><a href="#patrocinadores">Patrocinadores</a></li>
                <li><a target="__blank" href="https://www.even3.com.br/viii-sescomp-573076">Programação</a></li>
                <li className={styles.button}>
                    <a target="__blank" href="https://www.even3.com.br/viii-sescomp-573076">
                        <button>Inscreva-se</button>
                    </a>
                </li>
                <li onClick={() => navigate("/palestrantes")}>Palestrantes</li>
                <li><a target="__blank" href="https://sescomp.com.br/2024/"> Edições Anteriores</a></li>
            </ul>
        </div>
        </header>
    </>
    );
}
