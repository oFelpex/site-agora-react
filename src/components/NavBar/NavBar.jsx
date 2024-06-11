import React from "react";
import logoImg from '../../assets/agora_logo.png';
import './styles.css';
import instaIcon from '../../assets/icons - navigation_bar/instagram_icon.png';
import phoneIcon from '../../assets/icons - navigation_bar/phone_icon.png';
import emailIcon from '../../assets/icons - navigation_bar/gmail_icon.png';

class NavBar extends React.Component {
    render() {
        return (
            <header id="orangeBarNavigationBar">
                <nav id="navigationMenuForMobile">
                    <div className="overlayShadowForMenu" onclick="closeMenuOverlayClicked()"></div>
                    <aside className="menu">
                        <a href="https://www.instagram.com/institutoagoraufrn/">
                            <h3 className="menu-item">Instagram</h3>
                        </a>
                        <h3 className="menu-item" onclick="copyAgoraNumberOrEmail(1)">Telefone</h3>
                        <h3 className="menu-item" onclick="copyAgoraNumberOrEmail(2)">E-mail</h3>
                        <h3 className="menu-item">Reservas</h3>
                    </aside>
                </nav>
                <div className="orangeBar">
                    <div className="agoraReserva">Ágora Reservas</div>
                </div>
                <nav className="navigationBar">
                    <img src={logoImg} className="logo" alt="Logo do Instituto Ágora - UFRN"/>
                    <ul className="optionsNav">
                        <li>
                            <a href="https://www.instagram.com/institutoagoraufrn/" target="_blank">
                                <img src={instaIcon} class="insta" alt="Logo do Instagram"/>
                                </a>
                            <div className="textMessengeForNavBar">Acessar o nosso instagram</div>
                        </li>
                        <li>
                            <img src={phoneIcon} className="phone" alt="Imagem de um telefone" onclick="copyAgoraNumberOrEmail(1)"/>
                            <div className="textMessengeForNavBar">Clique para copiar o Telefone</div>
                        </li>
                        <li>
                            <img src={emailIcon} className="email" alt="Logo do g-mail" onclick="copyAgoraNumberOrEmail(2)"/>
                            <div className="textMessengeForNavBar">Clique para copiar o E-mail</div>
                        </li>
                    </ul>
                    <button className="buttonMenu" onclick="changeButtonMenu(this)">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </button>
                </nav>
            </header>
        );
    }
}

export default NavBar;