import '../../styles.css';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Page } from '../components/Page/Page';
import { GlobalStyles } from '../styledComponents/globarStyles';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Work } from '../pages/Work';
import { Contact } from '../pages/Contact';
import { About } from '../pages/About';
import { NotFound } from '../pages/NotFound';

function App() {
  const theme = useSelector((state) => state.theme.value);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Page />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='work' element={<Work />} />
          <Route path='contact' element={<Contact />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
