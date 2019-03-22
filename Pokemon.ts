import { question } from 'readline-sync'

const ownPokemon = "Lugia"
const enemyPokemon = "Mewtwo"
let ownPokemonHP = 200
let enemyPokemonHP = 100
let myTurn = true

const allPokemons = [
  {
    Name: 'Lugia',
    Type: 'Water',
  },
  {
    Name: 'Mewtwo',
    Type: 'Grass',
  },
  {
    Name: 'Dragon',
    Type: 'Fire',
  }
]

const ownPkmSkills = [
  {
    Name: 'Slam',
    Dmg: 30,
    Type: 'Grass',
  },
  {
    Name: 'Hyper Beak',
    Dmg: 60,
    Type: 'Water',
  },
  {
    Name: 'Laser',
    Dmg: 120,
    Type: 'Fire',
  }
]

const enemyPkmSkills = [
  {
    Name: 'Slap',
    Dmg: 20,
    Type: 'physical',
  },
  {
    Name: 'Flying Punch',
    Dmg: 50,
    Type: 'magic',
  },
  {
    Name: 'Confuse',
    Dmg: 0,
    Type: 'illusion',
  }
]

function getSkillName(array) {
  for (let i = 0; i < 3; i++) {
    const skillName = ownPkmSkills[i].Name
    console.log(i + " - " + skillName)
  }
}

function getType(array1, array2) {
  for (let i = 0; i < 3; i++) {
    const allTypes = allPokemons[i].Type
    console.log(i + " - " + allTypes)
  }
  for (let i = 0; i < 3; i++) {
    const skillTypes = ownPkmSkills[i].Type
    console.log(i + " - " + skillTypes)
  }
}

/*
function effectivness(array) {
  if ()
}
*/
console.log("My Pokemon named " + ownPokemon)
console.log("EnemyPokemon named " + enemyPokemon)

console.log("I had sent out " + ownPokemon + " and having " + ownPokemonHP + " HP.")
console.log("Oppononet sent out " + enemyPokemon + " and having " + enemyPokemonHP + " HP.")

getType(allPokemons, ownPkmSkills)

while (ownPokemonHP > 0 && enemyPokemonHP > 0) {
  console.log("-------------------------------------------")
  //const atkDmg = Math.floor(Math.random() * 10)
  if (myTurn) {
    console.log("It is now " + ownPokemon + "'s turn")
    console.log("Available Skills : ")
    getSkillName(ownPkmSkills)
    let chosenSkill = question("Selected Skill\n")
    console.log(ownPokemon + " uses " + ownPkmSkills[chosenSkill].Name)
    console.log(ownPkmSkills[chosenSkill].Name + " hits for " + ownPkmSkills[chosenSkill].Dmg + " damage")
    enemyPokemonHP -= ownPkmSkills[chosenSkill].Dmg
    if (enemyPokemonHP < 0) {
      console.log("Opponenet Pokemon defeated!")
    } else {
      console.log("Opponent Pokemon " + enemyPokemon + " HP left " + enemyPokemonHP)
    }
    myTurn = false
  } else {
    console.log(enemyPokemon + " uses Shadow Ball")
    //console.log("Shadow Ball hits for " + atkDmg + " damage")
    //ownPokemonHP -= atkDmg
    if (ownPokemonHP < 0) {
      console.log("My Pokemon defeated!")
    } else {
      console.log("My Pokemon " + ownPokemon + " HP left " + ownPokemonHP)
    }
    myTurn = true
  }
}

if (enemyPokemonHP <= 0) {
  console.log("********************************************")
  console.log(enemyPokemon + " faints")
  console.log(ownPokemon + " gained 100 exp")
} else if (ownPokemonHP <= 0) {
  console.log("********************************************")
  console.log(ownPokemon + " faints")
  console.log("Game Over")
}