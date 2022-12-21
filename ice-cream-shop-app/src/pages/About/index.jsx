import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import img_sobre from "../../assets/images/sobre-image.jpg"
import img_sorveteria from "../../assets/images/sorveteria.jpg"
import './style.css'

const About = () =>{
    return(
        <div className="about">
            <Header/>
            <div className="limit-width-about">
                <div className="banner-about">

                    <h1>A GELATARIA</h1>
                </div>

                <div className="container-about">
                    <div className="limit-width">
                        <h2>Sobre Nós</h2>

                        <span>Nós simplesmente amamos sorvete!</span>
                        <p>
                            Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada
                            sorvete produzido. Fazemos o melhor sorvete para os nossos
                            clientes e gostamos de receber elogios. Estamos operando desde
                            2009 com as melhores matérias-primas para a produção final do
                            sorvete. Vendemos tanto para varejo como para atacado.
                        </p>
                        <p>
                            Nossos clientes podem comprar os nossos sorvetes e degustar na
                            nossa loja ou levar para sua residência e aproveitar junto com a
                            família. Também vendemos para estabelecimentos e criamos eventos
                            como festa de aniversário, formaturas e eventos empresariais. Para
                            contratar os nossos serviços, basta entrar em contato conosco.
                            Iremos proporcionar o melhor atendimento e os melhores produtos
                            para você fazer a sua festa mais saborosa, com o melhor sorvete da
                            cidade.
                        </p>
                    </div>
                </div>

                <div className="container-img">
                    <div>
                        <img src={img_sobre} alt="Pessoas tomando sorvete" />
                        <img src={img_sorveteria} alt="Sorveteria" />                      
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About;