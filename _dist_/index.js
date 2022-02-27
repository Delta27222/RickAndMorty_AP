/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseURL = 'https://rickandmortyapi.com/api/character'
const appNode = document.querySelector('#my-app')
console.log('hola')
function fetchStart(){
    // conectamos al servidor
    window.fetch(baseURL)
    // procesamos la respuesta para convertirla en en JSON
    .then(respuesta => respuesta.json())
    // JSON -> data -> Renderizamos la informacion del NAVEGADOR
    .then(responseJSON => {
        responseJSON.results.forEach(character => {

            // ACA CREAMOS UN NUEVO CARACTER CADA VEZ QUE SE NECESITE
            fetchCharacter(character);
            
        });
    });
}
const todo = [];

function fetchCharacter(person){

    // NAME
    const name = document.createElement('h2');
    name.textContent = person.name;
    name.style = 'color : #FC9918';
    name.className = 'font-mono text-xl font-light '

    //SPECIE
    const specie = document.createElement('h3');
    specie.textContent = 'Specie: '+person.species;
    specie.className = 'font-light text-base text-yellow-400';

    // GENDER
    const gender = document.createElement('p');
    gender.textContent = 'Gender: '+person.gender;
    gender.className = 'font-light text-base text-yellow-400';

    //ORIGIN 
    const origin = document.createElement('p');
    origin.textContent = 'Origin: '+person.origin.name;
    origin.className = 'font-light text-base text-yellow-400';

    
    //IMAGE 3
    const image = document.createElement('img');
    image.src = person.image;
    image.className = 'h-32 w-32 md:h-40 md:w-40 rounded-full mx-auto md:mx-0 md:mr-6'

    function allDivContainer(){
        // CONTAINER ALL TEXTa
        const allTextContainer = document.createElement('div');
        allTextContainer.className = 'text-center md:text-left self-center';
        allTextContainer.append(name,specie,gender,origin); 
        return allTextContainer;
    }
    const text = allDivContainer();

    const allContainer = document.createElement('div');
    allContainer.append(image, text);
    allContainer.className = ' md:flex bg-purple-500 bg-opacity-50 rounded-lg p-6 hover:bg-purple-500 hover:bg-opacity-25 m-6';
    appNode.append(allContainer);

}
//  

fetchStart();