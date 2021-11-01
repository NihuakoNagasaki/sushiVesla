import { useContext } from "react"
import { AdaptiveContext } from "../App"
import HighResMainPage from "../components/desktop/highResolutionMainPage"


export default function MainPage() {
    const {mobile} = useContext(AdaptiveContext)
    
    return mobile ? <h1>Телефончик</h1> : <HighResMainPage/>
}