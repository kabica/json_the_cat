// Ultimate one-liner to move files to .gitignore
// touch .gitignore && echo "node_modules/" >> .gitignore && git rm -r --cached node_modules ; git status
const request = require('request');
const fs = require('fs');
const input = process.argv[2];
const catKey = input.substring(0,4);



request(`https://api.thecatapi.com/v1/images/search?breed_ids=${catKey}`, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  let catObj = JSON.parse(body);
  (catObj[0] === undefined) ? console.log('Kant find that Kitty!') : console.log('Description:\n',catObj[0]['breeds'][0]['description']);
    	});

            

 
       
