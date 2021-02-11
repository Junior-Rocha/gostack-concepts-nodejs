const express =  require('express');
const app = express();
const PORT = 3333;

app.use(express.json());
/*
* Métods HTTP
1 - GET:    Buscar informaçõees do backend
2 - POST:   Criar uma informação no backend
3 - PUT/PATCH: Alterar uma informação no backend
4 - DELETE:  Deletar uma informação no backend

* Tipos de Parametros
1 - Query Params: Filtros e paginação
2 - Route Params: Identificar recursos (Atualizar/Deletar)
3 - Request Body: Conteúdo na hora criar ou editar um recurso (JSON) 
*/
// Query Params

app.get('/projects', (request, response) => {
   const {title, owner} = request.query;
   console.log(title);
   console.log(owner);
});

// Request Body
app.post('/projects', (request, response) => {
   const {title, owner} = request.body;
   console.log(title);
   console.log(owner);
});

// Route Params
app.put('/projects/:id', (request, response) => {
  const params = request.params;
  console.log(params);
})

app.delete('/projects/:id', (request, response) => {
  return response.json([
    'projeto 21',
    'projeto 22',
    'projeto 23',
  ])
})

app.listen(PORT, (err) => {
  if(err){
    console.log('Ops error!');
  }else {
    console.log(`🚀  Server started on port ${PORT}`);
  }
})  