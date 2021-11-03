import { commonRolls } from "../testData/rolls"



export default async function GetCommonRolls() {
    try {
        let response = await new Promise(resolve => setTimeout(() => resolve(commonRolls), 1500))
        return response
    } catch (error) {
        return (error)
    }

}