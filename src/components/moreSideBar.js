import React from 'react';
import styled from 'styled-components';
import Img from './img';
import { NavLink } from 'react-router-dom';
import Txt, { StyledTxt } from './Txt';
import sushi from '../icons/sushi.svg'
import sause from '../icons/sause.svg'
import kombovok from '../icons/kombo-vok.svg'
import napitki from '../icons/napitki.svg'
import tempura from '../icons/tempura.svg'
import supy from '../icons/supy.svg'
import menu from '../icons/menu-phone-icon-5c4fe432e4b0dbb6b7bbe0c3.svg'
import neobxodimoe from '../icons/neobxodimoe.svg'
import deserty from '../icons/deserty.svg'


const StyledSideBarLink = styled(NavLink)`
    text-decoration: none;
    padding: 30px 60px 10px 10px;
    border-radius: 19px;    
    
    
    @media screen and (max-width: 1440px) {
        &  > ${StyledTxt} {
            font-size: 13px;
        }
    }
    
`


export default function MoreSideBar() {
    return (
        <>
            <StyledSideBarLink to="">
                <Img image={sushi} height="30px" padding="0 0 10px 0"/>
                <Txt hover='lightRed' fontSize='16px'>Суши</Txt>
            </StyledSideBarLink>            
            <StyledSideBarLink to="/sause">
                <Img image={sause} height="30px" padding="0 0 10px 0"/>
                <Txt hover='lightRed' fontSize='16px'>Соусы</Txt>
            </StyledSideBarLink>            
            <StyledSideBarLink to="/voki">
                <Img image={kombovok} height="30px" padding="0 0 10px 0"/>
                <Txt hover='lightRed' fontSize='16px'>Воки</Txt>
            </StyledSideBarLink>            
            <StyledSideBarLink to="/napitki">
                <Img image={napitki} height="30px" padding="0 0 10px 0"/>
                <Txt hover='lightRed' fontSize='16px'>Напитки</Txt>
            </StyledSideBarLink>            
            <StyledSideBarLink to="/tempura">
                <Img image={tempura} height="30px" padding="0 0 10px 0"/>
                <Txt hover='lightRed' fontSize='16px'>Темпура</Txt>
            </StyledSideBarLink>            
            <StyledSideBarLink to="/supy">
                <Img image={supy} height="30px" padding="0 0 10px 0"/>
                <Txt hover='lightRed' fontSize='16px'>Супы</Txt>
            </StyledSideBarLink>            
            <StyledSideBarLink to="">
                <Img image={menu} height="30px" padding="0 0 10px 0"/>
                <Txt hover='lightRed' fontSize='16px'>Премиум-меню</Txt>
            </StyledSideBarLink>            
            <StyledSideBarLink to="">
                <Img image={neobxodimoe} height="30px" padding="0 0 10px 0"/>
                <Txt hover='lightRed' fontSize='16px'>Разное</Txt>
            </StyledSideBarLink>            
            <StyledSideBarLink to="">
                <Img image={deserty} height="30px" padding="0 0 10px 0"/>
                <Txt hover='lightRed' fontSize='16px'>Десерты</Txt>
            </StyledSideBarLink>            
        </>
    )
}