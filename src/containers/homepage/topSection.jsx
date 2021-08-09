import React from "react";
import styled from "styled-components";
import Background from "../../assets/pictures/team-bg.png";
import {Logo} from "../../components/logo";

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  background: url(${Background});
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(53, 53, 53, 0.8);
`;

export function TopSection() {
    return (
        <TopContainer>
            <BackgroundFilter>
                <Logo />
            </BackgroundFilter>
        </TopContainer>)
}
