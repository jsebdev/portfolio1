import React from 'react'
import { StackItem } from 'ui/components/StackItem'
import { AS } from 'ui/styledComponents/AStyled'
import { BlogBlockS, BlogBlockTextS, BlogFrontImage, StackContainerS } from 'ui/styledComponents/BlogStyled'
import { BigStoryChatbotS, ParagraphS } from 'ui/styledComponents/paragraphStyled'
import { SectionHeaderS, TitledSectionS } from 'ui/styledComponents/SectionStyled'
import { MainTitleS, SectionTitleS } from 'ui/styledComponents/TitleStyled'
import { BlogImage } from 'ui/components/BlogImage'
import { Helmet } from 'react-helmet'

export const ChatbotNufi = () => {
  return (
    <>
      <Helmet>
        <title>Chatbot @ Nufi</title>
      </Helmet>
      <BlogFrontImage image="/images/front_image_chatbot.jpg" />
      <MainTitleS themeColor='sectionTitle'>Background Check Whatsapp Chatbot @ Nufi</MainTitleS>
      <BlogBlockS>
        <ParagraphS>Whatsapp chatbot that allows verifying the identity of individuals in under 8 minutes.</ParagraphS>
      </BlogBlockS>
      <TitledSectionS>
        <SectionHeaderS>
          <SectionTitleS themeColor='sectionTitle'>Technology Stack</SectionTitleS>{' '}
        </SectionHeaderS>
        <StackContainerS>
          <StackItem href="https://nodejs.org/en/" name="NodeJS" icon={require('images/logos/nodejs.png')} />
          <StackItem href="https://www.selenium.dev/" name="Selenium" icon={require('images/logos/Selenium_Logo.jpg')} />
          <StackItem href="https://www.twilio.com/" name="Twilio" icon={require('images/logos/twilio.png')} />
          <StackItem href="https://stripe.com/" name="Stripe" icon={require('images/logos/stripe.png')} />
        </StackContainerS>
      </TitledSectionS>
      <TitledSectionS>
        <SectionHeaderS>
          <SectionTitleS themeColor='sectionTitle'>About this project</SectionTitleS>{' '}
        </SectionHeaderS>
        <ParagraphS>
          <AS weight="bolder" href="https://www.nufi.mx/en" target="_blank">Nufi</AS> is a company that offers identity checking services of individuals and companies in order to avoid risk and identity fraud.
        </ParagraphS>
        <ParagraphS>
          When I started working, the user experience was limited to creating an account on Nufi's webpage and follow a "not so easy to follow" series of steps in order to verify an identity.
        </ParagraphS>
        <ParagraphS>
          I was in charge of creating a new communication channel for the clients, an easier and quicker way to obtain identity verification without even needing to use a computer.
        </ParagraphS>
      </TitledSectionS>
      <TitledSectionS>
        <SectionHeaderS>
          <SectionTitleS themeColor='sectionTitle'>How it works</SectionTitleS>{' '}
        </SectionHeaderS>
        <BlogBlockS>
          <BlogBlockTextS>
            <BigStoryChatbotS>The user only needs to provide an ID picture and the bot will do the work.</BigStoryChatbotS>
          </BlogBlockTextS>
          <BlogImage image={require('images/chatbotNufi/hola.jpg')} />
        </BlogBlockS>
        <BlogBlockS reverted={true}>
          <BlogBlockTextS>
            <BigStoryChatbotS>Or he/she/they can input the person’s information manually.</BigStoryChatbotS>
          </BlogBlockTextS>
          <BlogImage image={require('images/chatbotNufi/manually.jpg')} />
        </BlogBlockS>
        <BlogBlockS>
          <BlogBlockTextS>
            <BigStoryChatbotS>The user can select what kind of information to research about the person</BigStoryChatbotS>
          </BlogBlockTextS>
          <BlogImage image={require('images/chatbotNufi/sections.jpg')} />
        </BlogBlockS>
        <BlogBlockS reverted={true}>
          <BlogBlockTextS>
            <BigStoryChatbotS>A web scraping bot does the research on Nufi’s Web Platform.</BigStoryChatbotS>
          </BlogBlockTextS>
          <BlogImage image={require('images/chatbotNufi/nufi_page.jpg')} />
        </BlogBlockS>
        <BlogBlockS>
          <BlogBlockTextS>
            <BigStoryChatbotS>The user pays using a credit card, and could save the payment information for future background checks</BigStoryChatbotS>
          </BlogBlockTextS>
          <BlogImage image={require('images/chatbotNufi/pago.jpg')} />
        </BlogBlockS>
        <BlogBlockS reverted={true}>
          <BlogBlockTextS>
            <BigStoryChatbotS>In less than 8 minutes, the chatbot sends in PDFs the information requested.</BigStoryChatbotS>
          </BlogBlockTextS>
          <BlogImage image={require('images/chatbotNufi/results.jpg')} />
        </BlogBlockS>
      </TitledSectionS>
    </>
  )
}

