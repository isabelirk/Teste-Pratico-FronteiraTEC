const array = [];
let i = 0;

do {
  let aux = window.prompt("Digite o valor da posição " + i + " do array:");
  array.push(aux);
  i++;
} while (i < 6);

console.log(array);

const min = Math.min(...array);

function countItems(array) {
  const countMap = Object.create(null);

  for (const element of array) {
    if (!countMap[element]) {
      // Se ainda não existir elemento, definimos como um, já que
      // estamos na primeira ocorrência.
      countMap[element] = 1;
    } else {
      // Caso contrário, incrementamos um no número atual.
      countMap[element] += 1;
    }
  }

  return countMap;
}

const countArray = countItems(array);
console.log(countArray);

const qtd = Object.values(countArray)[0];
console.log(qtd);

alert("O menor número é o " + min + " e ele aparece " + qtd + " vezes.");
