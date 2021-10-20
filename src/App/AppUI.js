import React from "react";
import './App.css';
import ContentHistory from '../components/contentHistoris/ContentHistory';
import Historias from '../components/historias/Historias';
import Header from '../components/header/Header';
import Likes from '../components/likes/Likes';


function AppUI(props){

  const {
    loading,
    likes, 
    setLikes, 
    save, 
    setSave, 
    scenes, 
    characters, 
    paginas, 
    delet, 
    addscenes, 
    deletsave,
    saveOnLocalStorage,
    fetchCharacters
  } = props;

  return(
    <div className="App">
    <Header />
    <Likes 
    likes={likes} 
    cambio = {()=>setSave(true)}
    retorn = {()=>setSave(false)}
    />
    <div className='progress-bar'>
      <div className='progress' style={{width: `${(scenes.length*100)/500}%`}}>{(scenes.length*500)/500}%</div>
      </div>   
    <ContentHistory>
    {loading && <p>espera unos momentos estamos cargando</p>}
    
      {
      !save?
        (characters.map(personaje => (
          <Historias
            key={personaje.id}
            name={personaje.name}
            status={personaje.status}
            species={personaje.species}
            image={personaje.image}
            like={() => setLikes(likes + 1)}
            eliminar={()=>delet(personaje.id)}
            addscenes={() => addscenes(personaje.id, saveOnLocalStorage)}
            save = {save}
          />
        ))):
        null
      }
      {(!loading && !scenes.length) && <p>Debes guardar personajes</p>} 
      {
      save?
        (scenes.map(personaje => (
          <Historias
            key={personaje.id}
            name={personaje.name}
            status={personaje.status}
            species={personaje.species}
            image={personaje.image}
            like={() => setLikes(likes + 1)}
            eliminar={()=>deletsave(personaje.id)}
            save = {save}
          />
        ))):
        null
        
      } 
    </ContentHistory>
    <div className="contentpages">
      <div>
      {!save?(
        
      ([...Array(paginas.pages)].map((e, i) =>
      <button
        key={i}
        onClick={() =>
          fetchCharacters(`https://rickandmortyapi.com/api/character?page=${i + 1}`)
        }
      >
        {i + 1}
      </button>
    ))
      ): null
      }
      </div>
    </div>
   
  </div >
  )
}

export {AppUI};