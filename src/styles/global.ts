import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --white: #fff;
    --background: #f2f3f5;
    --gray-line: #DCDDE0;
    --text: #666666;
    --text-highlight: #B3B9FF;
    --title: #B3B9FF;
    --red: #E83F5B;
    --green: #4CD62B;
    --blue: #5965E0;
    --blue-dark: #4953B8;
    --blue-twitter: #2AA9E0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    color: var(--text);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 400 16px 'Inter', sans-serif;
  }

  button{
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
