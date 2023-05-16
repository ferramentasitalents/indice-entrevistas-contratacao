function calculateIndex() {
  const numEntrevistas = parseFloat(document.getElementById("num-entrevistas").value);
  const numPropostas = parseFloat(document.getElementById("num-propostas").value);
  const index = numEntrevistas / numPropostas;
  document.getElementById("result").innerHTML = `Índice de entrevistas por proposta de contratação: ${index.toFixed(2)}`;
}

