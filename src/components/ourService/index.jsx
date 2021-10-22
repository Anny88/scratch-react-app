import React from "react";
import styled from "styled-components/macro";
import {theme} from "../../theme";

const ServiceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ isReversed }) => isReversed ? 'row-reverse' : 'row' };
  margin-bottom: 4em;
`;

const StyledImg = styled.img`
  width: 20em;
  height: 15em;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 65%;
`;

const Title = styled.h2`
  color: ${theme.fontDefault};
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 6px;
`;

const Details = styled.p`
  color: #7a7a7a;
  font-size: 18px;
  text-align: center;
  max-width: 65%;
`;

export function OurService({ title, description, imgUrl, isReversed }) {
    return <ServiceContainer isReversed={isReversed}>
        <DescriptionContainer>
            <Title>{title}</Title>
            <Details>{description}</Details>
        </DescriptionContainer>
        <StyledImg src={imgUrl} />
    </ServiceContainer>
}

