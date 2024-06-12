import React from "react";
import slide1 from './slides/agora_photo.jpg';
import slide2 from './slides/image_temp1.jpg';
import slide3 from './slides/portugues.jpg';
import slide4 from './slides/ufrn.jpg';
import './styles.css';

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 1,
        };
        this.interval = null;
      }
    
      componentDidMount() {
        this.startInterval();
      }
    
      componentWillUnmount() {
        clearInterval(this.interval);
      }
    
      startInterval() {
        this.interval = setInterval(() => {
          this.setState((prevState) => ({
            count: prevState.count > 3 ? 1 : prevState.count + 1,
          }), () => {
            document.getElementById("radio" + this.state.count).checked = true;
          });
        }, 8000);
      }
    
      handleMouseMove = () => {
        clearInterval(this.interval);
      }
    
      handleMouseOut = () => {
        this.startInterval();
      }
    render() {
        return (
            <section id="slider" onMouseMove={this.handleMouseMove} 
            onMouseOut={this.handleMouseOut}>
                <div className="slides">
                    <input type="radio" name="radio-btn" id="radio1" defaultChecked/>
                    <input type="radio" name="radio-btn" id="radio2"/>
                    <input type="radio" name="radio-btn" id="radio3"/>
                    <input type="radio" name="radio-btn" id="radio4"/>
                    <div className="slide about">
                        <img src={slide1} className="image1" alt="Frente do Ágora. Foto: Wallacy Medeiros – CPI/Comunica"/>
                        <div className="overlayShadowForImages">
                            <div className="title">Conheça mais sobre o Instituto Ágora
                                <p className="titleAbout">O Instituto tem como objetivo atuar de forma decisiva para a internacionalização da UFRN, aperfeiçoando os conhecimentos de línguas e culturas estrangeiras dos seus alunos, docentes e pessoal técnico adminstrativo e oferecendo o ensino de língua portuguesa e cultura brasileira ao alunos estrangeiros da comunidade interna e externa.</p>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <img src={slide2} className="image2" alt="Imagem temporária"/>
                        <div className="overlayShadowForImages">
                            <h1 className="title">Cursos de formação complementar
                                <p className="titleAbout">No Instituto Ágora você pode se inscrever para os nossos cursos de formação complementar em línguas como Inglês, Francês, Espanhol, Alemão, Língua Brasileira de Sinais (Libras) e Latim. Os cursos são ofertados para a modalidade presencial sendo eles de 60 horas/aula, tendo duração de um semestre na UFRN. Acesse o edital para mais informações.</p>
                            </h1>
                        </div>
                    </div>
                    <div className="slide">
                        <img src={slide3} className="image3" alt="Português para estrangeiros"/>
                        <div className="overlayShadowForImages">
                            <h1 className="title">Sobre Português para estrangeiros
                                <p className="titleAbout">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus dolores eveniet exercitationem amet fuga, cupiditate illo expedita enim nesciunt dolorum nihil sint voluptatem commodi asperiores aut earum, officia dolorem consectetur!.</p>
                            </h1>
                        </div>
                    </div>
                    <div className="slide">
                        <img src={slide4} className="image4" alt="Português para estrangeiros"/>
                        <div className="overlayShadowForImages">
                            <h1 className="title">Olha só a ufrn q linda kk
                                <p className="titleAbout">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus dolores eveniet exercitationem amet fuga, cupiditate illo expedita enim nesciunt dolorum nihil sint voluptatem commodi asperiores aut earum, officia dolorem consectetur!.</p>
                            </h1>
                        </div>
                    </div>
                    <div className="navigationSlider">
                        <div className="auto-btn1"></div>
                        <div className="auto-btn2"></div>
                        <div className="auto-btn3"></div>
                        <div className="auto-btn4"></div>
                    </div>
                </div>
                <div className="manual-navigation">
                    <label htmlFor="radio1" className="manual-btn"></label>
                    <label htmlFor="radio2" className="manual-btn"></label>
                    <label htmlFor="radio3" className="manual-btn"></label>
                    <label htmlFor="radio4" className="manual-btn"></label>
                </div>
            </section>
        );
    }
}
export default Slider;