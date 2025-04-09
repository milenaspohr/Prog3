const gols1 = document.getElementById('gols1');
const gols2 = document.getElementById('gols2');

function verificarResultado() {
  const nome1 = document.getElementById('time1').value;
  const nome2 = document.getElementById('time2').value;
  const g1 = parseInt(gols1.value);
  const g2 = parseInt(gols2.value);
  const resultado = document.getElementById('resultado');

  if (!isNaN(g1) && !isNaN(g2)) {
    if (g1 > g2) {
      resultado.textContent = `Vitória do ${nome1}`;
    } else if (g2 > g1) {
      resultado.textContent = `Vitória do ${nome2}`;
    } else {
      resultado.textContent = "Empate!";
    }
  } else {
    resultado.textContent = "";
  }
}

gols1.addEventListener('input', verificarResultado);
gols2.addEventListener('input', verificarResultado);
