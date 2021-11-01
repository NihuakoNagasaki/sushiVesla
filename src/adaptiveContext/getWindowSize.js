import {useEffect, useState} from "react";

export default function GetWindowSize() {
    const [windowSize, setWindow] = useState({
        width: undefined,
        height: undefined
    })
    
    useEffect(() => {
        function changeSize() {
            setWindow({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener("resize", changeSize);
        changeSize()
        return () => window.removeEventListener("resize", changeSize);
    }, [])
    return windowSize
}