import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import banner_sabores from "../../assets/images/banner-sabores.jpg"
import banner_eventos from "../../assets/images/sobre-image.jpg"
import banner_sobre from "../../assets/images/eventos-image.jpg"
import './style.css'

const Home = () =>{
    return(
        
        <div className="home">
            <Header/>
            <div className="limit-width-home">
                <div className="banner-home">
                    <h1>SORVETE ARTESANAL <br /> EricKibon</h1>
                </div>
                <div className="box-home">
                    <img className="box-img" src={banner_sabores} alt="Imagens Sorvetes" />
                    <div className="box-txt">
                        <h2>Nossos Sabores</h2>
                        <p>Novos e deliciosos!</p>
                        <p>
                            Sorvete bom é aquele feito com os melhores ingredientes! Aqui na
                            gelateria todos os nossos produtos são naturais, à base de
                            frutas e sem nenhum conservante! Também temos opções sem lactose
                            e sem açúcar. Venha conhecer e perceber que tem como o sorvete
                            ser delicioso e saudável ao mesmo tempo!
                        </p>
                    </div>
                </div>
                <div className="box-home">
                    <div className="box-txt">
                        <h2>NOSSOS EVENTOS</h2>
                        <p>Delicias com sorvete!</p>
                        <p>
                            Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui
                            prontinhos para te atender e oferecer os melhores eventos com os melhores
                            sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.
                        </p>
                    </div>
                    <img className="box-img" src={banner_sobre} alt="Imagens Sorvetes" />

                </div>
                <div className="box-home">
                    <img className="box-img" src={banner_eventos} alt="Imagens Sorvetes" />
                    <div className="box-txt">
                        <h2>SOBRE NÓS</h2>
                        <p>Alegria em cada casquinha!</p>
                        <p>
                            Venha tomar o melhor sorvete da região aqui com a gente! Nós
                            estamos há anos no mercado produzindo o que tem de melhor para o
                            nosso cliente e você não pode ficar fora dessa. Venha nos fazer
                            uma visita e aproveite o melhor atendimento e o melhor sorvete
                            da cidade.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;