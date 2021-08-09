import React from "react";
import styled from "styled-components";
import {theme} from "../../theme";
import LogoPic from '../../assets/logos/logo.png';

const LogoImg = styled.img`
  width: 8rem;
  height: 8rem;
  display: flex;
  flex-direction: column;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoText = styled.div`
  margin-top: 6px;
  font-size: 40px;
  color: ${theme.primary};
  font-weight: bold;
`;

export function Logo() {
    return (<LogoContainer>
        <LogoImg src={LogoPic}/>
        <LogoText>Booma</LogoText>
    </LogoContainer>);
}
