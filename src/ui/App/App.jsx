import '../../styles.css';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Page } from '../components/Page';
import { GlobalStyles } from '../styledComponents/globarStyles';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../components/pages/Home';
import { Work } from '../components/pages/Work';
import { Contact } from '../components/pages/Contact';
import { About } from '../components/pages/About';
import { NotFound } from '../components/pages/NotFound';
import { ABOUT, CONTACT, WORK } from 'ui/helpers/constants';
import { darkTheme, lightTheme, themesNames } from 'ui/helpers/themes';

function App() {
  const themeName = useSelector((state) => state.theme.value);

  return (
    <ThemeProvider
      theme={themeName === themesNames.light ? lightTheme : darkTheme}
    >
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Page />}>
          <Route index element={<Home />} />
          <Route path={ABOUT} element={<About />} />
          <Route path={WORK} element={<Work />}></Route>
          <Route path={CONTACT} element={<Contact />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
