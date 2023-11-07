#!/usr/bin/node
const request = require('request');

const movieId = process.argv[2];

if (!movieId) {
    console.error("Please provide a valid Movie ID as a command line argument.");
    process.exit(1);
}

const SWAPI_URL = 'https://swapi.dev/api';

request(`${SWAPI_URL}/films/${movieId}/`, (error, response, body) => {
    if (error) {
        console.error('Error fetching movie data:', error);
        return;
    }

    const movie = JSON.parse(body);
    const characterUrls = movie.characters;

    characterUrls.forEach(characterUrl => {
        request(characterUrl, (error, response, body) => {
            if (error) {
                console.error('Error fetching character data:', error);
                return;
            }

            const character = JSON.parse(body);
            console.log(character.name);
        });
    });
});
