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

const getFilms = async (page) => {
    const res = await axios.get(`${BASE_URL}/films/?page=${page}`)
    return res.data
}

/**
 * Get film
 */

 const getFilm = async (id) => {
    const res = await axios.get(`${BASE_URL}/films/${id}`)
    return res.data
}

/**
 * Get all people
 */

const getPeople = async (page) => {
    const res = await axios.get(`${BASE_URL}/people/?page=${page}`)
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
    getFilm,
    getPerson,
    getPeople
}
