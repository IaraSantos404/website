import Styles from './about.module.css'
import Img1 from '../../assets/pessoashallimg.png'
import Img2 from '../../assets/roboimg.png'
import Img3 from '../../assets/robos2img.png'

import { FaLightbulb } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { FaToolbox } from "react-icons/fa6";

import CardAbout from '../../components/CardAbout/cardAbout'
export default function About() {
  const cards = [
    {titulo: "Networking", descricao: "Onde ideias e conexões se transformam em oportunidades.", icon: <FaHandshake /> },
    {titulo: "Palestras", descricao: "Inspire e seja inspirado pelos grandes nomes da tecnologia.", icon: <FaLightbulb /> },
    {titulo: "Atividades", descricao: "Vivencie a tecnologia na prática. Participe de oficinas interativas ou conduza experiências que impactem diretamente o aprendizado dos participantes.", icon: <FaTools /> },
    {titulo: "Oportunidades", descricao: "Na SESCOMP, talentos e oportunidades se encontram para transformar trajetórias e impulsionar a inovação", icon: <FaToolbox /> },
  ]
  return (
    <>
      <section id="about" className={Styles.about}>
        <div className={Styles.aboutContainer}>
          <h1>O QUE É A SESCOMP</h1>
          <div className={Styles.infos}>
            <div className={Styles.texts}>
              <p>A SESCOMP é um evento anual da UFC – Campus Russas que reúne estudantes,
              comunidades locais e entusiastas da tecnologia. Com palestras, oficinas e atividades práticas,
                busca compartilhar <strong>conhecimento</strong>, estimular a <strong>inovação </strong>
                e <strong> networking, </strong> promovendo <strong>ensino, pesquisa</strong> e <strong> extensão </strong>
                em benefício da sociedade.</p>

              <p>A Semana de Engenharia de Software e Ciência da Computação (SESCOMP) é um evento que conecta mentes brilhantes:
                alunos, professores e profissionais que compartilham a paixão pela tecnologia. Durante uma semana,
                você poderá imergir em uma programação vibrante, com palestras motivadoras, espaços dinâmicos
                e atividades práticas que irão aprofundar sua paixão pela tecnologia e fortalecer suas conexões com outros entusiastas.
              </p>

              <p>Se você é apaixonado por inovação e busca oportunidades nesse universo, a <strong>SESCOMP</strong> é para você.</p>
            </div>
            <div className={Styles.imgs}>
              <img src={Img1} alt="" />
              <img src={Img2} alt="" />
              <img src={Img3} alt="" />
            </div>
          </div>
        </div>
        <div className={Styles.bola1}></div>
        <div className={Styles.bola2}></div>
        
        <div className={Styles.cards}>
          {cards.map((card, index) => (
            <CardAbout key={index} titulo={card.titulo} descricao={card.descricao} icon={card.icon} />
          ))}
        </div>

      </section>
    </>
  )
}