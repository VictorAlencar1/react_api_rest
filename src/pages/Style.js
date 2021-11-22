import styled from "styled-components";

export const Div = styled.div `
    background: gray;
    width: 50vw;
    height: 60vh;
    margin: 100px auto;
    border-radius: 50px;
    
    .startInfo{
        text-align: center;
    }

    .infoProfile{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .follow{
        display: flex;
        justify-content: space-around;
    }

    .follow p{
        background: green;
        border-radius: 15px;
        width: auto;
        height: 25px;
        text-align: center;
        padding: 5px;
        font-size: 18px;
        font-weight: 800;
    }

    div #profile{
        width: 15vw;
        border-radius: 10px;
        
    }
`;