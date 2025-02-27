// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Could not fetch resource");
//         }
//         return response.json();
//     }
//     )
//     .then(data => console.log(data.id))
//     .catch(error => console.error(error));

async function fetchData() {
    try {
        const poke = document.getElementById('pokeName').value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
        if (!response.ok) {
            throw new Error("Couldn't");
        }
        const data = await response.json();
        const pokeSprite = data.sprites.front_default;
        const imgelement = document.getElementById('pokeSprite')
        imgelement.src = pokeSprite
        imgelement.style.display = "block"
    }
    catch (error) {
        console.error(error)
    }
}
fetchData()