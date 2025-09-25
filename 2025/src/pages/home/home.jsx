import Hero from "../../components/Hero/hero"
import About from "../about/about"
import BigNumber from "../../components/BigNumber/bigNumber"
import Detalhes from "../../components/Detalhes/detalhes"
import Ingresso from "../../components/Ingresso/ingresso"
import Footer from "../../components/Footer/footer"
import Header from "../../components/Header/header"

export default function Home(){
  return(
    <>
      <Header />
      <Hero />
      <About />
      <BigNumber />
      <Detalhes />
      <Ingresso />
      <Footer />
    </>
  )
}