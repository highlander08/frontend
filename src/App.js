// usar sempre que for usado jsx  //
import React, {useState, useEffect} from 'react'; 
// conectar o front com o backend //
import api from './services/api';

import './App.css';

import Header from './components/Header';
//podemos incluir tanto componente, quanto html puro dentro do react//
function App(){
// transformado em estado usando o useState // 
// usestate retorna um array com duas posiçoes 
// 1 - pega variavel com seu valor inicial//
// 2  - usa funnção para atualizar o valor //
// colocar o parametro de useState diacordo com o projects seja ele array ou objeto//
  const [projects, setProjects] = useState ([]);
  // disparando a função x sempre que projects for alterado //
  useEffect( ()=>{
  //buscando lista sem colocar a base url//
   api.get('projects').then(response => { // then(mesma funcionadlidade de async await ) e retornando a respota dentro do parametro(response)//
    // usando o data pra preencher os projects //
    setProjects(response.data);
   });
  }, []);
  // adiçao de mais um projeto em modelo asincorna //  

   async function AddProject(){
    /*adicionando uma informação no array e passando a data no projeto//
    /projects.push(`Novo Projeto${Data.new()}`);*/
    // copiando o valor de projects e adiconando novas informaçoes para projects
    //setProjects([...projects, `Novo Projeto ${Date.now()}`]);//
    //enviar uma requisição do tipo post para rota projects  e enviando informaçoes
     const response = await api.post('projects', {
      title: `Novo Projeto ${Date.now()}`,
      owner: 'highlander santos' 
     });
     // criando uma vairavel contendo todos os dados do array mais a nova informação adicionda //
     const project = response.data;
     //copiando todos osprojetos metodo de imutabilidade e adicionando um novo projeto no final do array
     setProjects([...projects, project]);
  }

  return(
    <>
    <Header title="Projects"/>
    <ul>
     {projects.map(project => <li key={project.id}>{project.title}</li>)} 
    </ul> 

   <button type="button" onClick={AddProject}>Adicionar butao</button>
   </>
  );
}
export default App;


// para cada um dos projetos retone uma lista para cada projeto //