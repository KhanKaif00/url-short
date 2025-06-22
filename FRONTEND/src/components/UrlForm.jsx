import { useState } from "react"
import { createShortUrl } from "../api/shortUrl.api";

const UrlForm = () => {

  const [url, setUrl] = useState("https://www.google.com")
  const [shortUrl, setShortUrl] = useState("")
 const [copied, setCopied] = useState(false)

  console.log(url)
  const handleSubmit =async ()=>{

   const shortUrl = await createShortUrl(url)
    setShortUrl(shortUrl);
  }



   const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }
  
  return (
    <div>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
              Enter your URL
            </label>
            <input
              type="url"
              id="url"
              onChange={(e) => setUrl(e.target.value)}
              value={url}
              placeholder="https://example.com"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <button
            type="submit"
            onClick={handleSubmit}  
           
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          >
          Shorten URL
          </button>

{/*                   
        {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )} */}
        
        {shortUrl && (
          <div className="mt-6">
            <h2 className="text-lg font-medium mb-2">Your shortened URL:</h2>
            <div className="flex items-center">
              <input
                type="text"
                readOnly
                value={shortUrl}
                className="flex-1 p-2 border border-gray-300 rounded-l-md bg-gray-50"
              />
               <button
                onClick={handleCopy}
                className={`px-4 py-2 rounded-r-md transition-colors duration-200 ${
                  copied 
                    ? "bg-green-500 text-white" 
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        )}

        </div>
        


    </div>
  )
}

export default UrlForm