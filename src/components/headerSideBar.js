import React from 'react';
import styled from 'styled-components';

export const StyledSideBar = styled.div `
    z-index: 1;
    display: flex;
    position: relative;
    width: 100%;
    height: 109px;
    top: -109px;
    transition: transform 0.3s;

    transform: translateY(${({transform}) => transform ? transform : '0'});
`


export default function SideBar({children, ...props}) {
    
    return (
        <StyledSideBar {...props}>
            {children}
        </StyledSideBar>
    )
}