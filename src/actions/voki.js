import { vokiItems } from "../testData/voki"



export default async function GetVoki() {
    try {
        let response = await new Promise(resolve => setTimeout(() => resolve(vokiItems), 1500))
        return response
    } catch (error) {
        return (error)
    }

}