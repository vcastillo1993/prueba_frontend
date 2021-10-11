import React, { useEffect, useState } from 'react';
import './App.css';
import ContentHistory from './contentHistoris/ContentHistory';
import Historias from './historias/Historias';
import Header from './header/Header';
import Likes from './likes/Likes';
/* import Pages from './pages/Pages'; */

function App() {
  const [characters, setCharacters] = useState([]);
  const [likes, setLikes] = useState(0);
  const [scenes, setScenes] = useState([]);
  const [paginas, setPaginas] = useState({});
  const [save, setSave] = useState(false);
  
  const url = "https://rickandmortyapi.com/api/character";
  /* funcion para el llamado de la api */
  const fetchCharacters = (url) => {

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results)
        setPaginas(data.info);
      })
      .catch(error => console.log(error))
  };

  useEffect(() => {
    fetchCharacters(url);
  }, [])

  const addscenes = (id, callback) => {
    const newScenes = characters.findIndex(charact => charact.id === id);
    /* console.log('characters[newScenes]: ', characters[newScenes]) */
    setScenes([...scenes,characters[newScenes]]);
    callback([...scenes,characters[newScenes]])
    console.log(scenes)
  }

  const saveOnLocalStorage = (scenesToSave) => {
    localStorage.setItem('savedScenes', JSON.stringify(scenesToSave))
  }

  return (
    <div className="App">
      <Header />
      <Likes 
      likes={likes} 
      cambio = {()=>setSave(true)}
      retorn = {()=>setSave(false)}
      />      
      <ContentHistory>
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
              savescene={() => addscenes(personaje.id, saveOnLocalStorage)}
              save = {save}
            />
          ))):
          null
        } 
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
              /* savescene={() => addscenes(personaje.id, saveOnLocalStorage)} */
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
      {/* <Pages
        prev={paginas.prev}
        next={paginas.next}
        avanzar={() => avanzar()}
        devolber={() => devolber()}
      /> */}

    </div >
  );
}

export default App;
