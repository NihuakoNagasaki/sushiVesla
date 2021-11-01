import React from 'react';
import styled from 'styled-components';
import Img, { StyledImg } from '../img';
import { NavLink } from "react-router-dom";
import Txt from '../Txt';
import Column from "../column";
import rolls from "../../img/rolls.png";
import sushi from "../../img/sushi.png";
import sets from "../../img/sets.png";
import bakedRolls from "../../img/baked_rolls.png";
import leaf from "../../img//leaf.png";
import pattern from "../../img/pattern.png";
import friedRolls from "../../img/fried_rolls.png";
import wokTopLeaf from "../../img/wok_top_leaf.png";
import wok from "../../img/wok.png";
import wokBottomLeaf from "../../img/wok_bottom_leaf.png";
import soupsShadows from "../../img/soups_shadows.png";
import soupPattern from "../../img/soup_pattern.png";
import soups from "../../img/soups.png";
import tempura from "../../img/tempura.png";
import beverages from "../../img/beverages.png";

const StyledHighResMainPage = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: 41.3vw;
    padding: 0 30px 0 30px  ;   
`

const Row = styled(NavLink)`
    display: ${({ display }) => display ? display : 'block'};
    justify-content: ${({ $justifyContent }) => $justifyContent ? $justifyContent : ''};
    align-items: ${({ $alignItems }) => $alignItems ? $alignItems : ''};
    width: 100%;
    height: ${({ height }) => height ? height : '100%'};
    background-color: ${({ $backgroundColor, theme }) => $backgroundColor && theme.colors.background[$backgroundColor]};
    background: ${({ background }) => background ? background : ''};
    background-size: ${({ $backgroundSize }) => $backgroundSize ? $backgroundSize : ''};
    background-position-y: ${({ $backgroundPositionY }) => $backgroundPositionY ? $backgroundPositionY : ''};
    background-position-x: ${({ $backgroundPositionX }) => $backgroundPositionX ? $backgroundPositionX : ''};
    transition: ${({ transition }) => transition ? transition : ''};
    overflow: ${({ overflow }) => overflow ? overflow : ''};
    cursor: pointer;
    text-decoration: none;
    
    &:hover {
        ${({ $hoverStyle }) => $hoverStyle ? $hoverStyle : ''}
    }
    
    ${StyledImg} {
        transition: ${({ transition }) => transition ? transition : ''};
        transform: ${({ transform }) => transform ? transform : ''};
    }
    &:hover ${StyledImg} {
        transform: ${({ $hover }) => $hover ? $hover : ''};
    }
`

const Container = styled.div`
    display: ${({ display }) => display ? display : 'inline-block'};;
    vertical-align: top;
    height: ${({ height }) => height ? height : ''};
    width: ${({ width }) => width ? width : '50%'};
    background-color: ${({ $backgroundColor, theme }) => $backgroundColor && theme.colors.background[$backgroundColor]};
