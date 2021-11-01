import React from 'react';
import styled from "styled-components";



const StyledSvg = styled.svg`
    margin: ${({margin}) => margin ? margin : ''};
    padding: ${({padding}) => padding ? padding : ''};
    width: ${({width}) => width ? width : ''};
    height: ${({height}) => height ? height : ''};
    viewBox: ${({viewBox}) => viewBox ? viewBox : ''};
    cursor: ${({cursor}) => cursor ? cursor : ''};
    
    &:hover path {
        fill: ${({theme}) => theme.colors.text.lightRed};
    }
`


export default function Svg({children, ...props}) {
    return (
        <StyledSvg 
        {...props}
        xmlns="http://www.w3.org/2000/svg">
            {children}
        </StyledSvg>
    )
}