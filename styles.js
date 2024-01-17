import { createGlobalStyle } from "styled-components";
import { Cormorant } from "next/font/google";

const cormorant = Cormorant({ subsets: ["latin"] });

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 10% 5%;
    font-family: ${cormorant.style.fontFamily};
    background-color: #e9f0e1;
    font-size: 1.2rem;
  }
`;
