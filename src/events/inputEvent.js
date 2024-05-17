import dom from '../dom.js';
import getPokemonHandler from '../handlers/getPokemonHandler.js';

const inputEvent = () => {
    dom.input.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            getPokemonHandler();
        }
    });
};

export default inputEvent;
