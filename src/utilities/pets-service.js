import axios from 'axios'
import { getToken } from './users-service'

const BASE_URL = 'https://khonflict.github.io/Block-Pet-Backend/'

const setOptions = () => {
    return {headers: {
        // We are attaching the token to our Authorization header
        //  Prefacing with 'Bearer' is recommended in HTTP specification
        'Authorization': `Bearer ${getToken()}`,
        'Content-Type': 'application/json'
    }}
}
export const getPets = async () => {
    try {
        const response = await axios.get(BASE_URL, setOptions())
        // console.log(response)
        return response
    } catch(e) {
        console.log(e)
    }
}

export const createPet = async petDetails => {
    try{
        const createdPet = await axios.post(BASE_URL, petDetails, setOptions())
        return createdPet
    } catch(e) {
        console.log(e)
    }
}

export const updatePet = async newPetDetails => {
    try{
        const updatedPet = await axios.put(`${BASE_URL}/${newPetDetails._id}`, newPetDetails, setOptions())
        return updatedPet
    } catch(e) {
        console.log(e)
    }
}

export const deletePet = async id => {
    try{
        const deletedPet = await axios.delete(`${BASE_URL}/${id}`, setOptions())
        return deletedPet
    } catch(e) {
        console.log(e)
    }
}
