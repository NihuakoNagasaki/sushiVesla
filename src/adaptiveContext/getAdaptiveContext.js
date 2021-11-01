import {useEffect, useState} from "react";
import GetWindowSize from "./getWindowSize";


export default function GetAdaptiveSize() {
    const [mobile, setMobile] = useState();
    const {width: windowSize} = GetWindowSize();
    
    useEffect(() => {
        if (windowSize && windowSize <= 1100) {
            setMobile(true);
        } else if (windowSize && windowSize > 1100) {
            setMobile(false);
        }
    }, [windowSize])

    return mobile;
}