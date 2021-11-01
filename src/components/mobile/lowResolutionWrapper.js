import React from 'react';
import styled from 'styled-components';

const StyledLowResWrapper = styled.div`
    width: 100%;
    padding-top: 65px;
`
export default function LowResWrapper({children}) {
    return (
        <StyledLowResWrapper>
            {children}
        </StyledLowResWrapper>
    )
}