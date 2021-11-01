import React from 'react';
import styled from 'styled-components';


const StyledHighResWrapper = styled.div`
    width: 100%;
    padding: 89px 35px 61px 35px;
    margin: 0 auto;
`

export default function HighResWrapper({children}) {
    return (
        <StyledHighResWrapper>
            {children}
        </StyledHighResWrapper>
    )
}
