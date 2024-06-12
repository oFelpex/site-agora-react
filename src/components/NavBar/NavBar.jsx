import React from "react";
import logoImg from '../../assets/agora_logo.png';
import './styles.css';
import instaIcon from '../../assets/icons - navigation_bar/instagram_icon.png';
import phoneIcon from '../../assets/icons - navigation_bar/phone_icon.png';
import emailIcon from '../../assets/icons - navigation_bar/gmail_icon.png';
import agoraAlert from '../../assets/backgroundAlert.jpg';

export class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false,
            alertVisible: false,
            alertMessage: ''
        };
        this.alertRef = React.createRef();
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
    }

    handleScroll = () => {
        const navbar = document.getElementById('orangeBarNavigationBar');
        if (window.scrollY >= 800) {
            navbar.style.position = 'absolute';
            navbar.style.top = '800px';
        } else {
            navbar.style.position = 'fixed';
            navbar.style.top = '0px';
        }
    }

    handleResize = () => {
        if (window.innerWidth > 768) {
            this.setState({ isMenuOpen: false });
        }
    }

    toggleMenu = () => {
        this.setState((prevState) => ({ isMenuOpen: !prevState.isMenuOpen }));
    }

    copyAgoraNumberOrEmail = (type) => {
        let textToCopy = '';
        let alertMessage = '';
        if (type === 1) {
            textToCopy = '(84) 3342-2257';
            alertMessage = 'Número copiado!';
        } else if (type === 2) {
            textToCopy = 'institutoagora2015@gmail.com';
            alertMessage = 'E-mail copiado!';
        }
        
        const tempInput = document.createElement('input');
        tempInput.value = textToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        this.setState({ alertVisible: false });
        setTimeout(() => {
            this.setState({ alertMessage, alertVisible: true }, () => {
        }, 10);
        });
    } 

    render() {
        return (
            <header id="orangeBarNavigationBar">
                <nav id="navigationMenuForMobile">
                    {this.state.isMenuOpen && (
                        <div className="overlayShadowForMenu" onClick={this.toggleMenu}></div>)}
                    <aside className={`menu ${this.state.isMenuOpen ? 'open' : 'close'}`}>
                        <a href="https://www.instagram.com/institutoagoraufrn/">
                            <h3 className="menu-item">Instagram</h3>
                        </a>
                        <h3 className="menu-item" onClick={() => this.copyAgoraNumberOrEmail(1)}>Telefone</h3>
                        <h3 className="menu-item" onClick={() => this.copyAgoraNumberOrEmail(2)}>E-mail</h3>
                        <h3 className="menu-item">Reservas</h3>
                    </aside>
                </nav>
                <div className="orangeBar">
                    <div className="agoraReserva">Ágora Reservas</div>
                </div>
                <nav className="navigationBar">
                    <img src={logoImg} className="logo" alt="Logo do Instituto Ágora - UFRN" />
                    <ul className="optionsNav">
                        <li>
                            <a href="https://www.instagram.com/institutoagoraufrn/" target="_blank" rel="noopener noreferrer">
                                <img src={instaIcon} className="insta" alt="Logo do Instagram" />
                            </a>
                            <div className="textMessengeForNavBar">Acessar o nosso instagram</div>
                        </li>
                        <li>
                            <img src={phoneIcon} className="phone" alt="Imagem de um telefone" onClick={() => this.copyAgoraNumberOrEmail(1)} />
                            <div className="textMessengeForNavBar">Clique para copiar o Telefone</div>
                        </li>
                        <li>
                            <img src={emailIcon} className="email" alt="Logo do g-mail" onClick={() => this.copyAgoraNumberOrEmail(2)} />
                            <div className="textMessengeForNavBar">Clique para copiar o E-mail</div>
                        </li>
                    </ul>
                    <button className={`buttonMenu ${this.state.isMenuOpen ? 'change' : ''}`} onClick={this.toggleMenu}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </button>
                </nav>
                {this.state.alertVisible && (
                    <div className="AgoraAlertContainer" ref={this.alertRef}>
                        <h2>{this.state.alertMessage}</h2>
                        <img src={agoraAlert} className="backgroundImageAgoraForAlert" alt="Alerta" />
                    </div>
                )}
            </header>
        );
    }
}

