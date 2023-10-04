const express = require('express');
const session = require('express-session');
const db = require('./db');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


app.use(
  session({
    secret: 'sua_chave_secreta',
    resave: false,
    saveUninitialized: true,
  })
);
function verificaAutenticacao(req, res, next) {
    if (req.session.loggedin) {
      next(); // se for autenticado ele vai passar
    } else {
      res.status(403).send('Acesso negado'); // Ousuario n autenticado
    }
  }
  

//rotas

app.get('/', (req, res) => {
    res.redirect('/login');
  });
  
  app.get('/login', (req, res) => {
    res.render('login.ejs');
  });
  
  app.get('/registro', (req, res) => {
    res.render('registro.ejs');
  });

  app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
  
    //consulta o db idw para ver se o usuario existe
    db.query(
      'SELECT * FROM users WHERE username = ? AND password = ?',
      [username, password],
      (err, results) => {
        if (err) {
          console.error('Erro ao consultar o banco de dados:', err);
          res.status(500).send('Erro interno do servidor');
          return;
        }
  
        if (results.length === 0) {
          
          res.status(401).send('Credenciais inválidas');
          return;
        }
  
       //aut ok
        req.session.loggedin = true;
        req.session.username = username;
        res.redirect('/cronometro');
      }
    );
  });
  
  app.post('/registro', (req, res) => {
    const { username, password } = req.body;
  
    try {
      db.query(
        'INSERT INTO users (username, password) VALUES (?, ?)',
        [username, password],
        (err, results) => {
          if (err) {
            console.error('Erro ao inserir o usuário no banco de dados:', err);
            res.status(500).send('Erro interno do servidor');
            return;
          }
  
          //chama pro login se tiver tudo ok
          res.redirect('/login');
        }
      );
    } catch (error) {
      console.error('Erro inesperado:', error);
      res.status(500).send('Erro interno do servidor');
    }
  });
  

  app.get('/cronometro', verificaAutenticacao, (req, res) => {
    res.render('cronometro.ejs', { username: req.session.username });
  });

  app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error('Erro ao encerrar a sessão:', err);
        res.status(500).send('Erro interno do servidor');
        return;
      }
      res.redirect('/login');
    });
  });
  




app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
