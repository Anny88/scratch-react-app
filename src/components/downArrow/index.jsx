import React from "react";
import styled from "styled-components/macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {theme} from "../../theme";

const ArrowContainer = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: rgba(113, 113, 113, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 2px solid transparent;
   
  &:hover {
    border: 2px solid ${theme.primary};
    background-color: rgba(113, 113, 113);
  }
`;

const ArrowIcon = styled.div`
  margin-top: 3px;
  color: #fff;
  font-size: 26px;
`;

export function DownArrow() {
    return (<ArrowContainer>
        <ArrowIcon>
            <FontAwesomeIcon icon={faChevronDown} />
        </ArrowIcon>
    </ArrowContainer>);
}
