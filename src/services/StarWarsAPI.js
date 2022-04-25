/**
 * Star Wars API 
 * 
 * <https://swapi.dev/api/
 */

import axios from "axios"

const BASE_URL = 'https://swapi.dev/api/'

/**
 * Get all Films
 */

const getFilms = async () => {
    const res = await axios.get(`${BASE_URL}/films`)
    return res.data
}

export default {
    getFilms
}
