import { question } from 'readline-sync'

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

function getType(array1, array2) {
  for (let i = 0; i < 3; i++) {
    const allTypes = allPokemons[i].Type
    console.log("Pokemon Type : ")
    console.log(i + " - " + allTypes)
  }
  for (let i = 0; i < 3; i++) {
    const skillTypes = ownPkmSkills[i].Type
    console.log("Skill Type : ")
    console.log(i + " - " + skillTypes)
  }
}

console.log("Choose your pokemon")
let chosenPkm = question("Select a pokemon\n")
for (let i = 0; i < 3; i++) {
  if (allPokemons[i].Name === chosenPkm) {
    const curtPkm = allPokemons[i].Name
    console.log()
  }
}

