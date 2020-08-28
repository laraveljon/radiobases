import React, {useState} from 'react';


const Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) => {

    //state del formulario 



    //const[error, guardarError] = useState(false)

        //extraer ciudad y pais 
        const {radiobase,region} = busqueda

    // funscino qu ecoloca los elementos en el state
    const handleChange = e =>{
        //actualizar el state
         guardarBusqueda({
             ...busqueda,
             [e.target.name] : e.target.value
         });
    }

    //cuando el usuario le da submit al form
    const handleSubmit= e =>{
        e.preventDefault();

        //console.log("Radio base ", radiobase);

        // validar
          // if(radiobase.trim() === '' || region.trim() === ''){

          //   guardarError(true);
          //   return;
          // }

          // guardarError(false);

        //pasarlo al componente principal
        guardarConsultar(true);
    }



    return ( 
       <form 
           onSubmit={handleSubmit}>
          
        <div className="input-field col s12">
          <input
               type="text"
               name ="radiobase"
               id="radiobase"
               value={radiobase}
               onChange={handleChange}
          />
          <label htmlFor="radiobase">Radiobase : </label>
        </div>
        <div className="input-field col s12">
          <select
              name="region" 
              id="region"
              value={region}
              onChange={handleChange}
          >
          <option value="">-- Selecione la region</option>
          
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="9">9</option>
        
          </select>
          <label htmlFor="region">Region : </label>
        </div>
        <div className="input-field col s12">
          <input
              type ="submit"
              value="Buscar Radiobases con region"
              className="waves-effect waves-light btn-large btn-block yellow accent-4" 
          />
        </div>
       </form>
     );
}
 
export default Formulario;