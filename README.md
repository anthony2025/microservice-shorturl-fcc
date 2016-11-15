Node microservice that returns 'shortened' urls, built as part of the FreeCodeCamp curricula.
Because of heroku's gigantic urls in reality this does the opposite.

Live at: https://microservice-shorturl-fcc.herokuapp.com/

## User stories
* I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
* If I pass an invalid URL that doesn't follow the valid www.example.com format, the JSON response will contain an error instead.
* When I visit that shortened URL, it will redirect me to my original link.

### Example usage
https://microservice-shorturl-fcc.herokuapp.com/new/www.google.com

### Example output
{
  "original_url": "www.google.com",
  "short_url": "ryK2f4dZg"
}

### Then follow
https://microservice-shorturl-fcc.herokuapp.com/insert-short-url-here
