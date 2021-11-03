import { useContext } from "react"
import { AdaptiveContext } from "../App"
import HighResMainPage from "../components/desktop/highResolutionMainPage"
import LowResMainPage from "../components/mobile/lowResolutionMainPage"


export default function MainPage() {
    const {mobile} = useContext(AdaptiveContext)
    
    return mobile ? <LowResMainPage/> : <HighResMainPage/>
}