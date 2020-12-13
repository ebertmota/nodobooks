import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './styles/global';
import ScrollToTop from './routes/scrollToTop';
import Routes from './routes';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes />
      <GlobalStyles />
    </Router>
  );
};

export default App;
