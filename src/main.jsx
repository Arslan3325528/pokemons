import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { ThemeProvider } from '@emotion/react'; //! Emotion Theme
// import { theme } from '@/constants'; //! Emotion Theme

import './index.css';

//! Aбсолютний шлях + Реекспорт
import {App} from '@/components/App';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/pokemons">
      {/* <ThemeProvider theme={theme}> */}
        <App />
      {/* </ThemeProvider> */}
    </BrowserRouter>
  </StrictMode>
);
