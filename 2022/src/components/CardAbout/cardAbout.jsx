import Styles from './cardAbout.module.css'

export default function CardAbout({titulo, descricao, icon}){
  return(
    <>
      <div className={Styles.card}>
        <div className={Styles.icon}>{icon}</div>
        <h2 className={Styles.title}>{titulo}</h2>
        <p className={Styles.description}>{descricao}</p>
      </div>
    </>
  )
}