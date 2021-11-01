import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from '../logo';
import FlexBox from '../FlexBox';
import Txt, { StyledTxt } from '../Txt';
import Button from '../button';

import Img from '../img';
import Carviar from "../../icons/egg.svg"
import Person from "../../icons/person.svg"
import Basket from "../../icons/basket.svg"

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 89px;
    z-index: 100;
    background-color: ${({ theme }) => theme.colors.background.white};
`
const StyledLink = styled(Link)`
    min-width: 13.5vw;
    flex-grow: 1;
`
const Container = styled.div`
    
`

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    padding: 6px 20px;
    border-radius: 19px;
    
    &.active > ${StyledTxt} {
        color: ${({ theme }) => theme.colors.text.white};
    }
    
    &.active {
        background-color: ${({ theme }) => theme.colors.text.lightRed};
    }
    
    @media screen and (max-width: 1440px) {
        & > ${StyledTxt} {
            font-size: 13px;
        }
    }
`

const StyledTelLink = styled.a`
    text-decoration: none;
    width: max-content;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.text.grey};
    transition: color 0.5s;
    &:hover {
        color: ${({ theme }) => theme.colors.text.lightRed};
    }
`

const StyledPersonIcon = styled.svg`
    margin: ${({ margin }) => margin ? margin : ''};
    padding: ${({ padding }) => padding ? padding : ''};
`

export default function HighResHeader() {

    const [isMainPage, setIsMainPage] = useState(true);
    const location = useLocation();

    useEffect(() => {
        location.pathname === '/' ? setIsMainPage(true) : setIsMainPage(false);
    }, [location])

    return (
        <StyledHeader>
            <FlexBox width='calc(100% - 80px)' $justifyContent='space-between' height='86px' $alignItems='center' margin='0 auto'>
                <FlexBox $justifyContent='space-between' $alignItems='center' width='min-content'>
                    <StyledLink to="/">
                        <Logo />
                    </StyledLink>
                    <FlexBox flexDirection='column' margin='0 0 0 34px'>
                        <FlexBox height='30px' $alignItems='flex-end'>
                            <Txt margin='0 8px 0 0' hover='lightRed' transition='color 0.3s' cursor='pointer'>
                                Волгоград
                            </Txt>
                            <StyledTelLink href='tel:8-800-550-30-30'>
                                8-800-550-30-30
                            </StyledTelLink>
                        </FlexBox>
                        <FlexBox height='30px' $justifyContent='space-between' $alignItems='flex-end' cursor='pointer'>
                            <Txt hover='lightRed' fontWeight='bold'>
                                Личный кабинет<Img image={Person} display="inline"  width="17px" margin='0 0 -6px 8px'/>
                            </Txt>
                        </FlexBox>
                    </FlexBox>
                </FlexBox>
                {!isMainPage &&
                    <FlexBox height='100%' $justifyContent='flex-end' $alignItems='center' width='100%' margin='0 20px'>
                        <StyledNavLink to='/sets'>
                            <Txt hover='lightRed' fontSize='16px'>Сеты</Txt>
                        </StyledNavLink>
                        <StyledNavLink to='/rolls'>
                            <Txt hover='lightRed' fontSize='16px'>Роллы</Txt>
                        </StyledNavLink>
                        <StyledNavLink to='/sushi'>
                            <Txt hover='lightRed' fontSize='16px'>Суши</Txt>
                        </StyledNavLink>
                        <StyledNavLink to='/salads'>
                            <Txt hover='lightRed' fontSize='16px'>Салаты</Txt>
                        </StyledNavLink>
                    </FlexBox>}
                <FlexBox height='100%' $justifyContent='flex-end' $alignItems='center' width='100%'>
                    <Container>
                        <Txt display='inline' hover='lightRed' transition='color 0.5s' cursor='pointer'>
                            О компании
                        </Txt>
                        <Txt display='inline' margin='0 0 0 15px' hover='lightRed' transition='color 0.5s'
                            cursor='pointer'>
                            Условия доставки
                        </Txt>
                        <br />
                        <Txt display='inline-block' margin='10px 0 0 15px' hover='lightRed'
                            transition='color 0.5s' cursor='pointer'>
                            Пользовательское соглашение
                        </Txt>
                    </Container>
                    <Button fontSize='15px' borderRadius='19px' boxShadow='0 2px 4px 0 rgb(0 0 0 / 10%)'
                        hover='lightRed' cursor='pointer' margin='-10px 0 0 30px'>
                        <FlexBox>
                            Икринки <Img image={Carviar} margin='0 0 0 15px'/>
                        </FlexBox>
                    </Button>
                <FlexBox>
                    <Img image={Basket} cursor='pointer' margin='-10px 0 0 60px' />
                </FlexBox>
                </FlexBox>

            </FlexBox>
        
        </StyledHeader >
    )
}