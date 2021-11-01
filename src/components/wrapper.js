import React, {useContext} from 'react';
import { AdaptiveContext } from '../App';
import HighResWrapper from './desktop/wrapperHighResolution';
import LowResWrapper from './mobile/lowResolutionWrapper';


export default function Wrapper({children}) {
    const mobile = useContext(AdaptiveContext)
    return mobile ? <LowResWrapper>{children}</LowResWrapper> : <HighResWrapper>{children}</HighResWrapper>
}