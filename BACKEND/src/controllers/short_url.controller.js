import { createShortUrlWithoutUserService, createShortUrlWithUserService } from "../services/short_url.service.js";
import { getShortUrl } from "../dao/short_url.js";
import wrapAsync from "../utils/tryCatchWrapper.js"

export const createShortUrl = wrapAsync(async(req, res) => { // here we use const because there can ce multiple exports in this file default ham sirf ek hi export kar sakte hain
   const data = req.body;
      let shortUrl;
      console.log("req.user", req.user)

      if (req.user) {
        shortUrl = await createShortUrlWithUserService(data.url, req.user._id,data.slug);
      } else {
        shortUrl = await createShortUrlWithoutUserService(data.url);
      }
   
    res.status(201).json({
        shortUrl: process.env.APP_URL + shortUrl
    })

   
})


export const redirectFromShortUrl = wrapAsync(async (req, res) => {
  const {id} = req.params; 
  const url = await getShortUrl(id)
  if(!url) {
    throw new Error("Short URL not found")
  }
  
  res.redirect(url.full_url)

})

export const createCustomShortUrl = wrapAsync(async (req, res) => {
  const {url, slug} = req.body;
  const shortUrl = await createShortUrlWithoutUserService(url, customShortUrl); 
  res.send(process.env.APP_URL + shortUrl)
  
})