import React from "react";
import { Feature, OptForm } from "../components";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { JumbotronContainer } from "../containers/jumbotron";
import { FaqsContainer } from "../containers/faq";

export default function Home() {
    return (
      <>
        <HeaderContainer>
          <Feature>
            <Feature.Title>Unlimited films, TV programs, and more.</Feature.Title>
            <Feature.SubTitle>Watch anywhere. Cancel at any time.+</Feature.SubTitle>
            <OptForm>
            <OptForm.Input placeholder="Enter Email Address" />
            <OptForm.Button>Try it Now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership
            </OptForm.Text>
          </OptForm>
          </Feature>
          
        </HeaderContainer>

        <JumbotronContainer />
        <FaqsContainer />
        <FooterContainer />
      </>
    );
}