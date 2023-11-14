import axios from "axios";

export async function fetchPictures(searchInput, page) {
    
    const BASE_URL = 'https://pixabay.com/api/';
    const KEY = "39538496-5692811f32f5eeb2890664c8c";

    const result = await axios.get(`${BASE_URL}?`, {
        params: {
            key: KEY,
            q: searchInput,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: 'true',
            per_page: 12,
            page: page,
        },
    });
    
    return result;
}
