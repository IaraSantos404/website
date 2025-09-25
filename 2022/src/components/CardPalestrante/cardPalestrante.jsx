import Styles from "./cardPalestrante.module.css"
import Profile from "../../assets/palestrantes/profile.png"

export default function CardPalestrante({foto, nome, descricao, borda}){
  return(
    <>
      <div className={`${Styles.card} ${Styles[borda]}`}>
        {foto ? (
          <img src={foto} alt={nome} className={Styles.foto} />
        ) : (
          <img src={Profile} alt="Foto de perfil" className={Styles.foto} />
        )}
        <h2 className={Styles.nome}>{nome}</h2>
        <p className={Styles.descricao}>{descricao}</p>
      </div>
    </>
  )
}