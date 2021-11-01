import React from 'react';
import styled from 'styled-components';
import FlexBox from '../FlexBox';
import Img from '../img';
import Txt from '../Txt';

import Filter from '../../icons/filter.svg'
import Basket from '../../icons/basket.svg'
import Menu from '../../icons/menu.svg'


const StyledLowResHeader = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 65px;
    padding: 0 20px 0 15px;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background.white};
`

const Container = styled.div`
 display: flex;
 flex-direction: ${({flexDirection}) => flexDirection};
`


export default function LowResHeader() {
    return (
        <StyledLowResHeader>
            <Img cursor='pointer' image={Menu} width='23px' />
            <FlexBox flexDirection='column' height='100%' $justifyContent='space-evenly'>
                <Container flexDirection="column">
                    <Txt fontSize='12px' hover='lightRed' transition='color 0.3s' cursor='pointer' fontWeight='bold' color='black'>
                        Волгоград
                    </Txt>
                    <Txt fontSize='12px' hover='lightRed' transition='color 0.3s' cursor='pointer' fontWeight='bold' margin='2px 0 0 0'>
                        8-800-550-30-30
                    </Txt>
                </Container>
                <Txt fontSize='12px' hover='lightRed' transition='color 0.3s' cursor='pointer' color='lightRed' borderBottom='1px dashed'>
                    Условия доставки
                </Txt>
            </FlexBox>
            <Container flexDirection="row">
                <Img cursor='pointer' image={Filter} width='24px' />
                <Img cursor='pointer' image={Basket} width='26px' margin='0 0 2px 25px' />
            </Container>
        </StyledLowResHeader>
    )
}