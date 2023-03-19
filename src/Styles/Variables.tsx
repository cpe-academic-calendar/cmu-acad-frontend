import { createGlobalStyle } from "styled-components";

const Variables = createGlobalStyle`
    :root {
        --primary-color: #F57F17 ;
        --background: #fff;
        --variant-background: #FEF2E8;
        --hover: #fafafa;
        --disable-color: #aaa;
        --error: #C62828;
        --stroke: #E7E7E7;
        // Color in calendar
        --purple: #AB47BC;
        --blue: #42A5F5;
        --blue-green: #26A69A;
        --green: #4CAF50;
        --sun-orange: #FF5722;
        --orange: #F57F17;
        --yellow: #FFA726;
        --red:#DD2C00;
        --pink: #EC407A;
        --default-event-color: #347BBB;
        --default-holiday-color: #352829;
        --default-exam-color: #666AD1;

    }
`

export default Variables;