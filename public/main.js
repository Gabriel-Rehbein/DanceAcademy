// =================== PRODUTOS ===================
async function carregarProdutos() {
    const res = await fetch("/produtos");
    const produtos = await res.json();
    const lista = document.getElementById("lista-produtos");
    lista.innerHTML = "";
  
    produtos.forEach(p => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${p.id} - <strong>${p.nome}</strong> (R$ ${p.preco})
        <button onclick="editarProduto(${p.id}, '${p.nome}', ${p.preco})">Editar</button>
        <button onclick="deletarProduto(${p.id})">Excluir</button>
      `;
      lista.appendChild(li);
    });
  }
  
  async function adicionarProduto() {
    const nome = document.getElementById("produto-nome").value;
    const preco = parseFloat(document.getElementById("produto-preco").value);
    if (!nome || isNaN(preco)) return alert("Preencha os campos corretamente");
  
    await fetch("/produtos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, preco })
    });
  
    document.getElementById("produto-nome").value = "";
    document.getElementById("produto-preco").value = "";
    carregarProdutos();
  }
  
  async function editarProduto(id, nomeAtual, precoAtual) {
    const nome = prompt("Novo nome do produto:", nomeAtual);
    const preco = parseFloat(prompt("Novo preço do produto:", precoAtual));
    if (!nome || isNaN(preco)) return;
  
    await fetch(`/produtos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, preco })
    });
    carregarProdutos();
  }
  
  async function deletarProduto(id) {
    if (!confirm("Tem certeza que deseja excluir este produto?")) return;
    await fetch(`/produtos/${id}`, { method: "DELETE" });
    carregarProdutos();
  }
  
  
  // =================== ALUNOS ===================
  async function carregarAlunos() {
    const res = await fetch("/alunos");
    const alunos = await res.json();
    const lista = document.getElementById("lista-alunos");
    lista.innerHTML = "";
  
    alunos.forEach(a => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${a.id} - <strong>${a.nome}</strong> (Escola: ${a.escola})
        <button onclick="editarAluno(${a.id}, '${a.nome}', '${a.escola}')">Editar</button>
        <button onclick="deletarAluno(${a.id})">Excluir</button>
      `;
      lista.appendChild(li);
    });
  }
  
  async function adicionarAluno() {
    const nome = document.getElementById("aluno-nome").value;
    const escola = document.getElementById("aluno-escola").value;
    if (!nome || !escola) return alert("Preencha os campos corretamente");
  
    await fetch("/alunos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, escola })
    });
  
    document.getElementById("aluno-nome").value = "";
    document.getElementById("aluno-escola").value = "";
    carregarAlunos();
  }
  
  async function editarAluno(id, nomeAtual, escolaAtual) {
    const nome = prompt("Novo nome do aluno:", nomeAtual);
    const escola = prompt("Nova escola do aluno:", escolaAtual);
    if (!nome || !escola) return;
  
    await fetch(`/alunos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, escola })
    });
    carregarAlunos();
  }
  
  async function deletarAluno(id) {
    if (!confirm("Tem certeza que deseja excluir este aluno?")) return;
    await fetch(`/alunos/${id}`, { method: "DELETE" });
    carregarAlunos();
  }
  
  // =================== INICIALIZAÇÃO ===================
  carregarProdutos();
  carregarAlunos();
  