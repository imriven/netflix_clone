import React from "react";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { JumbotronContainer } from "../containers/jumbotron";
import { FaqsContainer } from "../containers/faq";

export default function Home() {
    return (
      <>
        <HeaderContainer>
        <JumbotronContainer />
        <FaqsContainer />
        <FooterContainer />
        </HeaderContainer>
      </>
    );
}