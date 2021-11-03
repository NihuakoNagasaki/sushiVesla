import React from 'react';
import styled from 'styled-components';
import { StyledFlexBox } from './FlexBox';


export const StyledHoverButton = styled.div `
    
`

export default function HoverButton({children, ...props}) {



    return (
        <StyledHoverButton {...props} onMouseEnter={(() => props.setSideBarVisibility('109px'))}>
            {children}
        </StyledHoverButton>
    )
}