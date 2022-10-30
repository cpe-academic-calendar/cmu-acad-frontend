import { createGlobalStyle } from "styled-components";

const Variables = createGlobalStyle`
    :root {
        --primary-color: #F57F17 ;
        --background: #fff;
        --variant-background: #f3f3f3;
        --hover: #fafafa;
        --disable-color: #aaa;
        --error: #C62828;
        // Color in calendar
        --violet: #673AB7;
        --purple: #AB47BC;
        --dark-blue: #5C6BC0;
        --cyan-blue: #26C6DA;
        --blue: #42A5F5;
        --blue-green: #26A69A;
        --dark-green: #004D40;
        --green: #4CAF50;
        --light-green: #9CCC65;
        --light-yellow: #9E9D24;
        --green-yellow: #D4E157;
        --light-yellow: #FFEE58;
        --sun-orange: #FF5722;
        --orange: #F57F17;
        --yellow: #FFA726;
        --red:#DD2C00;
        --pink: #EC407A;
        --light-brown: #795548;
        --dark-brown: #363636;
        --grey: #BDBDBD;
        --silver: #78909C;
    }
`

export default Variables;