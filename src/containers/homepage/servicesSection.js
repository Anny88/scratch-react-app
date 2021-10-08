import React from "react";
import styled from "styled-components/macro";
import { Element } from 'react-scroll';
import {SectionTitle} from "../../components/sectionTitle";

const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 0;
`;

export function ServicesSection() {
    return (
        <ServicesContainer name="servicesSection">
            <SectionTitle>Best Quality Software</SectionTitle>
        </ServicesContainer>
    );
}
