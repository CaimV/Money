import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --background: #f8f2f5;
    --red:#e52e40;
    --green:#33cc95;
    --blue:#5429cc;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969c83;
    --shape:#FFFFFF;

}
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;    }
    body{
        background:var(--background);
        -webkit-font-smoothing:antialiased;
    }
    body, input, textarea, button{
        font-family:'poppins', sans-serif;
        font-weight: 400;

    }
    h1,h2,h3,h4,h5,h6, strong{
        font-weight:600;
    }
    html{
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size:87.5%
        }
    button{
        cursor: pointer;

    }
    :disabled{
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-model-overlay{
        background: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .react-modal-content{
        width: 100%;
        max-width:576px;
        background: var(--background);
        padding:3rem;
        position: relative;
        border-radius: 0.5rem;
    }
    }
    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border:0;
        background: transparent;
        transition: brightness(.2s);
        
        &:hover{
            filter: brightness(.8);
        }
    }
`;
