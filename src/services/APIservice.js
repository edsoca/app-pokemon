import axios from 'axios'

const petition = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getPokemons() {
        //Com a paràmetre de get posem l'última part de l'URL
        return petition.get('?limit=10')
    },
    getSinglePokemon(id){
        return petition.get(`/${id}`)
    }
}