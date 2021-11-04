import React, {useContext, useEffect} from 'react';
import styled from "styled-components";
import GetTempura from '../actions/tempura';
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

export default function Temputa(props) {
    const {mobile} = useContext(AdaptiveContext)
    

    useEffect(() => {
        let isCancelled = false
        document.title = "СушиВесла - темпура"

        GetTempura().then(function (result) {
            if (!isCancelled) {
                props.getАrrayOfTempura(result)
            }
        })
        return () => {
            isCancelled = true;
        };
    }, [])

    return (<>
        {mobile && <Container>
            <Txt fontSize='17px' lineHeight='24px' fontWeight='bold' color='darkGrey'>Темпура</Txt>
        </Container>
        }
        {props.arrayOfTempura? <Grid gridTemplateColumns="repeat(3, 1fr)" gap="10px" margin="1.5% 0 0 0" padding="0 30px 0 30px">
            {props.arrayOfTempura.map(roll => <Card key={roll.id} image={roll.image} header={roll.name}
                                          description={roll.description} count={roll.count} price={roll.price}
                                          weight={roll.weight} $backgroundColor={roll.color}
                                          personCount={roll.personCount}/>)}
        </Grid> : <Loader/>}
    </>
)
}
