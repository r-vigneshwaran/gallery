import axios from 'axios'


const ApiCall = async (page_no, client_id, collection_id) => {
        const res = await axios.get(`https://api.unsplash.com/collections/${collection_id}/photos?page=${page_no}&client_id=${client_id}`)
        return res
}


export default ApiCall