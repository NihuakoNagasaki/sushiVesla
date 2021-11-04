import { tempuraItems } from "../testData/tempura"



export default async function GetTempura() {
    try {
        let response = await new Promise(resolve => setTimeout(() => resolve(tempuraItems), 1500))
        return response
    } catch (error) {
        return (error)
    }

}