let alunos = [];

function listar() {
  return alunos;
}

function buscarPorId(id) {
  const aluno = alunos.find(a => a.id === id);
  if (!aluno) throw { id: 404, message: 'Aluno não encontrado' };
  return aluno;
}

function inserir(aluno) {
  aluno.id = alunos.length + 1;
  alunos.push(aluno);
}

function atualizar(id, dados) {
  const aluno = alunos.find(a => a.id === id);
  if (!aluno) throw { id: 404, message: 'Aluno não encontrado' };
  aluno.nome = dados.nome;
  aluno.escola = dados.escola;
  return aluno;
}

function remover(id) {
  const index = alunos.findIndex(a => a.id === id);
  if (index === -1) throw { id: 404, message: 'Aluno não encontrado' };
  alunos.splice(index, 1);
}

module.exports = { listar, buscarPorId, inserir, atualizar, remover };
