import { createGlobalStyle } from "styled-components";

const Font = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans Thai', sans-serif;
    font-style: normal;
    font-weight: normal;
    src: url("/Fonts/NotoSansThai-Regular.ttf") format("truetype");
  }
  @font-face {
    font-family: 'Noto Sans Thai', sans-serif;
    font-style: normal;
    font-weight: bold;
    src: url('/Fonts/NotoSansThai-Bold.ttf');
  }
  @font-face {
    font-family: 'Noto Sans Thai', sans-serif;
    font-style: normal;
    font-weight: 300;
    src: url('/Fonts/NotoSansThai-Light.ttf');
  }
  @font-face {
    font-family: 'Noto Sans Thai', sans-serif;
    font-style: normal;
    font-weight: 400;
    src: url('/Fonts/NotoSansThai-Regular.ttf');
  }
  @font-face {
    font-family: 'Noto Sans Thai', sans-serif;
    font-style: normal;
    font-weight: 500;
    src: url('/Fonts/NotoSansThai-Medium.ttf');
  }
  @font-face {
    font-family: 'Noto Sans Thai', sans-serif;
    font-style: normal;
    font-weight: 600;
    src: url('/Fonts/NotoSansThai-SemiBold.ttf');
  }
  body: {
    font-family: 'Noto Sans Thai', sans-serif;
  }
`

export default Font;