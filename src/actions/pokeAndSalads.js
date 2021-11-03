import { pokeAndSaladsItems } from "../testData/pokeAndSalads"



export default async function GetPokeAndSalads() {
    try {
        let response = await new Promise(resolve => setTimeout(() => resolve(pokeAndSaladsItems), 1500))
        return response
    } catch (error) {
        return (error)
    }

}