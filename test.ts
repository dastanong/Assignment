const ownPokemon = "Lugia"
const enemyPokemon = "Mewtwo"
let ownPokemonHP = 100
let enemyPokemonHP = 200
let atkDMG = 0
let myTurn = true

console.log("My Pokemon named " + ownPokemon)
console.log("EnemyPokemon named " + enemyPokemon)

console.log("I had sent out " + ownPokemon + " and having " + ownPokemonHP + " HP.")
console.log("Oppononet sent out " + enemyPokemon + " and having " + enemyPokemonHP + " HP.")

while (ownPokemonHP > 0 && enemyPokemonHP > 0) {
  if (myTurn) {
    console.log("It is now " + ownPokemon + "'s turn")
    console.log(ownPokemon + " uses Meat Ball")
    console.log("Meat Ball hits for 100 damage")
    enemyPokemonHP -= 100
    console.log("Opponent Pokemon " + enemyPokemon + " HP left " + enemyPokemonHP)
    myTurn = false
    if (enemyPokemonHP < 0) {
      console.log(enemyPokemon + " faints")
      console.log(ownPokemon + " gained 100 exp")
    }
  } else {
    console.log(enemyPokemon + " uses Shadow Ball")
    console.log("Shadow Ball hits for 60 damage")
    ownPokemonHP -= 60
    console.log("My Pokemon " + ownPokemon + " HP left " + ownPokemonHP)
    myTurn = true
  }
}

if (enemyPokemonHP <= 0) {
  console.log(enemyPokemon + " faints")
  console.log(ownPokemon + " gained 100 exp")
} else if (ownPokemonHP <= 0) {
  console.log(ownPokemon + " faints")
  console.log(enemyPokemon + " gained 100 exp")
}