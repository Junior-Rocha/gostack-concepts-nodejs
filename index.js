const express = require('express')
const app = express()
app.use(express.json())
const PORT = 3000

const projects = []
// Middleware que verifica se o projeto ja existe
function checkProjectExists(req, res, next) {
  const { id } = req.params;
  const project = projects.find(p => p.id == id);
  if (!project) {
    return res.status(400).json({ error: 'Projeto não encontrado' });
  }
  return next();
}

function logRequests(req, res, next) {
  console.count("Quantidade de requisições");
  return next();
}
server.use(logRequests);

//criacão de um novo projeto
app.post('/projects', (req, res)=> {
  const {id, title} = req.body
  const project = {
    id,
    title,
    tasks:[]
  }
  projects.push(project)
  return res.json(project)
})

//Listar projetos
app.get('/projects', (req, res)=> {
  return res.json(projects)
})
// Altera o titulo do projeto utilizando o id
app.put('/projects/:id',checkProjectExists,(req, res)=> {
 const {id} = req.params
 const {title} = req.body
 const project = projects.find(p => p.id == id);
 project.title = title;
 return res.json(project);
})
// Deleta o projeto
app.delete('/projects/:id',checkProjectExists,(req, res)=> {
 const {id} = req.params
 const projectId = projects.findIndex(p => p.id == id);
 projects.splice(projectId, 1)
 res.json({Message:"Deletado com sucesso"})
})
// Adiciona Tarefa no projeto pelo id
app.post('/projects/:id/tasks',checkProjectExists,(req, res)=> {
  const { id } = req.params;
  const { title } = req.body;
  const project = projects.find(p => p.id == id);
  project.tasks.push(title);
  return res.json(project);
})

app.listen(PORT, () =>{
  console.log(`Server started on port ${PORT}`)
})