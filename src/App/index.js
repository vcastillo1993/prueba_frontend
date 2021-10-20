import React, { useEffect, useState } from 'react';
import { AppUI } from './AppUI';


function App() {

  const [characters, setCharacters] = useState([]);
  const [likes, setLikes] = useState(0);
  const [scenes, setScenes] = useState([]);
  const [paginas, setPaginas] = useState({});
  const [save, setSave] = useState(false);
  const [loading, setLoading] = useState(true);

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
    setTimeout(() => {
      fetchCharacters(url);
      setLoading(false);
    }, 3000);

  }, [])

  const addscenes = (id, callback) => {
    const newScenes = characters.findIndex(charact => charact.id === id);
    setScenes([...scenes, characters[newScenes]]);
    callback([...scenes, characters[newScenes]])
    console.log(scenes)
  }

  const saveOnLocalStorage = (scenesToSave) => {
    localStorage.setItem('savedScenes', JSON.stringify(scenesToSave))
  }

  const delet = (id) => {
    const deleteScene = characters.findIndex(charact => charact.id === id);
    const newCaracters = [...characters]
    newCaracters.splice(deleteScene, 1)
    setCharacters(newCaracters);
  }

  const deletsave = (id) => {
    const deleteScene = scenes.findIndex(charact => charact.id === id);
    const newCaracters = [...scenes]
    newCaracters.splice(deleteScene, 1)
    setScenes(newCaracters);
  }

  return (
    <AppUI
      loading={loading}
      likes={likes}
      setLikes={setLikes}
      save={save}
      setSave={setSave}
      scenes={scenes}
      characters={characters}
      paginas={paginas}
      delet={delet}
      addscenes={addscenes}
      deletsave={deletsave}
      saveOnLocalStorage={saveOnLocalStorage}
      fetchCharacters={fetchCharacters}
    />
  );
}

export default App;
