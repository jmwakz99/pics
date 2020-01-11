import axios from 'axios';
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 13d96e04eed3035119c0446fb9cc4b62d8a4b0a546408bfbf92731b0f6076602'
    }
})

