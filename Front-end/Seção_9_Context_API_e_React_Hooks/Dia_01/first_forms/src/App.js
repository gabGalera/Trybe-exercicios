import './App.css';
import { useState } from 'react';

function App() {
  const [state, setState] = useState({ 
    name: 'Meu nome', 
    idade: null, 
    cidade: ''
})

  const handleChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value,
    })
  }
  return (
    <form>
      <fieldset>
        <label>
          Nome: <input 
          type="text" 
          placeholder='Digite seu nome' 
          name="name"
          value={state.name}
          onChange={handleChange}
          />
        </label>
        <label>
          Idade: <input 
          type="number" 
          placeholder='Digite sua idade'
          name="idade"
          value={state.idade}
          onChange={handleChange}
          />
        </label>
        <label>
          Cidade: <input 
          type="text" 
          placeholder='Digite sua cidade' 
          name="cidade"
          value={state.cidade}
          onChange={handleChange}
          />
        </label>
        <input 
          type="radio" 
          value="Fundamentos"
          name="module" 
          checked={state.module === "Fundamentos"}
          onChange={handleChange}
        /> Fundamentos
        <input 
          type="radio" 
          value="Front-end" 
          name="module" 
          checked={state.module === "Front-end"}
          onChange={handleChange}
          /> Front-end
        <input 
          type="radio" 
          value="Back-end" 
          name="module" 
          checked={state.module === "Back-end"}
          onChange={handleChange}
        /> Back-end 
        <input 
          type="radio" 
          value="Ciência da computação" 
          name="module" 
          checked={state.module === "Ciência da computação"}
          onChange={handleChange}
        /> Ciência da computação
    </fieldset>
    </form>
  );
}

export default App;
