import { sauseItems } from "../testData/sause"



export default async function GetSause() {
    try {
        let response = await new Promise(resolve => setTimeout(() => resolve(sauseItems), 1500))
        return response
    } catch (error) {
        return (error)
    }

}