import React from "react";
import './styles/App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {Slider} from "./components/Slider/Slider";
import {NavBarMobile} from "./components/NavBarMobile/NavBarMobile";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        isMobileScreen: false,
        alertVisible: false,
        alertMessage: '',
        textForSlide: [
            {id: '1', title: "Conheça mais sobre o Instituto Ágora", about: "O Instituto tem como objetivo atuar de forma decisiva para a internacionalização da UFRN, aperfeiçoando os conhecimentos de línguas e culturas estrangeiras dos seus alunos, docentes e pessoal técnico adminstrativo e oferecendo o ensino de língua portuguesa e cultura brasileira ao alunos estrangeiros da comunidade interna e externa."}, 
            {id: '2', title: "Cursos de formação complementar", about: "No Instituto Ágora você pode se inscrever para os nossos cursos de formação complementar em línguas como Inglês, Francês, Espanhol, Alemão, Língua Brasileira de Sinais (Libras) e Latim. Os cursos são ofertados para a modalidade presencial sendo eles de 60 horas/aula, tendo duração de um semestre na UFRN. Acesse o edital para mais informações."}, 
            {id: '3', title: "Sobre Português para estrangeiros", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus dolores eveniet exercitationem amet fuga, cupiditate illo expedita enim nesciunt dolorum nihil sint voluptatem commodi asperiores aut earum, officia dolorem consectetur!"},
            {id: '4', title: "Não sei de poha nenhuma mds", about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus dolores eveniet exercitationem amet fuga, cupiditate illo expedita enim nesciunt dolorum nihil sint voluptatem commodi asperiores aut earum, officia dolorem consectetur!."},
        ]
    };
    this.alertRef = React.createRef();
    this.inputRef = React.createRef();
}
  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    window.innerWidth > 1000 ? this.setState({ isMobileScreen: false }) : this.setState({ isMobileScreen: true });
  }

  render() {
    console.log(this.state.isMobileScreen);
    return (
      <>
        {this.state.isMobileScreen ? <NavBarMobile /> : <NavBar />}

        <Slider title={this.state.textForSlide.map(item => item.title)}
          about={this.state.textForSlide.map(item => item.about)}

        />
      </>
    );
  }
}

export default App;
