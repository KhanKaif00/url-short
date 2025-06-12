import { saveShortUrl } from "../dao/short_url.js";
import { generateNanoid } from "../utils/helper.js";


export const createShortUrlWithoutUserService= async (url)=>{
    
  const shortUrl = await generateNanoid(7); // we can directly use nanoid(7) here but we are using helper function to generate short url,because
  if(!shortUrl) throw new Error("Short URL not generated")
  await saveShortUrl( shortUrl,url); 
  
    return shortUrl
}

export const createShortUrlWithUserService= async (url,userId)=>{
    
  const shortUrl = await generateNanoid(7); // we can directly use nanoid(7) here but we are using helper function to generate short url,because
  await saveshortUrl( shortUrl,url,userId); 
  
    return shortUrl
}