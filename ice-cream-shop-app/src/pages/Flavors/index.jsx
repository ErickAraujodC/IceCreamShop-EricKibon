import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import './style.css'


const Flavors = () =>{
    return(
        <div className="flavors">
            <Header/>
            <div className="limit-width-flavors">
                <div className="banner-flavors">

                    <h1>Nossos Sabores</h1>
                </div>

                <div className="flavors-content">
                    <h2>SABORES DE SORVETE</h2>

                    <div className="cards">
                        <div className="box-ice-cream">
                            <img src="../../src/assets/images/sabor-oreo.png" alt="sorvete sabor oreo"/>
                            <h3>Sorvete de Oreo</h3>
                            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                        </div>

                        <div className="box-ice-cream">
                            <img src="../../src/assets/images/sabor-pistache.png" alt="sorvete sabor pistache"/>
                            <h3>Sorvete Pistache</h3>
                            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                        </div>
                        <div className="box-ice-cream">
                            <img src="../../src/assets/images/sabor-cookies-avela.png" alt="sorvete sabor cookie com avelã"/>
                            <h3>Sorvete Cookies & Avelã</h3>
                            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                        </div>
                        <div className="box-ice-cream">
                            <img src="../../src/assets/images/sorbet-kiwi.png" alt="sorbet sabor kiwi"/>
                            <h3>Sorvete de Kiwi</h3>
                            <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                        </div>
                        <div className="box-ice-cream">
                            <img src="../../src/assets/images/sorbet-morango.png" alt="sorbet sabor morango"/>
                            <h3>Sorvete de Morango</h3>
                            <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                        </div>
                        <div className="box-ice-cream">
                            <img src="../../src/assets/images/sorbet-limao.png" alt="sorbet limão siciliano"/>
                            <h3>Sorvete de Limão Siciliano</h3>
                            <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                        </div>
                  
                        
                    </div>
                </div>
            </div>
            <Footer/>

        </div>
    )
}

export default Flavors;