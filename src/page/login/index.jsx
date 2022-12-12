// import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
// import bannerImg from "../../assets/banner.png";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Container, TextContent, Title, TitleHighligtht } from './styles';

const Login = () => {
  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighligtht>
              Implemente <br />
            </TitleHighligtht>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresa mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em comunidad
            com os melhores experts.
          </TextContent>
          <Button title="Começar agora" variant="secondary" onClick={() => null}/>
        </div>
        <div>
          <Input placeholder="email"/>
        </div>
      </Container>
    </>
  );
};

export { Login };
