import { supyItems } from "../testData/supy"



export default async function GetSupy() {
    try {
        let response = await new Promise(resolve => setTimeout(() => resolve(supyItems), 1500))
        return response
    } catch (error) {
        return (error)
    }

}