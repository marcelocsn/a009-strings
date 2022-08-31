//Crie a const para a frase aqui
const frase = "Renato tem um xbox azul e preto, esse xbox possui um recado em postit com os dizeres: \"VIDEOGAME quebrado não ligue\""

const novaFrase = frase.replace("azul", "preto").replace("verde","laranja")

console.log(`Frase com as substituições: ${novaFrase}`)

const fraseMaius = "quebrado não ligue".toUpperCase()
console.log(`Frase maiuscula: ${novaFrase.replace(`quebrado não ligue`, fraseMaius)}`)