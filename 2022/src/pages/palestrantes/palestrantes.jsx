import Styles from "./palestrantes.module.css"
import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer"
import CardPalestrante from "../../components/CardPalestrante/cardPalestrante"

import Img from "./../../assets/palestrantes/adriano.svg"
import Alan from "./../../assets/palestrantes/Alan victor.svg"
import Alessandro from "./../../assets/palestrantes/alessandro.svg"
import Eloi from "./../../assets/palestrantes/eloi.png"
import Neves from "./../../assets/palestrantes/Antonio Neves 1.svg"
import Gabriel from "./../../assets/palestrantes/Carlos Gabriel dev 1.png"
import Debora from "./../../assets/palestrantes/Debora Ruth 1.png"
import EduardoTavares from "./../../assets/palestrantes/Eduardo Tavares de Oliveira 2.png"
import Emily from "./../../assets/palestrantes/emily.png"
import Eneri from "./../../assets/palestrantes/perfil - Eneri D'Angelis.png"
import Eraldo from "./../../assets/palestrantes/Eraldo Maia.png"
import FelipeArrais from "./../../assets/palestrantes/SAL01128 - felipe arrais.png"
import Geovanna from "./../../assets/palestrantes/Geovanna Pedroso - GSP 1.png"
import Jessica from "./../../assets/palestrantes/Jessica Neiva de Figueiredo Leite Araujo 1.png"
import JoseWesley from "./../../assets/palestrantes/José Wesley 1.png"
import Liana from "./../../assets/palestrantes/Liana Carvalho 1.png"
import LuisFranklin from "./../../assets/palestrantes/Luis Franklin (1).png"
import MarcosAlencar from "./../../assets/palestrantes/Marcos de Alencar Carvalho 1.png"
import MarcosLaueber from "./../../assets/palestrantes/Marcos lauelber.png"
import Saulo from "./../../assets/palestrantes/Saulo José 1.png"
import MarcusVinicius from "./../../assets/palestrantes/Marcus Vinicius (1) 1.png"
import MatheusBischof from "./../../assets/palestrantes/Matheus Bischof dos Santos 1.png"
import MatheusCapelo from "./../../assets/palestrantes/matheus capelo 1.png"
import Pitagoras from "./../../assets/palestrantes/Pitágoras Graça Martins 1.png"
import Rebeca from "./../../assets/palestrantes/Rebeca Sousa.png"
import Robson from "./../../assets/palestrantes/ROBS - Robson Junior Cruz.png"
import Rosineide from "./../../assets/palestrantes/Rosineide da Paz.png"
import Sabrina from "./../../assets/palestrantes/perfil_sabrina.png"
// import Alynne from "./../../assets/palestrantes/Alynne Ferreira Sousa.png"
import Sofia from "./../../assets/palestrantes/Sofia Rodrigues Santiago 1.png"
import Ticiana from "./../../assets/palestrantes/Ticiana Alves 1.png"
import Veridiano from "./../../assets/palestrantes/veridiano ferreira de carvalho 1.png"

