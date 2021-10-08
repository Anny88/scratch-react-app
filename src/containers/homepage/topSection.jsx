import React from "react";
import styled from "styled-components";
import Background from "../../assets/pictures/team-bg.png";
import {Logo} from "../../components/logo";
import {Marginer} from "../../components/marginer";
import {Button} from "../../components/button";
import {DownArrow} from "../../components/downArrow";
import {NavBar} from "../../components/navbar";

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  background: url(${Background});
  position: relative;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(53, 53, 53, 0.8);
`;

const MotivationalText = styled.h1`
  font-size: 33px;
  font-weight: 500;
  line-height: 1.4;
  color: #fff;
  margin: 0;
`

const DownArrowContainer = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
`;


export function TopSection() {
    return (
        <TopContainer>
            <BackgroundFilter>
                <NavBar />
                <Marginer direction="vertical" margin="8em" />
                <Logo />
                <Marginer direction="vertical" margin="4em" />
                <MotivationalText>Software development</MotivationalText>
                <MotivationalText>From the Best in the World</MotivationalText>
                <Marginer direction="vertical" margin="4em" />
                <Button>Get in contact</Button>
                <DownArrowContainer>
                    <DownArrow />
                </DownArrowContainer>
            </BackgroundFilter>
        </TopContainer>)
}
