import { bakedItems } from "../testData/bakedRolls";


export default async function GetBakedRolls() {
    try {
        let response = await new Promise(resolve => setTimeout(() => resolve(bakedItems), 1500))        
        return response
    } catch (error) {
        return (error)
    }

}