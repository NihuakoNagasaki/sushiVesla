import React from 'react';
import styled from 'styled-components';

export const StyledImg = styled.img`
    width: ${({width}) => width ? width : '100%'};
    height: ${({height}) => height ? height : ''};
    max-height: ${({maxHeight}) => maxHeight ? maxHeight : '100%'};
    margin: ${({margin}) => margin ? margin : '0'};
    padding: ${({padding}) => padding ? padding : '0'};
    z-index: ${({zIndex}) => zIndex ? zIndex : ''};
    position: ${({position}) => position ? position : 'static'};
    top: ${({top}) => top ? top : ''};
    left: ${({left}) => left ? left : ''};
    right: ${({right}) => right ? right : ''};
    bottom: ${({bottom}) => bottom ? bottom : ''};
    display: ${({display}) => display ? display : 'block'};
    cursor: ${({cursor}) => cursor ? cursor : ''};

   
`

export default function Img({image, height, maxHeight, width, display, margin, padding, position, top,left, right, bottom, zIndex, cursor}) {
    
    return (
        <StyledImg 
        src={image} 
        height={height} 
        maxHeight={maxHeight} 
        width={width} 
        display={display} 
        margin={margin} 
        padding={padding} 
        position={position} 
        top={top} 
        left={left} 
        right={right}
        bottom={bottom} 
        cursor={cursor}
        zIndex={zIndex}/>
    );
}