import { sushiItems } from "../testData/sushi"



export default async function GetSushi() {
    try {
        let response = await new Promise(resolve => setTimeout(() => resolve(sushiItems), 1500))
        return response
    } catch (error) {
        return (error)
    }

}