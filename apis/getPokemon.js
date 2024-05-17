// eslint-disable-next-line consistent-return
const getPokemon = async (id) => {
    try {
        const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        if (!url.ok) {
            throw new Error('Pokemon not found');
        }
        const data = await url.json();
        return data;
    } catch (err) {
        console.log(`There was an error fetching the Pokemon: ${err}`);
        return null;
    }
}

export default getPokemon;