import { POKEMON_TYPE_COLORS } from './Constants';

const getColorBytePokemonType = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()]

export default getColorBytePokemonType;