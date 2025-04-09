const radios1 = document.querySelectorAll('input[name="jogada1"]');
const radios2 = document.querySelectorAll('input[name="jogada2"]');
const resultadoDiv = document.getElementById('resultado');

function verificarVencedor() {
  const nome1 = document.getElementById('nome1').value || "Jogador 1";
  const nome2 = document.getElementById('nome2').value || "Jogador 2";
 
  let jogada1 = null;
  for (let i = 0; i < radios1.length; i++) {
    if (radios1[i].checked) {
      jogada1 = radios1[i].value;
      break;
    }
  }
  
  let jogada2 = null;
  for (let i = 0; i < radios2.length; i++) {
    if (radios2[i].checked) {
      jogada2 = radios2[i].value;
      break;
    }
  }
  
  if (!jogada1 || !jogada2) {
    resultadoDiv.textContent = "";
    return;
  }

  if (jogada1 === jogada2) {
    resultadoDiv.textContent = "Empate!";
  } else if (
    (jogada1 === "pedra" && jogada2 === "tesoura") ||
    (jogada1 === "papel" && jogada2 === "pedra") ||
    (jogada1 === "tesoura" && jogada2 === "papel")
  ) {
    resultadoDiv.textContent = `${nome1} venceu!`;
  } else {
    resultadoDiv.textContent = `${nome2} venceu!`;
  }
}

for (let i = 0; i < radios1.length; i++) {
  radios1[i].addEventListener('change', verificarVencedor);
}

for (let i = 0; i < radios2.length; i++) {
  radios2[i].addEventListener('change', verificarVencedor);
}

