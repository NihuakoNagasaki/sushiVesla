import React, { useContext, useEffect, useState } from 'react';
import styled from "styled-components";
import GetCommonRolls from '../actions/commonRolls';
import { AdaptiveContext } from '../App';
import Card from '../components/card';
import Grid from '../components/grid';
import Loader from '../components/loader';
import Txt from '../components/Txt';
import { commonRolls } from '../testData/rolls';


const Container = styled.div`
    width: 100%;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background.grey};
`

export default function Common(props) {
    const { mobile } = useContext(AdaptiveContext)   


    useEffect(() => {
        let isCancelled = false
        document.title = "СушиВесла - Роллы"

        GetCommonRolls().then(function (result) {
            if (!isCancelled) {
                props.getArrayOfCommon(result)
            }
        })
        return () => {
            isCancelled = true;
        };
    })
    
    return (<>
        {mobile && <Container>
            <Txt fontSize='17px' lineHeight='24px' fontWeight='bold' color='darkGrey'>Роллы</Txt>
        </Container>
        }
        {props.arrayOfCommon ? <Grid  gridTemplateColumns="repeat(3, 1fr)" gap="10px" margin="1.5% 0 0 0" padding="0 30px 0 30px">
            {props.arrayOfCommon.map(roll => <Card key={roll.id} image={roll.image} header={roll.name}
                description={roll.description} count={roll.count} price={roll.price}
                weight={roll.weight} $backgroundColor={roll.color}
                persons={roll.personCount} />)}
        </Grid> : <Loader />}
    </>
    )
}
