const pokeDetail = document.getElementById("poke-detail")

const params = new URLSearchParams(window.location.search)
const id = params.get('id')

async function getCharacter() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const json = await response.json()
    const character = new Pokemon(json.name, json.name, json.sprites.front_default, json.weight, json.height)

    pokeDetail.innerHTML = character.toHTMLdetail()

    console.log(Pokemon)
}

getCharacter()