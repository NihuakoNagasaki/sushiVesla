import { friedItems } from "../testData/friedRolls"



export default async function GetFriedRolls() {
    try {
        let response = await new Promise(resolve => setTimeout(() => resolve(friedItems), 1500))        
        return response
    } catch (error) {
        return (error)
    }

}