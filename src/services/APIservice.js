import axios from 'axios'

const petition = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getPokemon(id){
        return petition.get(`/${id}`)
    }
}