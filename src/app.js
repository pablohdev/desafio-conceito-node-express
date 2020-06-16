const express = require("express");
const cors = require("cors");

const {uuid, isUuid} = require('uuidv4')



const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  
   
    return response.json(repositories);


});

app.post("/repositories", (request, response) => {
  
  const {title,url,techs} = request.body;

    const newRepository = {
      id: uuid(),
      title,
      url,
      techs,
      likes : 0
    }

    repositories.push(newRepository);
    
    return response.status(201).json(newRepository)


});

app.put("/repositories/:id", (request, response) => {
 
    const {id} = request.params;
    const {title,url,techs} = request.body;
    
    const repositoryIndex = repositories.findIndex(repository => repository.id.includes(id))

    if(repositoryIndex < 0){
      return response.status(400).json({message: 'Repository not found'});
    }

    repositories[repositoryIndex] = {
        id
      , title
      , url
      , techs
      , likes: repositories[repositoryIndex].likes
    }

    return response.json(repositories[repositoryIndex])
  
});

app.delete("/repositories/:id", (request, response) => {

  const {id} = request.params;

 
  const repositoryIndex = repositories.findIndex(repository => repository.id.includes(id))

  if(repositoryIndex < 0){
    return response.status(400).json({message: 'Repository not found'});
  }


  repositories.splice(repositoryIndex,1)

  return response.send(204)
  
});

app.post("/repositories/:id/like", (request, response) => {
  

  const {id} = request.params;

  const repositoryIndex = repositories.findIndex(repository => repository.id.includes(id))

  if(repositoryIndex < 0){
    return response.status(400).json({message: 'Repository not found'});
  }

  repositories[repositoryIndex].likes++

  return response.json(repositories[repositoryIndex]);

});

module.exports = app;