export default function Palestrantes() {
  const palestrantes = [
    {
      foto: Img,
      nome: "Adriano Gomes da Silva",
      descricao: "profissional de TI com sólida formação acadêmica e vasta experiência. Ele é mestre em Ciência da Computação e possui especializações em Engenharia de Software e Docência. Ao longo de sua carreira, atuou como Assessor de TI na Prefeitura de Limoeiro do Norte e como professor na SoulCode Academy.",
      borda: "azul"
    },
    {
      foto: Alan,
      nome: "Alan Veras",
      descricao: "Líder Geral do Projeto Ares, entusiasta e experiente em Algoritmos de Machine Learning e automação, e curioso em Segurança da Informação.",
      borda: "rosa"
    },
    {
      foto: Alessandro,
      nome: "Alessandro Feitoza",
      descricao: "Bacharel em Sistemas de Informações. Especialista em Engenharia de Software. Mais de 12 anos de experiência em desenvolvimento web, com PHP e Javascript.",
      borda: "verde"
    },
    {
      foto: Neves,
      nome: "Antonio Neves da Silva",
      descricao: "Possui graduação em Física pela Universidade Federal do Ceará, mestrado em Física pela USP, e doutorado pela UFC (com período sanduíche na Universidade Claud Bernard Lyon 1). Atualmente é professor no Campus de Russas da Universidade Federal do Ceará.",
      borda: "laranja"
    },
    {
      foto: Gabriel,
      nome: "Carlos Gabriel Leite Barros",
      descricao: "é um profissional de tecnologia experiente, supervisor de desenvolvimento de software na Indústria Acert e líder na criação de um sistema ERP com IA. Além de ser graduando em Engenharia de Software na UFC, ele é fundador de projetos como a startup Jus Digital e o projeto ARES.",
      borda: "azul"
    },
    {
      foto: Debora,
      nome: "Debora Ruth da Silva Valentim",
      descricao: "Analista de Segurança Digital na Buzzmonitor e Perita Judicial cadastrada nos Tribunais de Justiça do Ceará (TJCE) e São Paulo (TJSP). Formada pelo Instituto de Perícias Forenses, com especialização em laudos judiciais e extrajudiciais, investigação cibernética e LGPD. Atuou como Analista de Segurança da Informação.",
      borda: "rosa"
    },
    {
      foto: EduardoTavares,
      nome: "Eduardo Tavares de Oliveira",
      descricao: "Experiência prática em empreendedorismo, incluindo a gestão de um aplicativo de transporte e uma escola de idiomas, com destaque em crescimento, vendas e desenvolvimento de talentos.",
      borda: "azul"
    },
    {
      foto: Eloi,
      nome: "Eloi Teles de Morais Neto",
      descricao: "Faixa Azul (5/7) da Bukan School Of Krav-Maga, a primeira escola criada pelo próprio fundador da arte marcial. Tenho 11 anos de experiência e me tornei instrutor da Bukan em 2024, após ser convidado pelo Grão Mestre Yaron Lichtenstein.",
      borda: "laranja"
    },
    {
      foto: Emily,
      nome: "Emilly Tallita",
      descricao: "Graduada em Gestão da Informação pela Universidade Federal de Pernambuco e atua na área de Cibersegurança há 2 anos. Atualmente Analista de Gestão de Vulnerabilidades e fundadora da comunidade GarotaCibernetica, onde ajuda iniciantes, principalmente mulheres, a entrarem na área.",
      borda: "verde"
    },
    {
      foto: Eneri,
      nome: "Eneri D'Angelis",
      descricao: "Recifense, formada em Engenharia da Computação pela UFPE. Minha jornada começou ainda na universidade, passando por consultoria, startups, mercado financeiro, um unicórnio brasileiro, e hoje atuo como engenheira de software em uma startup internacional de Nova Iorque.",
      borda: "rosa"
    },
    {
      foto: Eraldo,
      nome: "Eraldo Henrique Maia",
      descricao: "Profissional com mais de 7 anos de experiência na área de dados e 3 anos de expertise na Google Cloud Platform (GCP). Atuei como engenheiro de dados no Grupo Boticário e possuo formação em Tecnologia em Mecatrônica pelo IFCE, além de uma pós-graduação em Big Data.",
      borda: "verde"
    },
    {
      foto: FelipeArrais,
      nome: "Felipe Barreto Arrais",
      descricao: "Ilustrador e Cineasta. Escolhido pela Adobe Brasil como artista para se inspirar em 2023, já realizou ilustrações para livro e participou de diversos eventos. Atualmente é estudante de Cinema e Audiovisual pela Universidade Federal do Ceará.",
      borda: "laranja"
    },

    {
      foto: Geovanna,
      nome: "Geovanna da Silva Pedroso",
      descricao: "Formada em Marketing pela USP e atualmente cursa engenharia da computação na UNIVESP. Já trabalhou em uma big tech por quase 2 anos e migrou para a área de criação em 2021.",
      borda: "verde"
    },
    {
      foto: Jessica,
      nome: "Jéssica Figueiredo",
      descricao: "Professora do curso de Ciência da Computação da UERN, onde atua em regime de dedicação exclusiva. É Mestre em Sistemas e Computação (UFRN) e doutoranda em Ensino (IFRN). Pesquisa sobre Inteligência Artificial, Educação e Inclusão Digital, além de coordenar projetos de extensão voltados para inovação e empoderamento feminino.",
      borda: "azul"
    },
    {
      foto: JoseWesley,
      nome: "José Wesley Gonçalves",
      descricao: "Bacharel em Ciências da Computação, trabalha atualmente como desenvolvedor Back-End e é um entusiasta do Linux.",
      borda: "rosa"
    },
    {
      foto: Liana,
      nome: "Liana Carvalho",
      descricao: "Mestre em Ciência da Computação e Engenharia de Software pela UFC. Líder de Qualidade com mais de 8 anos de experiência em garantia de qualidade e testes automatizados. Atualmente, lidera toda a esteira de engenharia de software em um nicho IoT em nuvem, integrando plataforma web, dispositivos em campo e dados em larga escala.",
      borda: "verde"
    },
    {
      foto: LuisFranklin,
      nome: "Luis Antonio Viana Franklin",
      descricao: "Engenheiro de Dados e Machine Learning com mais de 3 anos de experiência em IA aplicada à Indústria 4.0. Especialista em pipelines de dados escaláveis (AWS, Delta Lake, Spark), MLOps e integrações em nuvem. Atualmente trabalha como Engenheiro de Machine Learning na Artemis.",
      borda: "azul"
    },
    {
      foto: MarcosAlencar,
      nome: "Marcos de Alencar Carvalho",
      descricao: "Formado em Ciência da Computação pela UFC - Campus Russas, atua desde 2019 em desenvolvimento de software, com foco em backend. Tem vivência em Arquiteturas de Software, CI/CD, versionamento e já liderou equipes como Tech Lead. Hoje é Desenvolvedor Sênior.",
      borda: "rosa"
    },
    {
      foto: MarcosLaueber,
      nome: "Marcos Laelber",
      descricao: "Engenheiro de Software pela UFC Russas e MBA em Vendas e Negócios. Amante da tecnologia, eterno vendedor e entusiasta de Inteligência Artificial. Atua criando soluções que unem gestão, programação e IA para transformar negócios e pessoas.",
      borda: "laranja"
    },
    {
      foto: Saulo,
      nome: "Saulo José",
      descricao: "Ex-aluno da UFC Russas, vendeu mais de 3 mil iPhones no varejo. Trilhou o caminho do comércio à tecnologia e hoje é fundador da Escola Programe e da Nexa IA, já formou alunos em programação e escalou vendas usando inteligência artificial.",
      borda: "verde"
    },
    {
      foto: MarcusVinicius,
      nome: "Marcus Vinicius Beserra Araújo",
      descricao: "Profissional de Ethical Hacking, certificado pela INE e EXIN, pós-graduado em segurança da informação e Neuropsicologia.",
      borda: "azul"
    },
    {
      foto: MatheusBischof,
      nome: "Matheus Bischof dos Santos",
      descricao: "Especialista em gestão de pessoas, tecnologia e inovação. Engenheiro de produção formado pela Universidade Estadual de Campinas e pós-graduado pela Universidade de São Paulo. Atualmente, nos Estados Unidos, é aluno de Mestrado em Administração e Negócios na Kellogg School of Management.",
      borda: "rosa"
    },
    {
      foto: MatheusCapelo,
      nome: "Matheus Capelo",
      descricao: "Foi aluno da UFC campus Russas de 2019.2 a 2023.2 no curso de Engenharia de Software. Fez um estágio como analista de dados na Data Büsiness e  trabalha no setor de BI da maior agência de publicidade do estado.",
      borda: "laranja"
    },
    {
      foto: Pitagoras,
      nome: "Pitágoras Graça Martins",
      descricao: "Docente da UFC, com Mestrado em Engenharia de Teleinformática – Foco em Sistemas Distribuídos, Segurança e Alta Disponibilidade pela UFC. Atua como docente, pesquisador e gestor acadêmico na Universidade Federal do Ceará desde 2002.",
      borda: "azul"
    },
    {
      foto: Rebeca,
      nome: "Rebeca Alves Sousa",
      descricao: "UX/UI Designer na Med.IQ. Formada em Sistemas para Internet e pós-graduada em Engenharia de Software e em Product Management, possui experiência em empresas no Brasil e no exterior. Atualmente, também é professora de Design System na FIAP.",
      borda: "verde"
    },
    {
      foto: Robson,
      nome: "Robson Sousa Cruz Junior",
      descricao: "Responsável pelo desenvolvimento de ferramentas para cadastro em massa de produtos, atuando também na liderança do setor de Inteligência Artificial.",
      borda: "laranja"
    },
    {
      foto: Rosineide,
      nome: "Rosineide da Paz",
      descricao: "Professora docente da Universidade Federal Do Ceará.",
      borda: "azul"
    },
    {
      foto: Sabrina,
      nome: "Sabrina Silveira Oliveira",
      descricao: "Desenvolvedora FullStack e Mobile. Atualmente sou desenvolvedora mobile no Insight Data Science Lab, estou finalizando a graduação em Ciência da Computação na UFC e faço parte da comunidade PyLadies Fortaleza",
      borda: "rosa"
    },
    {
      foto: "",
      nome: "Alynne Ferreira Sousa",
      descricao: "Desenvolvedora apaixonada por Python, tem experiência com IIoT (Internet das Coisas Industrial), conectividade para aviônicos e desenvolvimento web. É Engenheira da Computação pelo IFCE. Contribuiu na organização de algumas Python Brasil e Nordeste.",
      borda: "verde"
    },
    {
      foto: Sofia,
      nome: "Sofia Rodrigues Santiago",
      descricao: "Graduanda em Jogos Digitais pelo Centro Universitário Farias Brito (FB Uni), em Fortaleza, e também cursa Jogos Digitais na modalidade EAD pelo Centro Universitário Belas Artes de São Paulo.",
      borda: "laranja"
    },
    {
      foto: Ticiana,
      nome: "Ticiana Alves",
      descricao: "Formada em Recursos Humanos, atuo há mais de 10 anos na área de RH, focando nos últimos 5 anos em recrutamento especializado de TI e consultoria de carreiras. Atualmente sou Head de Recrutamento e Seleção de tecnologia na MadeinWeb.",
      borda: "azul"
    },
    {
      foto: Veridiano,
      nome: "Veridiano Ferreira de Carvalho",
      descricao: "Tradutor e Intérprete de Libras e professor de Libras. Graduado em Letras Libras pela Universidade Federal de Santa Catarina (UFSC) e pós-graduado em tradução e interpretação em Libras.",
      borda: "rosa"
    },
    // {
    //   foto: "",
    //   nome: "Rosineide da Paz",
    //   descricao: "Professora docente da Universidade Federal Do Ceará.",
    //   borda: "azul"
    // },
  
  ]
  return (
    <>
      <Header />
      <main className={Styles.main}>
        <div className={Styles.header}>
          <p>Início {">"} <span>Palestrantes</span></p>
        </div>
        <div className={Styles.background}>
          <p>tecnologia <span>&</span> networking <span>&</span> aprendizagem</p>
        </div>

        <div className={Styles.content}>
          <h1>Conheça nossos palestrantes</h1>
          <p>Nossos palestrantes são profissionais e pesquisadores que estão na vanguarda
            de suas áreas, trazendo o que há de mais relevante e inovador em tecnologia.
            Prepare-se para insights práticos e visões de futuro, compartilhadas por quem realmente
            faz a diferença no mercado e na academia.</p>
        </div>

        <div className={Styles.cards}>
          {palestrantes.map((palestrante, index) => (
            <CardPalestrante
              key={index}
              foto={palestrante.foto}
              nome={palestrante.nome}
              descricao={palestrante.descricao}
              borda={palestrante.borda}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}