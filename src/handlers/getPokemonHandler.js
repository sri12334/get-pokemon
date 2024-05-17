import dom from '../dom.js';
import data from '../data.js';
import getPokemon from '../../apis/getPokemon.js';
import createPokemon from '../components/createPokemon.js';
import updatePokemonDom from '../components/updatePokemonDom.js';

const getPokemonHandler = async () => {
    const inputVal = Number(dom.input.value);
    const pokemonDomExists = dom.root.querySelector('#container');

    // ckeck if the value already exists
    if (data.oldId === inputVal) {
        return;
    }

    // check if value is valid id
    const isValid = inputVal > 0 && inputVal < 1280;
    if (!isValid) {
        pokemonDomExists.remove();
        data.oldId = null;
        dom.error.className = 'error';
        dom.error.innerText = 'Please entre valid id';
        dom.root.append(dom.error);
        return;
    }

    // remove error msg exists
    const errorExists = dom.root.querySelector('.error');
    if (errorExists) {
        dom.error.remove();
    }

    // get data
    const pokemonData = await getPokemon(inputVal);

    // check if pokemonDom exists
    if (pokemonDomExists) {
        updatePokemonDom(pokemonDomExists, pokemonData);
    } else {
        const createDom = createPokemon(pokemonData);
        dom.root.append(createDom);
    }

    // clear input
    dom.input.value = '';
    data.oldId = inputVal;
};

export default getPokemonHandler;
