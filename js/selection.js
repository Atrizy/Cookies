var pushed_status = Cookies.get("chosen");
var pokemon_section = document.getElementById("pokemon_status");

if(pushed_status === "charmander") {
    pokemon_section['innerText'] = `Congrats, you chose your starter and it is Charmander!`
} else if(pushed_status === "squirtle") {
   pokemon_section['innerText'] = `Congrats, you chose your starter and it is Squirtle!`
} else if(pushed_status === "bulbasaur") {
    pokemon_section['innerText'] = `Congrats, you chose your starter and it is Bulbasaur`
} else {
    pokemon_section['innerText'] = `Go choose a starter!`
}