# Primeiros passos do Eslint

- npm init -y
- npx eslint --init


eslint serve para deixar seu codigo visualvemente mais bonito
te indicando onde está os erros e o que são eles

vá para o "Settings" do Eslint para por essa configuração:

",
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
        "source.fixAll": true
    },"

Ajuda no sauvamento e estilo

# Para rodar a aplicação
- npm run dev

# Para Baixar o nodemon e o Sucrase
- npm i nodemon sucrase --save-dev (para ser uma dev dependeces)

- Criar um arquivo nodemon.json
- no package.json ponha em "scripts":
- "dev":"nodemon server.js"

# Para Baixar o Express
npm i express


# Uso do Insominia para testar as requisições
- Ao logar no Insominia
- Criei uma pasta para este curso
- E criei uma requisição http de metodo get
- Na parte acima digitei a url do meu site
- Em seguida exibiu código "200 ok" a aplicação funcionou

# Adicione o dotenv
- Para não exibir senhas ou ids ao exportar o codigo
- No terminal baixe digitando npm i dotenv
- Nome do arquivo: .env

# Arquivo Sequelize
- Dentro do arquivo pressione "ctrl+shift+p"
- procure por Change Language Mode
- e depois selecione javascript

# Banco de dados
- Ative o Xamppi para poder ter conexão com o servidor no mysql
- Em Schemas clique com o botão direito em qualquer parte em branco
- Coloque o nome da sua database
- Em Charset ponha utf8mb4
- Em Colection ponha utf8mb4_general_ci
- Clique em Apply

# Sequelize criar uma tabela para nós
- Baixe o sequelize e o mariadb
- npm i sequelize mariadb
- Agora baixe as dependencias
- npm i -D sequelize-cli
- -D é o dev dependeces
- npx sequelize migration:create --name-alunos
- migration é para criar esta pasta

- Migrates: alterações na base de dados
- npx sequelize db:migrate

# #ERROR: (conn:12, no: 45033, SQLState: 08S01) setting timezone 'America/Sao_Paulo' fails on server.
- significa que o Sequelize (ou o driver do banco) tentou configurar o fuso horário para America/Sao_Paulo, mas o servidor de banco de dados não reconhece esse identificador. Isso é comum em alguns ambientes MySQL/MariaDB ou até mesmo em bancos hospedados em nuvem que não têm todas as timezones instaladas.

- Trocar para offset: no config/config.js, use:
- timezone: '-03:00'

# Criar uma Tabela de Usuarios
- no terminal digite
- npx sequelize migration:create --name=users
- Após preencher as informações
- npx sequelize db:migrate
- Caso tenha alguma coisa errada para reescrever digite:
- npx sequelize db:migrate:undo

# Bcrypt JS
- Instale o BCript JS para fazer as operações da migration User
- Onde o usuario vai informar a senha que não se encontra na base de dados
- Então este campo precisa aparecer para que depois da senha informada
- Seja possivel realizar o Hash
- npm i bcryptjs


- Após isso criou uma nova paste "User"em controllers e agora será criado
- a rota em routes


# Métodos
-  index ->  Listar os Usuários -> GET
- store/create -> cria um novo usuário -> POST
- delete -> apaga um usuario -> DELETE
- show -> mostra um usuario -> GET
- update -> atualiza um usuário -> PATCH ou PUT


-Adicione também o Use no arquivo Index

# Teste no Insominia
- Crie a pasta
- Crie a requisição no metodo post
- Rode a aplicação e teste
