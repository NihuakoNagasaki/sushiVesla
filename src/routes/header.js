import React, {useContext} from 'react';
import { AdaptiveContext } from '../App';
import HighResHeader from '../components/desktop/headerHighResolution';
import LowResHeader from '../components/mobile/lowResolutionHeader';

export default function Header() {
    const {mobile} = useContext(AdaptiveContext)
    return mobile ? <LowResHeader/> : <HighResHeader/>
}