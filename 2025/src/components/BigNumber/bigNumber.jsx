import Styles from './bigNumber.module.css';
import CarrosselBN from '../CarrosselBigNumber/carrosselBN';

export default function BigNumber(){
  return(
    <>
      <section id={Styles.bigNumber}>
        <CarrosselBN />
        <div className={Styles.title}>
          <h1>Big Numbers</h1>
          <p>Como foi a SESCOMP24 em números</p>
        </div>

        <div className={Styles.infos}>
          <div>
            <p>1K+</p>
            <p>inscritos</p>
          </div>
          <div>
            <p>80+</p>
            <p>atividades</p>
          </div>
          <div>
            <p>100+</p>
            <p>palestrantes</p>
          </div>
          <div>
            <p>180h+</p>
            <p>horas de conteúdo</p>
          </div>
        </div>
      </section>
    
    </>
  )
}