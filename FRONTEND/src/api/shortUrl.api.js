import axiosInstance from '../utils/axiosInstace';

export const createShortUrl = async (url) => {
   const {data}=  await axiosInstance.post('/api/create', { url })
   return data; // Assuming the backend returns the full URL as a response
 
}   