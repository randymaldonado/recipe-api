require("dotenv").config();

// The base URL that will be augmented to call certain API endpoints.
const BASE_URL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients"

// fetchOptions provides options that are needed in the headers for accessing an API.
// method is GET because this is a standard HTTP GET.
// `X-RapidAPI-Key` is a header key that RapidAPI expects. It's value is expected to be an API key.
// `X-RapidAPI-Host` is a header key that RapidAPI expects. It's value is the server that the API lives on.
//
// Pull the API Key from the .env file
const rapidAPIKey = process.env.RAPID_API_KEY
const fetchOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': rapidAPIKey,
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };

async function searchForIngredients(searchQuery) {
    try {
        const url = `${BASE_URL}/search?query=${searchQuery}`
        const response = await fetch(url, fetchOptions);
        const result = await response.text();
        console.log(result)
    } catch (error) {
        console.error(error);
        return undefined
    }
}

var res = searchForIngredients("basil")
/**
 * The response here is:
 * {
 *  "results":[
 *      {
 *          "id":2044,
 *          "name":"fresh basil",
 *          "image":"basil.jpg"
 *      },
 *      {
 *          "id":1044053,
 *          "name":"basil oil",
 *          "image":"basil-oil.jpg"
 *      },
 *      {
 *          "id":93698,
 *          "name":"basil pesto",
 *          "image":"basil-pesto.png"
 *      },
 *      {
 *          "id":1012044,
 *          "name":"thai basil",
 *          "image":"lemon-basil.jpg"
 *      },
 *      {
 *          "id":1002044,
 *          "name":"lemon basil",
 *          "image":"mixed-fresh-herbs.jpg"
 *      },
 *      {
 *          "id":2003,
 *          "name":"dried basil",
 *          "image":"basil.jpg"
 *      },
 *      {
 *          "id":6233,
 *          "name":"tomato and basil sauce",
 *          "image":"tomato-sauce-or-pasta-sauce.jpg"
 *      }
 *  ],
 *  "offset":0,
 *  "number":10,
 *  "totalResults":7
 * }
 * 
 */
