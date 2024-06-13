import React from "react";
import slide1 from './slides/agora_photo.jpg';
import slide2 from './slides/image_temp1.jpg';
import slide3 from './slides/portugues.jpg';
import slide4 from './slides/ufrn.jpg';
import './styles.css';

export class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 1 };
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
                            <div className="title">{this.props.title1}
                                <p className="titleAbout">{this.props.titleAbout1}</p>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <img src={slide2} className="image2" alt="Imagem temporária"/>
                        <div className="overlayShadowForImages">
                            <h1 className="title">{this.props.title2}
                                <p className="titleAbout">{this.props.titleAbout2}</p>
                            </h1>
                        </div>
                    </div>
                    <div className="slide">
                        <img src={slide3} className="image3" alt="Português para estrangeiros"/>
                        <div className="overlayShadowForImages">
                            <h1 className="title">{this.props.title3}
                                <p className="titleAbout">{this.props.titleAbout3}</p>
                            </h1>
                        </div>
                    </div>
                    <div className="slide">
                        <img src={slide4} className="image4" alt="Português para estrangeiros"/>
                        <div className="overlayShadowForImages">
                            <h1 className="title">{this.props.title4}
                                <p className="titleAbout">{this.props.titleAbout4}</p>
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