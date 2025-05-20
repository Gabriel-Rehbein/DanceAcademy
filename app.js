const express = require('express');
const produtoService = require('./service/produto_service');
const alunoService = require('./service/aluno_service');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

// ----- ROTAS PRODUTOS -----
app.get('/produtos', (req, res) => res.json(produtoService.listar()));

app.get('/produtos/:id', (req, res) => {
  try {
    res.json(produtoService.buscarPorId(+req.params.id));
  } catch (err) {
    res.status(err.id).json(err);
  }
});

app.post('/produtos', (req, res) => {
  try {
    produtoService.inserir(req.body);
    res.status(201).json(req.body);
  } catch (err) {
    res.status(err.id).json(err);
  }
});

app.put('/produtos/:id', (req, res) => {
  try {
    const produtoAtualizado = produtoService.atualizar(+req.params.id, req.body);
    res.json(produtoAtualizado);
  } catch (err) {
    res.status(err.id).json(err);
  }
});

app.delete('/produtos/:id', (req, res) => {
  try {
    produtoService.remover(+req.params.id);
    res.json({ mensagem: 'Produto deletado com sucesso' });
  } catch (err) {
    res.status(err.id).json(err);
  }
});

// ----- ROTAS ALUNOS -----
app.get('/alunos', (req, res) => res.json(alunoService.listar()));

app.get('/alunos/:id', (req, res) => {
  try {
    res.json(alunoService.buscarPorId(+req.params.id));
  } catch (err) {
    res.status(err.id).json(err);
  }
});

app.post('/alunos', (req, res) => {
  try {
    alunoService.inserir(req.body);
    res.status(201).json(req.body);
  } catch (err) {
    res.status(err.id).json(err);
  }
});

app.put('/alunos/:id', (req, res) => {
  try {
    const alunoAtualizado = alunoService.atualizar(+req.params.id, req.body);
    res.json(alunoAtualizado);
  } catch (err) {
    res.status(err.id).json(err);
  }
});

app.delete('/alunos/:id', (req, res) => {
  try {
    alunoService.remover(+req.params.id);
    res.json({ mensagem: 'Aluno deletado com sucesso' });
  } catch (err) {
    res.status(err.id).json(err);
  }
});

// ----- Iniciar servidor -----
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
