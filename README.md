# api-getInfoYoutube

API foi desenvolvida em Express com o objetivo de retornar links de música/vídeos do seu download e retornar este conteudo em um JSON.

## Rotas

Rotas da API:

| URL | Métodos | Descrição |
| -------- | ------------- | --------- |
| `/api/v1/video?link=` | GET | Pesquisa o link do vídeo e retorna um JSON do link de download |
| `/api/v1/music?link=` | GET | Pesquisa o link da música e retorna um JSON do link de download |

Paramêtros:

| Parâmetro | Tipo de valor | Default | Obrigatório | Descrição |
| -------- | ------------- | ---------- | --------- | --------- |
| link | str | null | Sim | URL |

Exemplo:

<<<<<<< HEAD

`api-get-info-youtube.herokuapp.com/api/v1/music?link=https://www.youtube.com/watch?v=T9yGcKlYAiw`
=======
`api-get-info-youtube.herokuapp.com/api/v1/music?link=https://www.youtube.com/watch?v=T9yGcKlYAiw`
>>>>>>> 6457d3ba5146821599c07c78b96faf1fd9115128
