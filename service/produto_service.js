let produtos = [];

function listar() {
  return produtos;
}

function buscarPorId(id) {
  const produto = produtos.find(p => p.id === id);
  if (!produto) throw { id: 404, message: 'Produto não encontrado' };
  return produto;
}

function inserir(produto) {
  produto.id = produtos.length + 1;
  produtos.push(produto);
}

function atualizar(id, dados) {
  const produto = produtos.find(p => p.id === id);
  if (!produto) throw { id: 404, message: 'Produto não encontrado' };
  produto.nome = dados.nome;
  produto.preco = dados.preco;
  return produto;
}

function remover(id) {
  const index = produtos.findIndex(p => p.id === id);
  if (index === -1) throw { id: 404, message: 'Produto não encontrado' };
  produtos.splice(index, 1);
}

module.exports = {
  listar,
  buscarPorId,
  inserir,
  atualizar,
  remover
};
