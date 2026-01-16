import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from "./app/features/theme/theme.ts";
import { store } from './app/store.ts';
import { GlobalStyle } from './app/features/theme/GlobalStyle.ts';
import { useAppSelector } from './app/hooks.ts';
import { BrowserRouter } from 'react-router-dom';

function Root() {
  const theme = useAppSelector((state) => state.theme.value);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <Provider store={store}>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
