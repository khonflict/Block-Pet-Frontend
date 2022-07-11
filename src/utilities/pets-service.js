import axios from 'axios'
import { getToken } from './users-service'

const BASE_URL = 'http://localhost:3005/api/v1/Pets'

export const getPets = async () => {
    try {
        const options = {
            headers: {
                // We are attaching the token to our Authorization header
                //  Prefacing with 'Bearer' is recommended in HTTP specification
                Authorization: `Bearer ${getToken()}`
            }
        }
    
        const response = await axios.get(BASE_URL, options)
        console.log(response)
        return response
    } catch(e) {
        console.log(e)
    }
}