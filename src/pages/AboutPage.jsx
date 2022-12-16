import React from 'react'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import Ferrari from "../imgs/car-inside2.jpg"
import About from "../imgs/about.jpg";



function AboutPage() {
  return (
    <div>
        <Menu />
        <img src={Ferrari} alt="car-banner" className="container mx-auto w-screen h-72 grayscale" />
        <div>
        <p className="container mx-auto w-screen text-4xl font-bold mt-10">Sobre Nós</p>
        <div className="container w-full mx-auto flex mt-8">
          <p className="container mx-auto w-screen text-2xl pt-2 leading-relaxed"> No mercado Automóvel desde 2022, dispomos de uma vasta gama de automóveis, desde utilitários passando por todo-o-terreno, desportivos, de alta gama, bem como clássicos.
          <br/>
          Apostamos na excelência dos nossos profissionais e na qualidade dos nossos automóveis semi-novos e usados de alta gama.
          <br/>
          Primamos pelo contacto personalizado, onde encaramos cada pessoa e cada sonho, com seriedade, partilhando com ela os valores que defende.
          <br/>
          Faça parte do nosso vasto leque de clientes Stand Carrocinhas, onde poderá contar com o rigor, profissionalismo e simpatia da nossa equipa.
          <br/>
          Navegue pelo nosso stock e não hesite em contactar-nos.</p>
          <img src={About} alt="car-inside" className="w-1/3" />
          </div>
        <p className="container mx-auto w-screen text-2xl pt-2 leading-relaxed">Stand Carrocinha é especializado na compra e venda de viaturas sport, prestige e premium usados, de todas as marcas. Instalado em Amarante, proxima da saida da A4.</p>
        </div>
        
        <Footer />
    </div>
  )
}

export default AboutPage