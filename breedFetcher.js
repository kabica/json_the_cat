// breedFetcher.js
// touch .gitignore && echo "node_modules/" >> .gitignore && git rm -r --cached node_modules ; git status
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  	//console.log(typeof error);
  	//console.log(response);
  	if (error) {
  		return callback(error, null);
  	}

    const catObj = JSON.parse(body);
    const breed = catObj[0];

    //console.log(`TEST: ${catObj[0]['breeds'][0]['description']}`);
    // callback(error, catObj[0]['breeds'][0]['description']);
    if (breed) {
    callback(null, breed.description)    	
	} else
	callback('Breed Not Found')
  });



};

module.exports = { fetchBreedDescription };










// request(`https://api.thecatapi.com/v1/images/search?breed_ids=${catKey}`, (error, response, body) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   let catObj = JSON.parse(body);
//   (catObj[0] === undefined) ? console.log('Kant find that Kitty!') : console.log('Description:\n',catObj[0]['breeds'][0]['description']);
//     	});

            

 
       
