import React from 'react';
import styled from 'styled-components';
import FlexBox from '../FlexBox';
import Button from "../button";

import FacebookIcon from '../iconComponents/facebook';
import VkIcon from '../iconComponents/Vk';
import InstagramIcon from '../iconComponents/instagram';
import TelegramIcon from '../iconComponents/telegram';
import TicTocIcon from '../iconComponents/tiltoc';
import masterCard from "../../icons/master-card.svg";
import visa from "../../icons/visa.svg";
import Img from '../img';
import ru from "../../icons/ru.svg";
import Txt from '../Txt';
import Svg from '../svg';


const StyledLowResFooter = styled.div`
    width: 100%;
    margin-top: 20px;
    padding: 0 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background.white};
    
    & svg + svg {
        margin-left: 20px;
    }
`

export default function LowResFooter() {
    return (
        <StyledLowResFooter>
            <FlexBox height='32px' $alignItems='center' $justifyContent='center'>
                <Svg cursor='pointer' width="24" height="21" viewBox="0 0 24 24">
                    <FacebookIcon />
                </Svg>
                <Svg cursor='pointer' width="28" height="25" viewBox="0 0 24 20" margin='0 0 0 20px'>
                    <VkIcon />
                </Svg>
                <Svg cursor='pointer' width="24" height="21" viewBox="0 0 24 24" margin='0 0 0 20px'>
                    <InstagramIcon />
                </Svg>
                <Svg cursor='pointer' width="24" height="20" viewBox="0 0 24 24" margin='0 0 0 20px'>
                    <TelegramIcon />
                </Svg>
                <Svg cursor='pointer' width="22" height="20" viewBox="0 0 22 22" margin='0 0 0 20px'>
                    <TicTocIcon />
                </Svg>
            </FlexBox>
            <Button fontSize='16px' padding='0' margin='5px 0'>
                <FlexBox>
                    <Img image={ru} margin='0 5px 0 0' />RU
                </FlexBox>
            </Button>
            <FlexBox flexWrap='wrap' height='90px' $alignItems='center' $justifyContent='center' width='100%'>
                <Txt width='100%' fontSize='0.8rem' hoverColor='lightRed' cursor='pointer'>
                    Пользовательское соглашение
                </Txt>
                <Txt width='100%' fontSize='0.8rem' hoverColor='lightRed' cursor='pointer'>
                    Политика обработки персональных данных
                </Txt>
                <Txt width='100%' fontSize='0.8rem' hoverColor='lightRed' cursor='pointer'>
                    Франшиза
                </Txt>
            </FlexBox>
            <FlexBox $alignItems='flex-end'>
                <Img image={visa} margin='0 0 2px 0' />
                <Img image={masterCard} margin='0 0 0 10px' />
            </FlexBox>
        </StyledLowResFooter>
    )
}