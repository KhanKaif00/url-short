import { getCustomShortUrl, saveShortUrl } from "../dao/short_url.js";
import { generateNanoid } from "../utils/helper.js";


export const createShortUrlWithoutUserService= async (url)=>{
    
  const shortUrl =  generateNanoid(7); // we can directly use nanoid(7) here but we are using helper function to generate short url,because
  if(!shortUrl) throw new Error("Short URL not generated")
  await saveShortUrl( shortUrl,url); 
  
    return shortUrl
}

export const createShortUrlWithUserService= async (url,userId,slug=null)=>{
    
  const shortUrl = slug ||  generateNanoid(7); // we can directly use nanoid(7) here but we are using helper function to generate short url,because
  const exists = await getCustomShortUrl(slug);

  if(exists) throw new Error(" this Custom Short URL already exists")


  await saveShortUrl( shortUrl,url,userId); 
  
    return shortUrl
}