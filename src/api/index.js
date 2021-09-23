import axios from 'axios'

const url = "https://pokeapi.co/api/v2/pokemon/"

export const APIgetPokemonsData = async(newUrl) => {
  try {
    const { data } = await axios.get(newUrl ? newUrl : url)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const APIgetPokemonDetail = async (url) => {
  try {
    const { data } = await axios.get(url)
    return data
  } catch (error) {
    console.log(error)
  }
}