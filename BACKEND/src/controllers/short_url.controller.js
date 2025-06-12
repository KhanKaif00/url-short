import { createShortUrlWithoutUserService } from "../services/short_url.service.js";
import { getShortUrl } from "../dao/short_url.js";
import wrapAsync from "../utils/tryCatchWrapper.js"

export const createShortUrl = wrapAsync(async(req, res) => { // here we use const because there can ce multiple exports in this file default ham sirf ek hi export kar sakte hain
  
    
   const {url} = req.body;
  const shortUrl = await createShortUrlWithoutUserService(url); 
   res.send(process.env.APP_URL + shortUrl)


   
})

export const redirectFromShortUrl = wrapAsync(async (req, res) => {
  const {id} = req.params; 
  const url = await getShortUrl(id)
  if(!url) {
    throw new Error("Short URL not found")
  }
  
  res.redirect(url.full_url)

})