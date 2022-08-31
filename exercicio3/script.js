const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres:\"BOAS VINDAS, mas não deixe o gato sair\""

const novaFrase = frase.replace("verde", "rosa").replace("azul", "laranja")
console.log(novaFrase.includes("laranja"))
console.log(novaFrase.includes("verde"))
console.log(novaFrase)


