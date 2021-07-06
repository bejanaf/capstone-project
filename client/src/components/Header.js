import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '../image/HeaderLogo.svg';

export default function Header() {
  return (
    <LogoStyle>
      <LogoIcon />
    </LogoStyle>
  );
}

const LogoStyle = styled.span`
  margin-right: 0.6rem;

  svg {
    vertical-align: sub;
    height: 2.5rem;
    width: 2.5rem;
    filter: drop-shadow(0rem 0rem 0.3rem var(--primary));
  }
`;
