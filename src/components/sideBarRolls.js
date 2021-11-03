import React from 'react';
import styled from 'styled-components';
import Img from './img';
import rolls from '../icons/rolls.svg'
import bakedRolls from '../icons/baked-rolls.svg'
import freidRolls from '../icons/fried-rolls.svg'
import grillRolls from '../icons/ic_grill.png'
import { NavLink } from 'react-router-dom';
import Txt, { StyledTxt } from './Txt';


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

export default function SideBarRolls() {
    return (
        <>

            <StyledSideBarLink to="/rolls">
                <Img image={rolls} height="30px" padding="0 0 10px 0"/>
                <Txt hover='lightRed' fontSize='16px'>Роллы</Txt>
            </StyledSideBarLink>
            <StyledSideBarLink to="/fried-rolls">
                <Img image={freidRolls} height="30px" padding="0 0 10px 0"/>
                <Txt hover='lightRed' fontSize='16px'>Жаренные роллы</Txt>
            </StyledSideBarLink>
            <StyledSideBarLink to="/baked-rolls">
                <Img image={bakedRolls} height="30px" padding="0 0 10px 0"/>
                <Txt hover='lightRed' fontSize='16px'>Запеченные роллы</Txt>
            </StyledSideBarLink>
            <StyledSideBarLink to="">
                <Img image={grillRolls} height="30px" width="30px" padding="0 0 10px 0"/>
                <Txt hover='lightRed' fontSize='16px'>Гриль роллы</Txt>
            </StyledSideBarLink>
        </>
    )
}