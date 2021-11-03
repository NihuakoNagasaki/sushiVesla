import { setsItems } from "../testData/sets"



export default async function GetSets() {
    try {
        let response = await new Promise(resolve => setTimeout(() => resolve(setsItems), 1500))
        return response
    } catch (error) {
        return (error)
    }

}