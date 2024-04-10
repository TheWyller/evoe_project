import { createGlobalStyle, keyframes } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    :root{

        --Black-100:#131414;
        --Black-80:#424343;
        --Black-60:#717272;
        --Black-40:#A0A1A1;
        --Black-20:#CFD0D0;
        --White:#FFFFFF;


        --text-button-default:var(--White); 
        --text-button-active:var(--Black-100); 
        --text-button-disable:var(--Black-40); 
        
        --Sucess:#3FE864;
        --Negative:#E83F5B;

        --toastify-color-dark: var(--White);
        --toastify-color-success: var(--Sucess);
        --toastify-color-error: var(--Negative);

    }
    
    .Toastify__toast-body{
        font-family: 'Inconsolata', cursive;
        color: var(--Black-100);
    }

    .Toastify__close-button{
        color: var(--Black-100);
        border: 2px solid var(--Black-100);
        border-radius: 50%;
        height: 20px;
        width: 20px;
        padding-left: 1px;
    }

    body{   
        font-family: 'Inconsolata', cursive;  
        background-color:var(--Black-40);
    }
    
    h1,h2,h3{
        font-family: 'Inconsolata', cursive;
        color: var(--Green-5);
    }

    h1{
        font-size: 50px;
    }
    h3{
        font-size: 25px;
    }

    button{
        font-family: 'Inconsolata', cursive;
        font-weight: bold;
        cursor: pointer;
    }

    a{
        text-decoration:none
    }

    ::-webkit-scrollbar {
    width: 10px;
    }
    ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    }
    
    ::-webkit-scrollbar-thumb {
    background: var(--Green-5);
    }




`;

export const rotated = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

export const appearFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px)
    }

    to {
        opacity: 1;
        transform: translateX(0px)
    }
`;
