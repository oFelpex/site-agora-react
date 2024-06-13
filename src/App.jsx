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

  handleResize = () => {
    if (window.innerWidth > 768) {
        this.setState({ isMobileScreen: false });
    } else {
      this.setState({ isMobileScreen: true });
    }
  }

  render() {
    console.log(this.state.isMobileScreen);
    return (
      <>
        {this.state.isMobileScreen ? <NavBarMobile /> : <NavBar />}

        <Slider title1="Conheça mais sobre o Instituto Ágora"
          titleAbout1="O Instituto tem como objetivo atuar de forma decisiva para a internacionalização da UFRN, aperfeiçoando os conhecimentos de línguas e culturas estrangeiras dos seus alunos, docentes e pessoal técnico adminstrativo e oferecendo o ensino de língua portuguesa e cultura brasileira ao alunos estrangeiros da comunidade interna e externa."
          title2="Cursos de formação complementar"
          titleAbout2="No Instituto Ágora você pode se inscrever para os nossos cursos de formação complementar em línguas como Inglês, Francês, Espanhol, Alemão, Língua Brasileira de Sinais (Libras) e Latim. Os cursos são ofertados para a modalidade presencial sendo eles de 60 horas/aula, tendo duração de um semestre na UFRN. Acesse o edital para mais informações."
          title3="Sobre Português para estrangeiros"
          titleAbout3="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus dolores eveniet exercitationem amet fuga, cupiditate illo expedita enim nesciunt dolorum nihil sint voluptatem commodi asperiores aut earum, officia dolorem consectetur!"
          title4="Não sei de poha nenhuma mds"
          titleAbout4="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus dolores eveniet exercitationem amet fuga, cupiditate illo expedita enim nesciunt dolorum nihil sint voluptatem commodi asperiores aut earum, officia dolorem consectetur!."
          
        />
      </>
    );
  }
}

export default App;
