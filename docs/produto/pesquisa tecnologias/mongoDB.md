# Tutorial de Ambienta��o MongoDB

Um documento que ensina como instalar e se ambientar no MongoDB

### Instale o MongoDB
	 https://www.mongodb.com/try/download/community
Baixe uma vers�o boa para o seu OS
Escolha o local que quiser para a instala��o

### Instale MongoCompass
	https://www.mongodb.com/try/download/compass
Baixe a �ltima vers�o
Instale o mongoCompass

### Conectando o server

* Para usar o Mongo Compass precisamos primeiro habilitar o server do MongoDB
* Abra seu terminal e mude a pasta para a pasta de instalacao do MongoDB
* Execute o mongod.exe pelo terminal
* Abra outro terminal e muda tamb�m para a pasta do MongoDB
* Execute o mongos.exe pelo terminal


# Comandos MongoDB

Uma lista de comandos do MongoDB (pass�vel de mudan�as).
**Na hora de fazer substitua "collection" pelo nome da sua collection, exceto ao criar uma.

### 1. Criando uma Collection
- db.createCollection("nome")   = cria uma collection;

### 2. Insere um documento na Collection 
- db.nomeCollection.insert({conte�do})   = insere um conte�do na collection com o conte�do dentro das chaves;
Ex. db.nomeCollection.insert( { name: "Pedro"} ) = cria um documento com um item name: "Pedro";

- db.nomeCollection.insertMany( [ { conteudo } ], [ {conteudo} ] )   = inseri varios conte�dos na collection com o conteudo dentro das chaves;
Ex. db.nomeCollection.insertMany( [ { name:"Pedro" } ], [ {Cargo: "Aluno"} ] );

### 3. Mostrando a Collection
-   db.collection.find()   = busca e mostra os registros da collection digitada e da pra procurar com conte�do dentro do collection como ("name: blabla") entre par�nteses;
-   db.collection.find().pretty() = busca e mostra uma lista dos registros bem bonitinho;

### 4. Buscando conte�dos com um item especifico
- db.collection.find({"argumento"})   = procura com conte�do dentro do collection com o argumento entre par�nteses;
 Ex: db.collection.find({"name: Pedro"}) ;

### 5. Busca com um limite N 
-db.collection.find().limit(n)   = busca com um limite;

### 6. Mostra quantidade de Conteudos na Collection
-db.collection.find().count()   = retorna a quantidade de itens na collection. Tamb�m d� pra fazer um count com o conte�do do find;
Ex: db.collection.find({"name: blabla"}).count();

### 7. Remove conteudo
- db.collection.remove()   = remove o registro do item do id digitado dentro dos par�nteses naquela collection;
 Ex: db.collection.remove({_id: ObjectId(�12cd345325dfgsae213�)}) ;

### 8. Da update em um conteudo
- db.collection.update()   = altera um item do registro na collection;
Ex: db.collection.upadte(
    {_id: ObjectId(�12cd345325dfgsae213�)},
    {$set: {name: �Lucas�}}
);

### 9. D� para encontrar registros com .find() que, por exemplo, t�m pre�os menores e iguais, ou pre�os maiores e iguais a um certo n�mero que deseje com:
  $eq = igual
  $gt = maior
  $gte = maior ou igual
  $lt = menor
  $lte = menor ou igual

 Ex: db.collection.find({price: { $eq: 30.0}})  = procura itens com pre�os iguais a 30;

Tamb�m d� pra procurar itens que n�o tem aquele pre�o com:

  $ne = retorna itens que n�o tem aquele valor
  $nin = retorna itens que n�o tem aqueles valores

Existem tamb�m outras ajudas com find como:
  $and = procura itens com 2 ou mais valores
  $or = procura itens com 1 valor ou outro.

### 10.Verificando os usuarios do database
- db.getUsers() = vai retornar uma lista de usuarios do database;

### 11. Criando um usuario para o database
- db.createUser( {user:"nome", pwd:"senha", roles: [{role:"role do usuario", db;"database"}]});

### 12. Autenticando o usuario (entrar)
- db.auth("username", "senha") = se tiver correto retorna 1, se n�o retorna 0 e um erro;

### 13. Para importar arquivos CSV ou JSON
Primeiro abra o terminal da sua m�quina e mude a pasta para a bin do MongoDB
Depois use o comando:
Windows: mongoimport /db:nome_da_database /collection:nome_da_collection /type:tipo_do_arquivo /file:nome_do_arquivo.tipo /headerline
Linux: mongoimport -d nome_da_database -c nome_da_collection --type tipo_do_arquivo --file nome_do_arquivo.tipo --headerline