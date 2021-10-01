import React from "react";
import styled from "styled-components";
import {theme} from "../../theme";

const ButtonWrapper = styled.button`
  padding: 7px 15px;
  border-radius: 5px;
  background-color: ${theme.primary};
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 220ms ease-out;
  
  &:hover {
    background-color: transparent;
    border: 2px solid ${theme.primary}
  }
`;

export function Button(props) {
    return <ButtonWrapper {...props} />
}
