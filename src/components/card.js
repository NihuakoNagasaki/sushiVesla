import React from 'react';
import styled from 'styled-components';
import Button from './button';
import FlexBox, { StyledFlexBox } from './FlexBox';
import Ruble from './iconComponents/ruble';
import Img from './img';
import Svg from './svg';
import Txt, {StyledTxt} from './Txt';
import person from '../icons/people.svg'

const ImgContainer = styled.div`
    display: flex;
    align-items: center;
    min-width: 58.3%;
    
    @media screen and (max-width: 1360px) {
        min-width: 41.7%;
    }
    
    @media screen and (max-width: 1180px) {
        & > img {
            width: 90%;
            margin: auto;
            padding: 0;
        }
    }
    
    @media screen and (max-width: 460px) {
        width: 50%;
    }
`

const Container = styled.div`
    width: 100%;
`

const Persons = styled.div`
    display: flex;
    align-items: center;
    width: 60px;
    height: 26px;
    border-radius: 15px;
    background-color: rgba(67,67,67,0.1);
    padding: 3px 0 3px 14px;
    margin-bottom: 0.4vw;
`

const StyledCard = styled.div`
    width: 100%;
    height: 13.5vw;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    background-color: ${({ $backgroundColor, theme }) => $backgroundColor ? $backgroundColor : theme.colors.background.grey};
    
    @media screen and (max-width: 1400px) {
        height: 290px;
        
        & > ${StyledFlexBox} {
            width: 48.3%;
            padding: 20px 10px 20px 20px;
        }
        
        & > ${ImgContainer} > img {
            max-height: 290px;
        }
        
        & > ${StyledFlexBox} > ${Container} > ${StyledTxt}:first-child {
            font-size: 24px;
            line-height: 24px;
        }
        
        & > ${StyledFlexBox} > ${Container} > ${StyledTxt}:not(:first-child) {
            font-size: 13px;
            line-height: 16px;
        }
        
        & > ${StyledFlexBox} > ${Container}:last-child > ${StyledFlexBox} > ${StyledTxt} {
            font-size: 24px;
            line-height: 34px;
        }
        
        & > ${StyledFlexBox} > ${Container}:last-child > ${StyledFlexBox} > button {
            width: 100px;
            height: 37px;
            padding: 9px 10px;
            font-size: 14px;
        }
    }
    
    @media screen and (max-width: 1099px) {
        height: auto;
        
        padding: 10px 15px 0 15px;
        
        & > ${StyledFlexBox} {
            padding: 0 0 0 10px;
        }
        
        & ${Persons} {
            margin-top: 30px;
            margin-bottom: 20px;
        }
        
        & > ${StyledFlexBox} > ${Container} > ${StyledTxt}:first-child {
            font-size: 16px;
            line-height: 16px;
        }
        
        & > ${StyledFlexBox} > ${Container} > ${StyledTxt}:not(:first-child) {
            font-size: 12px;
            line-height: 14px;
            color: ${({ theme }) => theme.colors.text.grey};
        }
        
        & > ${StyledFlexBox} > ${Container}:last-child > ${StyledFlexBox} {
            justify-content: ${({ price }) => price ? 'space-between' : 'flex-end'};
            margin-bottom: 25px;
        }
        
        & > ${StyledFlexBox} > ${Container}:last-child > ${StyledFlexBox} > ${StyledTxt} {
            color: ${({ theme }) => theme.colors.text.lightRed};
            font-size: 17px;
            line-height: 24px;
        }
        
        & > ${StyledFlexBox} > ${Container}:last-child > ${StyledFlexBox} > ${StyledTxt} svg {
            width: 9px;
            height: 9px;
        }
        
        & > ${StyledFlexBox} > ${Container}:last-child > ${StyledFlexBox} > ${StyledTxt} path {
            fill: ${({ theme }) => theme.colors.text.lightRed};
        }
        
        & > ${StyledFlexBox} > ${Container}:last-child > ${StyledFlexBox} > button {
            width: 80px;
            height: 30px;
            padding: 0;
            font-size: 10px;
        }
    }
`

export default function Card({ $backgroundColor, image, header, description, weight, count, persons, price }) {
    return (
        <StyledCard $backgroundColor={$backgroundColor} price={price}>
            <ImgContainer>
                <Img width='auto' maxHeight='13.5vw' margin='auto' padding='6px 0' image={image} />
            </ImgContainer>
            <FlexBox flexDirection='column' flexGrow='2' padding='0.9vw' $justifyContent='space-between'>
                <Container>
                    <Txt fontSize='1.15vw' lineHeight='1.15vw' color='dark'>
                        {header}
                    </Txt>
                    <Txt display='-webkit-box' fontSize='0.67vw' color='lightDark' margin='5px 0 0 0'
                        overflow='hidden' textOverflow='ellipsis' lineClamp='3' boxOrient='vertical'>
                        {description}
                    </Txt>
                    <Txt display='inline' fontSize='0.67vw' color='lightDark'>
                        {weight && <>{weight} {typeof weight === 'string' ? 'л.' : 'г.'}</>} {count && <>{count} шт.</>}
                    </Txt>
                </Container>
                <Container>
                    {persons && <Persons>
                        <Img width='auto' image={person} />
                        <Txt fontSize='14px' fontWeight='bold' color='lightGrey' margin='2px 0 0 6px'>
                            {persons}
                        </Txt>
                    </Persons>
                    }
                    <FlexBox $justifyContent='flex-end' $alignItems='center'>
                        {price && <Txt fontSize='1.5vw' color='dark' margin='0 10px 0 0'>
                            {price}<Svg width="15" height="17px" viewBox="0 0 18 23"><Ruble /></Svg>
                        </Txt>}
                        <Button cursor='pointer' padding='5% 10px' color='white' height='2vw' fontSize='0.7vw'
                            fontWeight='bold'
                            borderRadius='4px' $backgroundColor='lightRed' uppercase>
                            {price ? 'В корзину' : 'Выбрать'}
                        </Button>
                    </FlexBox>
                </Container>
            </FlexBox>
        </StyledCard>
    )
}