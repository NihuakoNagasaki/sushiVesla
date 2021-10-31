import React from 'react';
import styled from 'styled-components';


export const StyledFlexBox = styled.div`    
    display: flex;
    flex-direction: ${({flexDirection}) => flexDirection ? flexDirection : 'row'};
    flex-wrap: ${({flexWrap}) => flexWrap ? flexWrap : 'nowrap'};
    flex-grow: ${({flexGrow}) => flexGrow ? flexGrow : ''};
    justify-content: ${({$justifyContent}) => $justifyContent ? $justifyContent : 'flex-start'};
    align-items: ${({$alignItems}) => $alignItems ? $alignItems : 'flex-start'};
    width: ${({width}) => width ? width : ''};
    height: ${({height}) => height ? height : ''};
    margin: ${({margin}) => margin ? margin : ''};
    padding: ${({padding}) => padding ? padding : ''};
    cursor: ${({cursor}) => cursor ? cursor : ''};  
`

export default function FlexBox({children, ...props}) {
    
    return (
        <StyledFlexBox {...props}>
            {children}
        </StyledFlexBox>
    )
}