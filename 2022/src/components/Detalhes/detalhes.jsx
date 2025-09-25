import Styles from "./detalhes.module.css"
import Img1 from "../../assets/img-det1.png"
import Img2 from "../../assets/img-det2.png"
import Img3 from "../../assets/img-det3.png"

export default function Detalhes(){
  return(
    <>
      <section id={Styles.detalhes}>
        <div className={Styles.container}>
          <h1>O QUE ESPERAR DA SESCOMP?</h1>
          {/* <button>Detalhes do evento</button> */}
        </div>

        <div className={Styles.cards}>
          <div>
            <img src={Img1} alt="imagem 1" />
            <h2>Conteúdo</h2>
            <p>Aprenda e se desafie com minicursos, palestras, maratona de programação,
              hackathon e outras atividades de aprendizado.</p>
          </div>
          <div>
            <img src={Img2} alt="imagem 2" />
            <h2>Entretenimento</h2>
            <p>Competições de e-sports, concurso de cosplay, sala geek, aulas de luta, karaoke;.</p>
          </div>
          <div>
            <img src={Img3} alt="imagem 3" />
            <h2>Zen</h2>
            <p>Um espaço pensado para você relaxar: massagem, descanso e recarregar as energias.</p>
          </div>
        </div>
      </section>
    </>
  )
}