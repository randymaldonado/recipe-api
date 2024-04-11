const express = require('express');
const app = express();

// This would be a function called `search` that lives in a file with path
// controllers/ingredients.js
async function ingredientsCtrlSearch(req, res) {
    const fetchOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': rapidAPIKey,
          'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    };
    try {
        // It is imporant to note that in our router route definition (line 36)
        // We used the semi-colon to define a paramater for this route.
        // The paramater was `query`, which we are using below.
        const url = `${BASE_URL}/search?query=${req.params.query}`
        const response = await fetch(url, fetchOptions);
        const result = await response.text();
        res.json(result.results)
    } catch (error) {
        console.error(error);
        res.status(500).json('Internal Server Error');
    }
}


// This code would normally go into a 
// routes/ingredients.js file.
const ingredientsRouter = express.Router();
// ingredientsCtrlSearch would normally look like ingredientsCtrl.search
// where ingredientsCtrl is a controller file 
ingredientsRouter.get('/search/:query', ingredientsCtrlSearch)

// This code would go into a server.js file.
app.use(express.json());

app.use('/api/ingredents', ingredientsRouter);

const port = process.env.PORT || 3005;

app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
});
