const express = require('express')
const path = require('path');
const app = express()
const euroRoutes = require('./routes/euroRoute'); // rotas relacionadas à geração de chaves;


app.use(express.json()); //middleware

app.use(express.static(path.join(__dirname,'public'))); // Servir os arquivos da pasta public do frontend

app.use('/api/', euroRoutes);

app.get('*', (req, resp) => { // qlq rota que nao seja à API serve o frontend e nao a API em si
  resp.sendFile(path.join(__dirname, 'public'));
});

const port = 8080
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})