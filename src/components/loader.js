import React, { useContext, useEffect, useState } from 'react';
import styled from "styled-components";

const Load = styled.div`

    display: block;
    margin-top: 5%;
    color: #eb1f40;
    background-color: ${({theme}) => theme.colors.background.white};
    position: relative;
    top: calc(50% - 4em);
    left: calc(50% - 4em);
    width: 6em;
    height: 6em;
    border: 1.1em solid rgba(0, 0, 0, 0.2);
    border-left: 1.1em solid ${({theme}) => theme.colors.background.red};
    border-radius: 50%;
    animation: load8 1.1s infinite linear;
  

  @keyframes load8 {
    0% {
      
      transform: rotate(0deg);
    }
    100% {
      
      transform: rotate(360deg);
    }
  }
`

export default function Loader() {

    
    return (
        <Load />
    )
}