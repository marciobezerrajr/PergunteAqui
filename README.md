## Aplicação Pergunte Aqui, feita durante o curso Formação Node.js do Guia do Programador


- Para conseguir rodar esse projeto é necessário ter o nodeJs instalado na máquina

- Após clonar o projeto, é necessário instalar as dependências através do "npm install" ou "yarn install"(caso utilize esse gerenciador de pacotes).

- Após instalar as dependencias é necessário instalar o banco de dados mysql Workbench 8

- No banco de dados, criar uma base de dados com o nome "pergunteaqui" (ou outro nome qualquer de sua escolha, desde que seja alterado no arquivo "database.js"), assim, como tambem é necessário atualizar as credenciais do banco no arquivo /database/database.js, passando na sequencia: "nome do banco", "usuário conectado ao banco", e "senha respectiva ao usuário". 

- Caso ocorra algum erro na tentativa de autenticação no banco, executar o comando abaixo para alteraração da senha:
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'senha'

- Agora é só rodar a aplicação executando o comando "node" index.js ou "nodemon" index.js caso queira que o servidor reinicie sozinho após qualquer atulização nos arquivos da aplicação.

- Acessar localhost:3000 e estará funcionando :D

Atualmente a minha aplicação está hospedada na Digital Ocean com o plano de 60 dias "grátis". Você pode [Acessá-la aqui](http://159.223.186.131/) e, seguem algumas imagens dela abaixo:

## Tela inicial
![image](https://user-images.githubusercontent.com/43456903/141874945-745614f3-7fc4-4c05-a65a-d91708db31a7.png)

## Tela de Pergunta
![image](https://user-images.githubusercontent.com/43456903/141874372-2fc52f0d-2124-4fed-92ba-9a7a46604abe.png)

## Tela de Respostas
![image](https://user-images.githubusercontent.com/43456903/141875586-16f2571e-f8e3-4fb1-873f-9c7c0cda939a.png)


