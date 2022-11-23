import { useEffect, useState } from 'react';
import { getAllPokemonList } from './api/pokemon';
import './App.css';

function App() {
  const [pokemonData,setpokemonData] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      const data = await getAllPokemonList();
      setpokemonData(data?.result);
    }
    fetchData()
  },[])
  return (
    <div className="App">
 <div>

 </div>
    </div>
  );
}

export default App;
