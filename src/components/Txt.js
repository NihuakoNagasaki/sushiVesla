import React from 'react';
import styled from 'styled-components';

export const StyledTxt = styled.div`
    width: ${({width}) => width ? width : ''};
    height: ${({height}) => height ? height : ''};
    display: ${({display}) => display ? display : 'block'};
    font-size: ${({fontSize}) => fontSize ? fontSize : '13px'};
    line-height: ${({lineHeight}) => lineHeight ? lineHeight : ''};
    font-weight: ${({fontWeight}) => fontWeight ? fontWeight : '400'};
    color: ${({color, theme}) => color ? theme.colors.text[color] : theme.colors.text.grey};
    margin: ${({margin}) => margin ? margin : 0};
    padding: ${({padding}) => padding ? padding : 0};
    text-transform: ${({uppercase}) => uppercase ? 'uppercase' : ''};
    text-align: ${({textAlign}) => textAlign ? textAlign : ''};
    border-bottom: ${({borderBottom}) => borderBottom ? borderBottom : ''};
    cursor: ${({cursor}) => cursor ? cursor : ''};
    transition: ${({transition}) => transition ? transition : ''};
    overflow: ${({overflow}) => overflow ? overflow : ''};
    text-overflow: ${({textOverflow}) => textOverflow ? textOverflow : ''};
    white-space: ${({whiteSpace}) => whiteSpace ? whiteSpace : ''};
    -webkit-line-clamp: ${({lineClamp}) => lineClamp ? lineClamp : ''};
    -webkit-box-orient: ${({boxOrient}) => boxOrient ? boxOrient : ''};

    &:hover {
        color: ${({hover, theme}) => hover ? theme.colors.text[hover] : ''};
    }
`

export default function Txt({children, ...props}) {
    return (
        <StyledTxt {...props}>
            {children}
        </StyledTxt>
    )
}