`

export default function HighResMainPage() {
    return (
        <StyledHighResMainPage>
            <Column $backgroundColor='blue' zIndex='10' position='relative' overflow='visible'>
                <Img zIndex='100' image={leaf} width='22%' position='absolute' top='19.5%' right='-13%' />
                <Row to='/sets' transform='translateY(-7.9%)' $hover='translateY(-0.5%)'
                    transition='transform 1s'>
                    <Img image={sets} margin='0 0 -10% 0' width='90%' />
                    <Txt color='white' fontSize='3.5vw' fontWeight='bold' uppercase margin='1% 0 0 15%'>
                        Сеты
                    </Txt>
                </Row>
            </Column>
            <Column $backgroundColor='red' position='relative'>
                <Row to='/rolls' height='fit-content' display='flex' $alignItems='center' transform='translateX(-16%)'
                    $hover='translateX(8%)' transition='transform 1s'>
                    <Img image={rolls} margin='2% 0 0 0' width='50%' display='inline-block' />
                    <Txt display='inline-block' color='white' fontSize='1.5vw' fontWeight='bold' uppercase
                        padding='0 0 5% 7%'>
                        Роллы
                    </Txt>
                </Row>
                <Row to='/sushi' height='fit-content' display='flex' $justifyContent='space-between'
                    $alignItems='center'
                    transform='translateX(41%)' $hover='translateX(15%)' transition='transform 1s'>
                    <Txt display='inline-block' color='white' fontSize='1.5vw' fontWeight='bold' uppercase
                        padding='0 0 7% 24.5%'>
                        Суши
                    </Txt>
                    <Img image={sushi} margin='-6% 0 0 0' width='50%' display='inline-block' />
                </Row>
                <Row to='/fried-rolls' height='fit-content' display='flex' $alignItems='center'
                    transform='translateX(-20%)'
                    $hover='translateX(8%)' transition='transform 1s'>
                    <Img image={friedRolls} margin='-6% 0 0 0' width='50%' display='inline-block' />
                    <Txt display='inline-block' color='white' fontSize='1.2vw' fontWeight='bold' uppercase
                        padding='0 0 5% 7%' lineHeight='1.7vw'>
                        Жареные<br />роллы
                    </Txt>
                </Row>
                <Row to='/baked-rolls' height='fit-content' display='flex' $justifyContent='space-between'
                    $alignItems='center'
                    transform='translateX(24.5%)' $hover='translateX(0%)' transition='transform 1s'>
                    <Txt display='inline-block' color='white' fontSize='1.2vw' fontWeight='bold' uppercase
                        padding='0 0 10% 11.5%' textAlign='right' lineHeight='1.7vw'>
                        Запеченные<br />роллы
                    </Txt>
                    <Img image={bakedRolls} margin='-6% 0 0 0' width='50%' display='inline-block' />
                </Row>
                <Img zIndex='100' image={pattern} width='30%' position='absolute' bottom='4%' left='-15%' />
            </Column>
            <Column position='relative' zIndex='10'>
                <Row to='/voki' height='100%' background={`#fff url(${wok}) no-repeat`} $backgroundPositionY='bottom'
                    $backgroundPositionX='-2vw'
                    $backgroundSize='144%' $hoverStyle='background-position-x: 0'
                    transition='background-position-x 1s'>
                    <Img image={wokTopLeaf} width='27%' margin='0 auto' />
                    <Txt color='red' fontSize='3.5vw' lineHeight='3.5vw' fontWeight='bold' uppercase
                        padding='9% 10% 0 10%'
                        margin='-20% 0 0 0'>
                        Вок<br />Конструк<br />Тор
                    </Txt>
                    <Txt color='red' fontSize='1vw' lineHeight='1vw' fontWeight='bold' uppercase
                        padding='10% 10% 0 10%'
                        margin='-9% 0 0 0'>
                        Собери свой
                    </Txt>
                    <Img image={wokBottomLeaf} position='absolute' width='27%' right='0' bottom='0' />
                </Row>
            </Column>
            <Column $backgroundColor='green' position='relative'>
                <Row to='/supy' height='50%' $backgroundColor='red'
                    background={`#f32b2b url(${soupsShadows}) no-repeat`}
                    $backgroundSize='106%' transform='rotate(-15deg)' $hover='rotate(-45deg)'
                    transition='all 1s'>
                    <Img display='inline' image={soups} width='82%' margin='-20.5% 0 0 10.5%' />
                    <Txt fontSize='3.5vw' fontWeight='bold' color='white' uppercase padding='2% 0 0 13%'>
                        Супы
                    </Txt>
                </Row>
                <Container height='50%' width='100%' $backgroundColor='green'>
                    <Row to='/tempura' height='50%' transform='translateX(-20%)' $hover='translateX(20%)'
                        transition='all 1s'>
                        <Container>
                            <Img image={tempura} width='75%' margin='6% 0 0 0' />
                        </Container>
                        <Container height='50%'>
                            <Txt display='block' color='red' textAlign='right' fontSize='1.8vw' fontWeight='bold'
                                uppercase
                                padding='35% 14% 0 0'>
                                Темпура
                            </Txt>
                        </Container>
                    </Row>
                    <Row to='/napitki' height='50%' transform='translateY(0)' $hover='translateY(-20%)'
                        transition='all 1s'>
                        <Container height='50%'>
                            <Txt display='block' color='red' textAlign='right' fontSize='1.8vw' fontWeight='bold'
                                uppercase
                                padding='20% 7% 0 0'>
                                Напитки
                            </Txt>
                        </Container>
                        <Container>
                            <Img image={beverages} width='11vw' margin='0 0 0 10%' />
                        </Container>
                    </Row>
                </Container>
                <Img image={soupPattern} width='23%' position='absolute' top='41%' right='0' />
            </Column>
        </StyledHighResMainPage>
    )
}