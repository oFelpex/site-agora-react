import React from "react";
import logoImg from '../../assets/agora_logo.png';
import './styles.css';
import agoraAlert from '../../assets/backgroundAlert.jpg';

export class NavBarMobile extends React.Component {
    constructor() {
        super();
        this.state = {
            isMenuOpen: false,
            alertVisible: false,
            alertMessage: ''
        };
        this.alertRef = React.createRef();
        this.inputRef = React.createRef();
    }

    handleResize = () => {
        if (window.innerWidth > 1000) {
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
            <header id="navBarMobile">
                <nav id="navigationMenuForMobile">
                    <div className = {`overlayShadowForMenu ${this.state.isMenuOpen ? 'visible' : ''}`} onClick={this.toggleMenu}></div>
                    <aside className = {`menu ${this.state.isMenuOpen ? 'open' : ''}`}>
                        <a href="https://www.instagram.com/institutoagoraufrn/">
                            <h3 className="menu-item">Instagram</h3>
                        </a>
                        <h3 className="menu-item" onClick={() => this.copyAgoraNumberOrEmail(1)}>Telefone</h3>
                        <h3 className="menu-item" onClick={() => this.copyAgoraNumberOrEmail(2)}>E-mail</h3>
                        <h3 className="menu-item">Reservas</h3>
                    </aside>
                </nav>
                <nav className="navigationBar">
                    <button className={`buttonMenu ${this.state.isMenuOpen ? 'change' : ''}`} onClick={this.toggleMenu}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </button>
                    <img src={logoImg} className="logo" alt="Logo do Instituto Ágora - UFRN" />
                </nav>
                {this.state.alertVisible && (
                    <div className="AgoraAlertContainer" ref={this.alertRef}>
                        <h2>{this.state.alertMessage}</h2>
                        <img src={agoraAlert} className="backgroundImageAgoraForAlert" alt="Alerta" />
                    </div>
                )}
            </header>
        );
    };
};