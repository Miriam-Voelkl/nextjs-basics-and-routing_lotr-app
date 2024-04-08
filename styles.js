import { createGlobalStyle } from "styled-components";
import { Cormorant } from "next/font/google";
import { Lora } from "next/font/google";

const cormorant = Cormorant({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"], style: ["normal", "italic"] });

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: ${lora.style.fontFamily}, serif;
    background-color: #ffffff;
    color: #111111;
  }
`;
