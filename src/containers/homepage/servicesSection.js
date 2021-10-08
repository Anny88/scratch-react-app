import React from "react";
import styled from "styled-components/macro";
import { Element } from 'react-scroll';
import {SectionTitle} from "../../components/sectionTitle";
import {Marginer} from "../../components/marginer";
import {OurService} from "../../components/ourService";
import SoftwareDevImg from "../../assets/illustrations/SoftwareDev.svg";
import MobileImg from "../../assets/illustrations/Mobile.svg";
import QualityImg from "../../assets/illustrations/Quality.svg"

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
            <Marginer direction="vertical" margin="3em" />
            <OurService title="Fully integrated services" imgUrl={SoftwareDevImg} description="We build ad deliver and bla blablablablablablabla bla bla blabla blabla" />
            <OurService title="Mobile optimized" imgUrl={MobileImg} isReversed description="We build ad deliver and bla blablablablablablabla bla bla blabla blabla" />
            <OurService title="Quality is our priority" imgUrl={QualityImg}  description="We build ad deliver and bla blablablablablablabla bla bla blabla blabla" />
        </ServicesContainer>
    );
}
