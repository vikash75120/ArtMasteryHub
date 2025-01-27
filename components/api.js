import axios from "axios";

export const unsplashApi = async (boardId = '8721905') => {
    const url = `https://api.unsplash.com/collections/${boardId}/photos?page=${1}&per_page=30&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`;
    const response = await axios.get(url);
    return response.data;
};

export const deviantartApi = async () => {
    const response = await fetch(`/api/deviantartApi?userId=anthonypresley`);
    const data = await response.json();
    console.log("testing data", data);
    return data;
};
