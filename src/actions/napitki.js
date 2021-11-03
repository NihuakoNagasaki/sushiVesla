import { napitkiItems } from "../testData/napitki"



export default async function GetNapitki() {
    try {
        let response = await new Promise(resolve => setTimeout(() => resolve(napitkiItems), 1500))
        return response
    } catch (error) {
        return (error)
    }

}