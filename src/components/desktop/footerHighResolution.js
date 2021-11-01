import React from 'react';
import styled from 'styled-components';
import FlexBox, { StyledFlexBox } from "../FlexBox";
import Img from '../img';
import Txt, { StyledTxt } from '../Txt';

import Svg from '../svg';
import FacebookIcon from '../iconComponents/facebook';
import VkIcon from '../iconComponents/Vk';
import InstagramIcon from '../iconComponents/instagram';
import TelegramIcon from '../iconComponents/telegram';
import TicTocIcon from '../iconComponents/tiltoc';
import MarkerIcon from '../iconComponents/marker';
import masterCard from "../../icons/master-card.svg";
import visa from "../../icons/visa.svg";
import googlePlay from "../../icons/google-play.png"
import appStore from "../../icons/app-store.png"

const StyledFooter = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 61px;
    z-index: 100;
    background-color: ${({ theme }) => theme.colors.background.white};
    
    @media screen and (max-width: 1500px) {
        ${StyledTxt} {
            font-size: 0.8rem;
        }
    }
    
    @media screen and  (max-width: 1360px) {
        & > ${StyledFlexBox} {
            flex-wrap: wrap;
            justify-content: center;
        }
        
        & > ${StyledFlexBox} > ${StyledFlexBox}:last-child {
            margin-left: 20px;
        }
    }
`

const Container = styled.div`
    margin: ${({ margin }) => margin ? margin : ''};
`

export default function HighResFooter() {
    return (
        <StyledFooter>
            <FlexBox width='calc(100% - 80px)' height='100%' $justifyContent='space-between' $alignItems='center' margin='0 auto'>
                <FlexBox>
                    <Container margin="-5px 0 0 0 ">
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
                    </Container>
                    <FlexBox $alignItems='center' margin='0 0 0 40px'>
                        <Svg width="22" height="21" viewBox="0 0 438.536 438.536" cursor='pointer'>
                            <MarkerIcon />
                        </Svg>
                        <Txt display='inline' fontSize='1rem' hoverColor='lightRed' cursor='pointer'
                            margin='0 0 0 5px'>
                            Ближайшие СушиВесла
                        </Txt>
                    </FlexBox>
                </FlexBox>

                <FlexBox margin='0 0 0 5%'>
                    <Txt fontSize='1rem' hoverColor='lightRed' cursor='pointer'>
                        Акции
                    </Txt>
                    <Txt fontSize='1rem' hoverColor='lightRed' cursor='pointer' margin='0 0 0 20px'>
                        Франшиза
                    </Txt>
                    <Txt fontSize='1rem' hoverColor='lightRed' cursor='pointer' margin='0 0 0 20px'>
                        Вакансии
                    </Txt>
                    <Txt fontSize='1rem' hoverColor='lightRed' cursor='pointer' margin='0 0 0 20px'>
                        Отзывы
                    </Txt>
                    <Txt fontSize='1rem' hoverColor='lightRed' cursor='pointer' margin='0 0 0 20px'>
                        Политика обработки персональных данных
                    </Txt>
                </FlexBox>
                <FlexBox $alignItems='center'>
                    <Img image={masterCard} />
                    <Img image={visa} margin='0 0 0 5px' />
                    <Img image={googlePlay} maxHeight='25px' margin='0 0 0 5px' />
                    <Img image={appStore} maxHeight='25px' margin='0 0 0 5px' />
                </FlexBox>

            </FlexBox>
        </StyledFooter>
    )
}