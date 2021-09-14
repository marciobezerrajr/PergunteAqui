1- Para conseguir rodar esse projeto é necessário ter o nodeJs instalado na máquina

2- Após clonar o projeto, é necessário instalar as dependências através do "npm install" ou "yarn install"(caso utilize esse gerenciador de pacotes).

3- Após instalar as dependencias é necessário instalar o banco de dados mysql Workbench 8

4- No banco de dados, criar uma base de dados com o nome "pergunteaqui" (ou outro nome qualquer de sua escolha, desde que seja alterado no arquivo "database.js"), assim, como tambem é necessário atualizar as credenciais do banco no arquivo /database/database.js, passando na sequencia: "nome do banco", "usuário conectado ao banco", e "senha respectiva ao usuário". 

5- Caso ocorra algum erro na tentativa de autenticação no banco, executar o comando abaixo para alteraração da senha:
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'senha'

6- Agora é só rodar a aplicação executando o comando "node" index.js ou "nodemon" index.js caso queira que o servidor reinicie sozinho após qualquer atulização nos arquivos da aplicação.

7- Acessar localhost:3000 e deveria estar funcionando :D