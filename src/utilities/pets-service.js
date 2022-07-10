import axios from "axios"
import { getToken } from "./users-service"

const BASE_URL = 'http://localhost:3005/api/v1/pets'
export const getPets = async () => {
    try {
        const options = {}
        headers: {
            Authorization:`Bearer ${getToken()}`
        }
        const response = await axios.get(`${BASE_URL}`, options)
        console.log(response)
    } catch(e) {
        console.log(e)
    }
}
