import React, { useState } from 'react';
import styled from 'styled-components';

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: ${({gridTemplateColumns}) => gridTemplateColumns ? gridTemplateColumns : ''};
    gap: ${({gap}) => gap ? gap : ''};
    height: ${({height}) => height ? height : ''};
    padding: ${({padding}) => padding ? padding : ''};
    margin: -90px 0 0 0;
    
    @media screen and (max-width: 1400px) {
        grid-template-columns: repeat(2, 1fr);
        margin-top: -100px;
        margin-bottom: 5%;
        height: 100%;
    }
    
    @media screen and (max-width: 1099px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 1px;
        background-color: ${({theme}) => theme.colors.background.grey};
        padding: 0;
        margin: 0;
    }
`

export default function Grid({children, ...props}) {
    
    return (
        <StyledGrid {...props}>
            {children}
        </StyledGrid>
    )
}