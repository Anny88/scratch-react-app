import React from "react";
import styled from "styled-components/macro";
import {Logo} from "../logo";
import {Button} from "../button";
import {Marginer} from "../marginer";

const NavBarContainer = styled.div`
  width: 100%;
  height: 46px;
  padding: 0 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BrandContainer = styled.div``;

const AccessibilityContainer = styled.div`
    display: flex;
`;

const LoginButton = styled(Button)`
    background-color: transparent;
  border: none;
  &:hover {
    background-color: transparent;
    border: none;
    color: rgb(200, 200, 200);
  }
`

export function NavBar() {
    return(<NavBarContainer>
        <BrandContainer>
            <Logo inline />
        </BrandContainer>
        <AccessibilityContainer>
            <Button small>Get started</Button>
            <Marginer direction="horozontal" margin="8px" />
            <LoginButton small>Log in</LoginButton>
        </AccessibilityContainer>
    </NavBarContainer>);
}
