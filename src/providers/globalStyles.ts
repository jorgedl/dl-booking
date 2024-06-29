import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    color: var(--text-primary);
  }

  #root {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  h1, h2, h3, h4, h5 {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: unset;
  }

  p {
    margin: 0;
  }

  :root {
    --primary: #00ab25;
    --hoverPrimary: #008b1e;
    --onPrimary: #FFF;
    --text-primary: #272a2f;
    --text-secondary: #6a6a6a;
    --outline: #e9e9e9;
    --disabled: #60a76f;
    
    --padding-xs: 4px;
    --padding-sm: 8px;
    --padding-md: 16px;
    --padding-lg: 32px;
    --padding-xl: 64px;

    --margin-xs: 4px;
    --margin-sm: 8px;
    --margin-md: 16px;
    --margin-lg: 32px;
    --margin-xl: 64px;

    --control-height: 40px;

    --border-radius: 8px;

    --item-width: 400px;

    --application-inline-padding: var(--padding-xl);
    --application-column-padding: var(--padding-lg);


    @media screen and (max-width: 1200px) {
      --item-width: 300px;
      --application-inline-padding: var(--padding-lg);
    }


    @media screen and (max-width: 768px) {
      --item-width: 200px;
      --application-inline-padding: var(--padding-md);
    }


    @media screen and (max-width: 400px) {
      --item-width: 100%;
      --application-inline-padding: var(--padding-sm);
    }
  }
`;
