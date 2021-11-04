import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from '../logo';
import FlexBox, { StyledFlexBox } from '../FlexBox';
import Txt, { StyledTxt } from '../Txt';
import Button from '../button';

import Img from '../img';
import Carviar from "../../icons/egg.svg"
import Person from "../../icons/person.svg"
import Basket from "../../icons/basket.svg"
import SideBar from '../headerSideBar';
import HoverButton, { StyledHoverButton } from '../hoverButton';
import SideBarRolls from '../sideBarRolls';
import MoreSideBar from '../moreSideBar';

const StyledHeader = styled.header`
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 89px;
    background-color: ${({ theme }) => theme.colors.background.white};

    ${StyledHoverButton} & > ${FlexBox} {
        display: flex;
    }

    @media screen and (max-width: 1440px) {
        ${StyledFlexBox} > button {
            display: none;
        }
    }
`
const StyledLink = styled(Link)`
    min-width: 13.5vw;
    flex-grow: 1;
`
const Container = styled.div`
    margin: ${({margin}) => margin ? margin : ''};
`

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    padding: 6px 10px;
    border-radius: 19px;
    
    &.active  > ${StyledTxt} {
        color: ${({ theme }) => theme.colors.text.white};
    }
    
    &.active {
        background-color: ${({ theme }) => theme.colors.text.lightRed};
    }
    
    @media screen and (max-width: 1440px) {
        &  > ${StyledTxt} {
            font-size: 13px;
        }
    }
    
`

const StyledMore = styled.a `
    text-decoration: none;
    padding: 6px 10px;
    border-radius: 19px;
    cursor: pointer;

    @media screen and (max-width: 1440px) {
        &  > ${StyledTxt} {
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


export default function HighResHeader() {

    const [isMainPage, setIsMainPage] = useState(true);
    const [sideBarVisibility, setSideBarVisibility] = useState('')
    const [contentVisibility, setcontentVisibility] = useState('')
    const location = useLocation();

    function sideBarToggle(content) {
        setcontentVisibility(content)
        setSideBarVisibility('109px')
    }

    useEffect(() => {
        location.pathname === '/' ? setIsMainPage(true) : setIsMainPage(false);
    }, [location])

    return (
        <Container onMouseLeave={(() => setSideBarVisibility(''))}>
            <StyledHeader >
                <FlexBox width='calc(100% - 80px)' $justifyContent='space-between' height='86px' $alignItems='center' margin='0 auto'>
                    <FlexBox $justifyContent='space-between' $alignItems='center' width='min-content'>
                        <StyledLink to="/">
                            <Logo />
                        </StyledLink>
                        <FlexBox flexDirection='column' margin='0 0 0 38px'>
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
                                    Личный кабинет<Img image={Person} display="inline" width="17px" margin='0 0 -6px 8px' />
                                </Txt>
                            </FlexBox>
                        </FlexBox>
                    </FlexBox>
                    {!isMainPage &&
                        <FlexBox height='100%' $justifyContent='flex-end' $alignItems='center' width='100%' margin='0 20px'>
                            <StyledNavLink to='/sets'>
                                <Txt hover='lightRed' fontSize='16px'>Сеты</Txt>
                            </StyledNavLink>
                            <StyledNavLink to='/sushi'>
                                <Txt hover='lightRed' fontSize='16px'>Суши</Txt>
                            </StyledNavLink>
                            <StyledNavLink to='/salad'>
                                <Txt hover='lightRed' fontSize='16px' width="150%">Поке и салаты</Txt>
                            </StyledNavLink>
                            <StyledMore>                                
                                    <Txt hover='lightRed' fontSize='16px' onMouseEnter={(() => sideBarToggle("rolls"))}>Роллы</Txt>                                
                            </StyledMore>
                            <StyledMore>
                                <Txt hover='lightRed' fontSize='16px' onMouseEnter={(() => sideBarToggle("more"))}>Ещё</Txt>
                            </StyledMore>
                        </FlexBox>}
                    <FlexBox height='100%' $justifyContent='flex-end' $alignItems='center' width='100%' margin="0 0 5px 0">
                        <Container margin="0 50px 0 0">
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
                            hover='lightRed' cursor='pointer' margin='-10px -30px 0 10px'>
                            <FlexBox>
                                Икринки <Img image={Carviar} margin='0 0 0 15px' />
                            </FlexBox>
                        </Button>
                        <FlexBox>
                            <Img image={Basket} cursor='pointer' margin='-10px 0 0 60px' />
                        </FlexBox>
                    </FlexBox>

                </FlexBox>


            </StyledHeader >
            
                <SideBar transform={sideBarVisibility}>
                    <FlexBox display="flex" width='100%' backgroundColor="#f1f1f1" $justifyContent='space-between' height='109px' $alignItems='center' margin='0 auto'>
                        <FlexBox height='100%' $justifyContent='flex-end' $alignItems='center' width='100%' margin='0 20px'>
                            {contentVisibility == "rolls" ? <SideBarRolls /> : contentVisibility == "more" ? <MoreSideBar /> : ''}
                        </FlexBox>
                    </FlexBox>
                </SideBar>
            
        </Container>
    )
}