import React from "react";
import './style.css'

const Footer = () =>{
    return(
        <footer>
            <div className="footer-content limit-width">
                <div className="logo-contacts">
                    <img className="logo-footer" src="../../src/assets/images/logo.png" alt="Logo" />
                    <div className="contacts">
                        <h1>Endereço</h1>
                        <p>
                            Av. Bernardino de Campos, 98, São Paulo-SP 12345-678
                        </p>
                    </div>
                
                    <div className="contacts">
                        <h1>Contato</h1>
                        <p>
                            info@meusite.component <br />
                            Tel: (11) 3456-7890
                        </p>
                    </div>
                    <div className="contacts">
                        <h1>Horários</h1>
                        <p>
                            ABERTO TODOS OS DIAS <br />
                            10:00 - 22:00
                        </p>
                    </div>
                </div>
                <div className="footer-copyright">
                    <p>
                        Gelateria. Desenvolvido por
                        <span> Erick Araujo de Carvalho</span>
                    </p>
                </div>
            </div>

        </footer>
    )
}

export default Footer;