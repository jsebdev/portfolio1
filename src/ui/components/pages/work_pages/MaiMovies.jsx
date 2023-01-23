import React from 'react'
import { StackItem } from 'ui/components/StackItem'
import { AS } from 'ui/styledComponents/AStyled'
import { BlogBlockS, BlogBlockTextS, BlogFrontImage, BlogHeaderS, StackContainerS, VideoBlogS } from 'ui/styledComponents/BlogStyled'
import { BigStoryChatbotS, ParagraphS } from 'ui/styledComponents/paragraphStyled'
import { SectionHeaderS, TitledSectionS } from 'ui/styledComponents/SectionStyled'
import { MainTitleS, SectionTitleS } from 'ui/styledComponents/TitleStyled'
import frontImage from 'images/MaiMovies/movies.jpg'
import { BlogImage } from 'ui/components/BlogImage'
// import { GooglePlayButtonS } from 'ui/styledComponents/ButtonsStyled'

export const MaiMoviesPost = () => {
  return (
    <>
      <BlogFrontImage image={frontImage} />
      <BlogHeaderS>
        <MainTitleS themeColor='sectionTitle'>MaiMovies</MainTitleS>
        {/* <GooglePlayButtonS /> */}
      </BlogHeaderS>
      <BlogBlockS>
        <ParagraphS>Mobile App to create, edit and manage your own lists of movies and tv shows.</ParagraphS>
      </BlogBlockS>
      <TitledSectionS>
        <SectionHeaderS>
          <SectionTitleS themeColor='sectionTitle'>Technology Stack</SectionTitleS>{' '}
        </SectionHeaderS>
        <StackContainerS>
          <StackItem href="https://reactnative.dev/" name="React Native" icon={require('images/logos/React.png')} />
          <StackItem href="https://mobx.js.org/README.html" name="MobX" icon={require('images/logos/mobx.png')} />
        </StackContainerS>
      </TitledSectionS>
      <TitledSectionS>
        <SectionHeaderS>
          <SectionTitleS themeColor='sectionTitle'>About this project</SectionTitleS>
        </SectionHeaderS>
        <ParagraphS>
          I realize I didn't have any project using React native to show yet, and I also realized I'm used to receive tons of recommendations of movies and series from my friends but since I don't write them down, I forget many of them.
        </ParagraphS>
        <ParagraphS>So! I decided to fix both issues at the same time building this app for me (And for anyone who wants to use it of course)</ParagraphS>
      </TitledSectionS>
      <TitledSectionS>
        <SectionHeaderS>
          <SectionTitleS themeColor='sectionTitle'>About this project</SectionTitleS>
        </SectionHeaderS>
        <VideoBlogS>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/-qyklmNkhMY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </VideoBlogS>
      </TitledSectionS>
      <TitledSectionS>
        <SectionHeaderS>
          <SectionTitleS themeColor='sectionTitle'>What about the backend?</SectionTitleS>
          <ParagraphS>This app uses the free public API from the{" "}
            <AS weight="bolder" href="https://www.themoviedb.org/" target="_blank">https://www.themoviedb.org/</AS>, all series and movies information comes from their database. As well as all user information and lists created is stored in their database.
          </ParagraphS>
        </SectionHeaderS>
      </TitledSectionS>
      <TitledSectionS>
        <SectionHeaderS>
          <SectionTitleS themeColor='sectionTitle'>Features</SectionTitleS>
        </SectionHeaderS>
        <BlogBlockS>
          <BlogBlockTextS>
            <BigStoryChatbotS>Create infinite number of lists if your account</BigStoryChatbotS>
          </BlogBlockTextS>
          <BlogImage image={require('images/MaiMovies/screenshot0.jpg')} />
        </BlogBlockS>
        <BlogBlockS reverted={true}>
          <BlogBlockTextS>
            <BigStoryChatbotS>See latest tendencies of movies and tv shows</BigStoryChatbotS>
          </BlogBlockTextS>
          <BlogImage image={require('images/MaiMovies/screenshot1.jpg')} />
        </BlogBlockS>
        <BlogBlockS>
          <BlogBlockTextS>
            <BigStoryChatbotS>Search for any movie or tv show.</BigStoryChatbotS>
          </BlogBlockTextS>
          <BlogImage image={require('images/MaiMovies/screenshot2.jpg')} />
        </BlogBlockS>
        <BlogBlockS reverted={true}>
          <BlogBlockTextS>
            <BigStoryChatbotS>See detailed and actual information about your movies, like Revenue, release date, genre, production companies, public rate, among others</BigStoryChatbotS>
          </BlogBlockTextS>
          <BlogImage image={require('images/MaiMovies/screenshot4.jpg')} />
        </BlogBlockS>
        <BlogBlockS>
          <BlogBlockTextS>
            <BigStoryChatbotS>In the case of tv shows, the same info is available as well as some extra information like season or even info about the latest released episode.</BigStoryChatbotS>
          </BlogBlockTextS>
          <BlogImage image={require('images/MaiMovies/screenshot3.jpg')} />
        </BlogBlockS>
      </TitledSectionS>
    </>
  )
}