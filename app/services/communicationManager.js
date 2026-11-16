import axios from 'axios'

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})

export async function getPokemon() {
    const response = await api.get('pokemon')
    return response.data
}


export async function getPokemonById(id) {
    const response = await api.get(`pokemon/${id}`)
    return response.data
}

