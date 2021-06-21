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
    --black: hsl(0, 0, 0);
    --grey-dark: hsl(0, 0%, 8%);

    --ff-sans: 'Roboto';
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body, h1, h2, h3, h4, h5, h6, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
    color: white;
    background-color: black;
    font-family: var(--ff-sans);
}

a{
    color: var(--primary);
    text-decoration: none;
}
`;
