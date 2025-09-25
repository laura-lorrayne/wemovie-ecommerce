# Documentação do Endpoint: Listagem de Filmes

## Método

`GET /api/movies`

---

## Parâmetros de URL

- Nenhum.

---

## Body

- Nenhum, pois a requisição é do tipo `GET`.

---

## Respostas

### Sucesso (200 OK)

Retorna um array de objetos JSON, onde cada objeto representa um filme disponível para venda. Se não houver filmes, retorna um array vazio `[]`.

**Exemplo de resposta:**

```json
[
  {
    "id": 1,
    "title": "Viúva Negra",
    "price": 9.99,
    "image": "[https://wefit-react-web-test.s3.amazonaws.com/viuva-negra.png](https://wefit-react-web-test.s3.amazonaws.com/viuva-negra.png)"
  },
  {
    "id": 2,
    "title": "Shang-chi",
    "price": 30.99,
    "image": "[https://wefit-react-web-test.s3.amazonaws.com/shang-chi.png](https://wefit-react-web-test.s3.amazonaws.com/shang-chi.png)"
  },
  {
    "id": 3,
    "title": "Homem Aranha",
    "price": 29.9,
    "image": "[https://wefit-react-web-test.s3.amazonaws.com/spider-man.png](https://wefit-react-web-test.s3.amazonaws.com/spider-man.png)"
  },
  {
    "id": 4,
    "title": "Morbius",
    "price": 1.5,
    "image": "[https://wefit-react-web-test.s3.amazonaws.com/morbius.png](https://wefit-react-web-test.s3.amazonaws.com/morbius.png)"
  },
  {
    "id": 5,
    "title": "O Batman",
    "price": 23.9,
    "image": "[https://wefit-react-web-test.s3.amazonaws.com/the-batman.png](https://wefit-react-web-test.s3.amazonaws.com/the-batman.png)"
  }
]
```
