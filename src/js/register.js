//console.log("JS carregado");

document.addEventListener("DOMContentLoaded", () => {
  //console.log("DOM carregado");

  const botao = document.getElementById("btnCadastro");

  botao.addEventListener("click", () => {

    function perguntar(mensagem) {
      const resposta = prompt(mensagem);
      if (resposta === null) {
        alert("Cadastro cancelado.");
        return null;
      }
      return resposta;
    }

    const nome = perguntar("Digite o nome do vinho:");
    if (nome === null) return;

    const tipo = perguntar("Digite o tipo do vinho (Tinto, Branco, Rosé):");
    if (tipo === null) return;

    const ano = perguntar("Digite o ano da safra:");
    if (ano === null) return;

    const quantidade = perguntar("Digite a quantidade em estoque:");
    if (quantidade === null) return;


    const dados = {
      nome,
      tipo,
      ano,
      quantidade
    };

    console.log("DADOS DO VINHO:");
    console.log(dados);

    console.log("Nome do Vinho:", dados.nome);
    console.log("Tipo do Vinho:", dados.tipo);
    console.log("Ano da Safra:", dados.ano);
    console.log("Quantidade:", dados.quantidade);


    alert("Cadastro realizado! Veja os detalhes no console.");

  });
});