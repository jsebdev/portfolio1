import '../../styles.css';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Page } from '../components/Page';
import { GlobalStyles } from '../styledComponents/globarStyles';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../components/pages/HomePage';
import { Work } from '../components/pages/WorkPage';
import { Contact } from '../components/pages/ContactPage';
import { About } from '../components/pages/AboutPage';
import { NotFound } from '../components/pages/NotFoundPage';
import { ABOUT, CHATBOT_NUFI_POST, CONTACT, MAIMOVIES_POST, RESUME, WORK } from 'ui/helpers/constants';
import { darkTheme, lightTheme, themesNames } from 'ui/helpers/themes';
import { ChatbotNufi } from 'ui/components/pages/work_pages/ChatbotNufi';
import { ResumeRedirect } from 'ui/components/resumeRedirect';
import { MaiMoviesPost } from 'ui/components/pages/work_pages/MaiMovies';
import { Helmet } from 'react-helmet';

function App() {
  const themeName = useSelector((state) => state.theme.value);

  return (
    <ThemeProvider
      theme={themeName === themesNames.light ? lightTheme : darkTheme}
    >
      <Helmet>
        <meta property="og:image" content="%PUBLIC_URL%/profile.jpg" />
      </Helmet>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Page />}>
          <Route index element={<Home />} />
          <Route path={ABOUT} element={<About />} />
          <Route path={RESUME} element={<ResumeRedirect />} />
          <Route path={WORK} element={<Work />}>
            <Route path={CHATBOT_NUFI_POST} element={<ChatbotNufi />} />
            <Route path={MAIMOVIES_POST} element={<MaiMoviesPost />} />
          </Route>
          <Route path={CONTACT} element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
