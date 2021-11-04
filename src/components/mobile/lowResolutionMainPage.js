import React from 'react';
import styled from 'styled-components';
import Img from '../img';
import Txt from '../Txt';
import {Link} from "react-router-dom";
import sets from '../../img/sets_phone.png';
import rolls from '../../img/rolls_phone.png';
import sushi from '../../img/sushi_phone.png';
import bakedRolls from '../../img/baked_rolls_phone.png';
import wok from '../../img/wok_phone.png';
import tempura from '../../img/tempura_phone.png';
import friedRolls from '../../img/fried_rolls_phone.png';
import beverages from '../../img/beverages_phone.png';
import soups from '../../img/soups_phone.png';
import sauces from '../../img/sauces_phone.png';
import salad from '../../img/salad_phone.png';

const StyledLowResMainPageCategory = styled.div`
padding: 0 15px;
display: flex;
flex-direction: column;
`

const Container = styled.div`
width: 50%;
height: 120px;
`

const StyledLink = styled(Link)`
Text-decoration: none;
height: 120px;
display: flex;
align-items: center;
margin: ${({ margin }) => margin ? margin : ''};
`


export default function LowResMainPage() {
    return (
        <StyledLowResMainPageCategory>
            <StyledLink to='/rolls' margin='20px 0 0 0'>
                <Container>
                    <Img image={rolls} width='fit-content' margin='0 auto' />
                </Container>
                <Txt fontSize='22px' fontWeight='bold' uppercase color='dark'>
                    Роллы
                </Txt>
            </StyledLink>
            <StyledLink to='/sets'>
                <Container>
                    <Img image={sets} width='fit-content' margin='0 auto' />
                </Container>
                <Txt fontSize='22px' fontWeight='bold' uppercase color='dark'>
                    Сеты
                </Txt>
            </StyledLink>
            <StyledLink to='/sushi'>
                <Container>
                    <Img image={sushi} width='fit-content' margin='0 auto' />
                </Container>
                <Txt fontSize='22px' fontWeight='bold' uppercase color='dark'>
                    Суши
                </Txt>
            </StyledLink>
            <StyledLink to='/voki'>
                <Container>
                    <Img image={wok} width='fit-content' margin='0 auto' />
                </Container>
                <Txt fontSize='22px' fontWeight='bold' uppercase color='dark'>
                    Воки
                </Txt>
            </StyledLink>
            <StyledLink to='/baked-rolls'>
                <Container>
                    <Img image={bakedRolls} width='fit-content' margin='0 auto' />
                </Container>
                <Txt fontSize='22px' fontWeight='bold' uppercase color='dark'>
                    Запеченные <br /> роллы
                </Txt>
            </StyledLink>
            <StyledLink to='/fried-rolls'>
                <Container>
                    <Img image={friedRolls} width='fit-content' margin='0 auto' />
                </Container>
                <Txt fontSize='22px' fontWeight='bold' uppercase color='dark'>
                    Жареные <br /> роллы
                </Txt>
            </StyledLink>
            <StyledLink to='/supy'>
                <Container>
                    <Img image={soups} width='fit-content' margin='0 auto' />
                </Container>
                <Txt fontSize='22px' fontWeight='bold' uppercase color='dark'>
                    Супы
                </Txt>
            </StyledLink>
            <StyledLink to='/tempura'>
                <Container>
                    <Img image={tempura} width='fit-content' margin='0 auto' />
                </Container>
                <Txt fontSize='22px' fontWeight='bold' uppercase color='dark'>
                    Темпура
                </Txt>
            </StyledLink>
            <StyledLink to='/napitki'>
                <Container>
                    <Img image={beverages} width='fit-content' margin='0 auto' />
                </Container>
                <Txt fontSize='22px' fontWeight='bold' uppercase color='dark'>
                    Напитки
                </Txt>
            </StyledLink>
            <StyledLink to='/sause'>
                <Container>
                    <Img image={sauces} width='fit-content' margin='0 auto' />
                </Container>
                <Txt fontSize='22px' fontWeight='bold' uppercase color='dark'>
                    Соусы
                </Txt>
            </StyledLink>
            <StyledLink to='/salad'>
                <Container>
                    <Img image={salad} width='fit-content' margin='0 auto' />
                </Container>
                <Txt fontSize='22px' fontWeight='bold' uppercase color='dark'>
                    Салаты
                </Txt>
            </StyledLink>
        </StyledLowResMainPageCategory>
    )
}