/**
 * Star Wars API 
 * 
 * <https://swapi.dev/api/
 */

import axios from "axios"

const BASE_URL = 'https://swapi.dev/api/'

/**
 * Get all films
 */

const getFilms = async () => {
    const res = await axios.get(`${BASE_URL}/films`)
    return res.data
}

/**
 * Get all people
 */

const getPeople = async () => {
    const res = await axios.get(`${BASE_URL}/people`)
    return res.data
}

/**
 * Get person
 */

 const getPerson = async (id) => {
    const res = await axios.get(`${BASE_URL}/people/${id}`)
    return res.data
}

export default {
    getFilms,
    getPerson,
    getPeople
}
