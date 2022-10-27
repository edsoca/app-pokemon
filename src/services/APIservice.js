import axios from 'axios'

const petition = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getPhotos() {
        //Com a paràmetre de get posem l'última part de l'URL
        return petition.get('/photos?_limit=10')
    },
    getSinglePhoto(id){
        return petition.get(`/photos/${id}`)
    }
}