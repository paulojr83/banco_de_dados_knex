# Utilizando o [Knex](http://knexjs.org/) SQL query builder

## Instalando o Mysql
`apt install mysql-server`
```
CONFIGURANDO ACESSO REMOTO EM SERVIDORES MYSQL


Qualquer máquina contida em uma rede, pode funcionar como servidor de banco de dados MySQL.

Mas, primeiro, é preciso realizar a seguinte configuração na máquina servidor:

1. Altere o arquivo de configuração do MySQL. Para isso, execute o seguinte comando, como root para abrir o arquivo de configuração:

 sudo nano /etc/mysql/my.cnf

2. Mude o IP da seguinte linha, para 0.0.0.0:

  bind-address  =  127.0.0.1

Ficando assim:

bind-address = 0.0.0.0

3. Reinicie o serviço do MySQL:

 sudo /etc/init.d/mysql restart

4. Entre no MySQL com o usuário root:

 mysql -uroot -p[senha]

5. Conceda o seguinte privilégio:

mysql> GRANT ALL ON *.* TO 'root'@'%' IDENTIFIED BY '[senha]' WITH GRANT OPTION;

Caso queira conceder acesso a uma máquina específica da rede:

mysql> GRANT ALL ON *.* TO 'root'@'[ip da máquina]' IDENTIFIED BY '[senha]' WITH GRANT OPTION;

6. Execute o seguinte comando:

mysql> FLUSH PRIVILEGES;

Obs.: caso queira testar a conexão, execute esse comando em uma máquina cliente da rede:

 myslq -uroot -p[senha] -h[IP do servidor]

```
`$ mysql> update user set plugin='mysql_native_password' where user='root';`
`update user set authentication_string=PASSWORD('123456') where user='root';`
`flush privileges;`


## Instalando:
 `$ npm install knex mysql`

## Configurando:
`$ npx knex init`

```module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
```

``