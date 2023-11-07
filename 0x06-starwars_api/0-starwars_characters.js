const axios = require('axios');
const movieId = process.argv[2]

if (!movieId) {
    console.error("provide valid movie ID")
    process.exit(1);

}

const SWAPI_URL = 'https://swapi.dev/api'
axios.get(`${SWAPI_URL}/films/${movieId}/`)
    .then(response => {

	const characters = response.data.characters;
	const characterPromises = characters.map(characterUrl => axios.get(characterUrl));

	Promise.all(characterPromises)
	    .then(characterResponses =>{
		const characterNames = characterResponses.map(response => response.data.name);
		characterNames.forEach(name => console.log(name));
	    })
	    .catch(error => console.error(error));
    })
    .catch(error =>console.error(error));
