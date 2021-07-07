import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
    --primary: hsl(180, 100%, 42%);
    --primary-light: hsl(180, 100%, 60%);
    --primary-lightest: hsl(180, 100%, 76%) ;
    --primary-dark: hsl(180, 100%, 24%);
    --primary-darkest: hsl(180, 100%, 8%) ;
    --secondary: hsl(360, 100%, 47%);
    --secondary-light: hsl(360, 100%, 68%) ;
    --secondary-lightest: hsl(360, 100%, 80%) ;
    --secondary-dark: hsl(360, 100%, 32%);
    --secondary-darkest: hsl(360, 100%, 20%);
    --white: hsl(360, 100%, 100%);
    --black: hsl(0, 0%, 0%);
    --grey-dark: hsl(215, 0%, 72.5%);
    --grey-darkest: hsl(0, 0%, 8%);

    --ff-sans: 'Roboto';
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body, h1, h2, h3, h4, h5, h6, ol, ul {
    background-color: black;
    color: white;
    font-family: var(--ff-sans);
    font-weight: normal;
    margin: 0;
    margin-bottom: 0;
    margin-top: 0.5rem;
    padding: 0;
}

a{
    color: var(--primary);
    text-decoration: none;
}
`;
