import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt='dtmoney' />
        <button type='button'>New transaction</button>
      </Content>
    </Container>
  );
}
