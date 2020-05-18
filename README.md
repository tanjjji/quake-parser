# Quake Log Parser

Uma API em NodeJS que faz o parse dos logs de partida do jogo quake 3. 

### Instalando

Para instalar as dependencias do projeto utilize:.

```
npm install
```

Depois de finalizar a execução do código acima, basta iniciar a aplicação com:

```
npm start
```

## Rotas

**LISTAR TODAS AS PARTIDAS**

Retorna todas as partidas registradas no log de entrada.

**GET** ```/api/```

**200** ```OK```

**Exemplo de retorno**
```
{
    {
        "id":0,
        "total_kills":0,
        "players":[],
        "kills":{}
    },

    {
        "id":1,
        "total_kills":11,
        "players":["Isgalamido","Mocinha"],
        "kills":{"Isgalamido":3}
    }
}
```


----------
**VER UMA PARTIDA ESPECÍFICA**

Retorna uma partida especifica a partir do id informado.

**POST** ```/api/{id}```

**200** ```OK```

**Exemplo de retorno**
```
{
    {
        "id":2,
        "total_kills":4,
        "players":["Isgalamido","Mocinha","Zeh","Dono da Bola"],
        "kills":{
            "Isgalamido":1
        }
    }
}
```


## Author

* **Felipe Tanji**