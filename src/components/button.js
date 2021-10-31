import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: ${({width}) => width ? width : ''};
    height: ${({height}) => height ? height : ''};
    font-size: ${({fontSize}) => fontSize ? fontSize : ''};
    font-weight: ${({fontWeight}) => fontWeight ? fontWeight : ''};
    margin: ${({margin}) => margin ? margin : ''};
    padding: ${({padding}) => padding ? padding : '10px 20px'};
    border: ${({border}) => border ? border : 'none'};
    border-radius: ${({borderRadius}) => borderRadius ? borderRadius : ''};
    box-shadow: ${({boxShadow}) => boxShadow ? boxShadow : ''};
    cursor: ${({cursor}) => cursor ? cursor : ''};    
    text-transform: ${({uppercase}) => uppercase ? 'uppercase' : ''};
    color: ${({color, theme}) => color ? theme.colors.text[color] : theme.colors.text.grey};
    background-color: ${({$backgroundColor, theme}) => $backgroundColor ? theme.colors.background[$backgroundColor] : theme.colors.background.white};
    
    &:hover {
        color: ${({hoverColor, theme}) => hoverColor ? theme.colors.text[hoverColor] : ''};
    }
`

export default function Button({children, ...props}) {
    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    )
}