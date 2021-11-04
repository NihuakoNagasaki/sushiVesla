import React, {useContext, useEffect} from 'react';
import styled from "styled-components";
import GetSushi from '../actions/sushi';
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

export default function Sushi(props) {
    const {mobile} = useContext(AdaptiveContext)
    

    useEffect(() => {
        let isCancelled = false
        document.title = "СушиВесла - суши"

        GetSushi().then(function (result) {
            if (!isCancelled) {
                props.getАrrayOfSushi(result)
            }
        })
        return () => {
            isCancelled = true;
        };
    }, [])

    return (<>
        {mobile && <Container>
            <Txt fontSize='17px' lineHeight='24px' fontWeight='bold' color='darkGrey'>Суши</Txt>
        </Container>
        }
        {props.arrayOfSushi? <Grid gridTemplateColumns="repeat(3, 1fr)" gap="10px" margin="1.5% 0 0 0" padding="0 30px 0 30px">
            {props.arrayOfSushi.map(roll => <Card key={roll.id} image={roll.image} header={roll.name}
                                          description={roll.description} count={roll.count} price={roll.price}
                                          weight={roll.weight} $backgroundColor={roll.color}
                                          personCount={roll.personCount}/>)}
        </Grid> : <Loader/>}
    </>
)
}
