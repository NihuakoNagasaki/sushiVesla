import React, {useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import GetBakedRolls from '../actions/bakedRolls';
import { AdaptiveContext } from '../App';
import Card from '../components/card';
import Grid from '../components/grid';
import Loader from '../components/loader';
import Txt from '../components/Txt';



const Container = styled.div`
    width: 100%;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.background.grey};
`

export default function Baked(props) {
    const {mobile} = useContext(AdaptiveContext)
    
    console.log(props.test);
    useEffect(() => {
        let isCancelled = false
        document.title = "СушиВесла - Запеченные Роллы"

        GetBakedRolls().then( (result) => {
            if (!isCancelled) {
                props.getArrayOfBaked(result)                
            }
        })
        return () => {
            isCancelled = true;
          };
    })

    return (<>
        {mobile && <Container>
            <Txt fontSize='17px' lineHeight='24px' fontWeight='bold' color='darkGrey'>Запеченные Роллы</Txt>
        </Container>
        }
        {props.arrayOfBaked ? <Grid gridTemplateColumns="repeat(3, 1fr)" gap="10px" margin="1.5% 0 0 0" padding="0 30px 0 30px">
            {props.arrayOfBaked.map(roll => <Card key={roll.id} image={roll.image} header={roll.name}
                                          description={roll.description} count={roll.count} price={roll.price}
                                          weight={roll.weight} $backgroundColor={roll.color}
                                          persons={roll.personCount}/>)}
        </Grid> : <Loader/>}
    </>
)
}