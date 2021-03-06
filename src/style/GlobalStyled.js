import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const mainColor = {
  fontColor: "white",
  bgColor: "#1d1d1d",
};

export const mainWeight = {
  titleWeight: 600,
};

export const moSize = {
  padding: "0 20px",
  titleSize: "45px",
  descSize: "16px",
  movieTitle: "14px",
};

export const GlobalStyeld = createGlobalStyle`
    ${reset}

    *{
        box-sizing: border-box;
    }

    a{
        color:${mainColor.fontColor};
        text-decoration: none;
    }

    body{
        font-family: 'Noto Sans KR', sans-serif;
        background-color:${mainColor.bgColor};
        color:${mainColor.fontColor};
        letter-spacing: -1px;
        word-break: keep-all;
    }
`;
