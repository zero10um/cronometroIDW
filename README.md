Resumo do Projeto
O projeto "Cronômetro IDW" é um aplicativo web que permite aos usuários registrar e cronometrar suas atividades. Ele inclui funcionalidades de autenticação de login, registro de conta, cronometragem, registro de voltas e histórico de atividades.
Ferramentas Utilizadas
Linguagem de Programação: Node.js
Banco de Dados: MySQL
IDE (Ambiente de Desenvolvimento Integrado): Visual Studio Code
Outras Ferramentas: MySQL Workbench
Funcionalidades Implementadas
Autenticação de Login: Os usuários podem fazer login em suas contas utilizando seu nome de usuário e senha. A autenticação é realizada em relação aos dados armazenados no banco de dados.
Registro de Conta: Os usuários podem criar uma conta fornecendo um nome de usuário e senha. Os dados de conta são armazenados no banco de dados.
Cronometragem: O aplicativo oferece um cronômetro que permite aos usuários iniciar, parar, reiniciar e registrar voltas. O cronômetro é exibido em horas, minutos, segundos e milissegundos.
Registro de Voltas: Os usuários podem registrar voltas durante a cronometragem. Cada volta é armazenada no histórico de atividades.
Histórico de Atividades: O histórico de atividades exibe todas as voltas registradas durante a cronometragem. Os usuários podem visualizar seu histórico de atividades anterior.
Tema Escuro: O aplicativo oferece um tema escuro para melhorar a experiência do usuário.
Instruções para Execução do Projeto
Pré-requisitos:
-Certifique-se de ter o Node.js instalado em seu computador. Você pode baixá-lo em https://nodejs.org/.
-Certifique-se de que o servidor MySQL esteja em execução e o banco de dados "idw" tenha sido criado.
Instalar Dependências:
Navegue até o diretório do projeto e execute o seguinte comando para instalar as dependências:
npm install
Configurar o Banco de Dados:
Verifique e atualize as configurações de conexão com o banco de dados no arquivo app.js para corresponder à sua configuração local.
Iniciar o Servidor:
Execute o seguinte comando para iniciar o servidor Node.js:
node app.js
Acessar o Aplicativo:
Abra um navegador da web e acesse http://localhost:3000 para usar o aplicativo.
Projeto
O projeto está organizado em uma estrutura de diretórios com pastas para modelos de visualização, rotas, estilos e arquivos JavaScript. A estrutura do projeto é a seguinte:
- public/
  - dark-theme.css
- views/
  - login.ejs
  - registro.ejs
  - cronometro.ejs
- routes/
  - index.js
  - users.js
- app.js
- package.json
- package-lock.json
- README.md
