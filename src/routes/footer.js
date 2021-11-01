import React, {useContext} from 'react';
import { AdaptiveContext } from '../App';
import HighResFooter from '../components/desktop/footerHighResolution';
import LowResFooter from '../components/mobile/lowResolutionFooter';


export default function Footer() {
    const {mobile} = useContext(AdaptiveContext)
    return mobile ? <LowResFooter/> : <HighResFooter/>
}