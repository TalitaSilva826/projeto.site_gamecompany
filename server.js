const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos (HTML, CSS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

// Rota de redirecionamento para o site de download
app.get('/download', (req, res) => {
  res.redirect('https://playruneterra.com/'); // URL oficial de download
});

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});