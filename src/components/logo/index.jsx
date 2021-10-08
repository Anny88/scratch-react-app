import React from "react";
import styled, {css} from "styled-components";
import {theme} from "../../theme";
import LogoPic from '../../assets/logos/logo.png';


const LogoContainer = styled.div`
  display: flex;
  flex-direction: ${({ inline }) => inline ? 'row' : 'column' };
  align-items: center;
`;

const LogoImg = styled.img`
  width: 8rem;
  height: 8rem;
  
  ${({ inline }) => inline && css`
    width: 24px;
    height: 24px;
    margin-right: 6px;
  `};
`;

const LogoText = styled.div`
  margin-top: ${({ inline }) => inline ? '6px' : '0' }
  font-size: ${({ inline }) => inline ? '18px' : '40px' };
  color: ${({ inline }) => inline ? '#fff' : theme.primary };
  font-weight: bold;
`;

export function Logo({ inline }) {
    return (
        <LogoContainer inline={inline}>
            <LogoImg inline={inline} src={LogoPic}/>
            <LogoText inline={inline}>Booma</LogoText>
        </LogoContainer>
    );
}
