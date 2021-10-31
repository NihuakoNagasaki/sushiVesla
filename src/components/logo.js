import React from 'react';
import styled from 'styled-components';
import logoPng from "../img/logo.png";

const StyledImg = styled.img `
    width: 99.5%;
    margin: 5% 0 0 0;
`


export default function Logo() {
    return (
       <StyledImg src={logoPng}/> 
    )
}