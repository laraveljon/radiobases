import React,{Fragment, useState, useEffect} from 'react';
import Header from './Component/Header';
import Formulario from './Component/Formulario';
import Listado from './Component/Listado';

function App() {

  //state de busqueda 
  const [busqueda, guardarBusqueda] = useState({
    radiobase:'',
    region:''
});

const[consultar, guardarConsultar] = useState(false);
const [resultado, guardarResultado] = useState([]);
const { radiobase, region} = busqueda;
const [error, guardarError] = useState(false);

useEffect(() => {
  const consultarAPI = async () => {
    
   if(consultar){

    if(radiobase != "" && region !=""){

     // console.log("Entra para General");

            const url = `http://localhost:3001/radiobases?radiobase=${radiobase}&region=${region}`;

            const respuesta =  await fetch(url);
            const resultado = await respuesta.json(); 
        
            console.log(resultado);
        
            guardarResultado(resultado);
        
            if(resultado === ""){
              guardarError(true)
            }else{
              guardarError(false)
            }
        
            // detecta si hubo resultados correctos en la consulta
            if(resultado === ""){
              guardarError(true)
            }else{
              guardarError(false)
            }

    }else if( radiobase != ""){

     // console.log("Entra para Radio base");

      const url = `http://localhost:3001/radiobases?radiobase=${radiobase}`;

      const respuesta =  await fetch(url);
      const resultado = await respuesta.json(); 
  
      console.log(resultado);
  
      guardarResultado(resultado);
  
      if(resultado === ""){
        guardarError(true)
      }else{
        guardarError(false)
      }
  
      // detecta si hubo resultados correctos en la consulta
      if(resultado === ""){
        guardarError(true)
      }else{
        guardarError(false)
      }

    }else if(region){

      
     // console.log("Entra para Region");

      const url = `http://localhost:3001/radiobases?region=${region}`;

      const respuesta =  await fetch(url);
      const resultado = await respuesta.json(); 
  
      console.log(resultado);
  
      guardarResultado(resultado);
  
      if(resultado === ""){
        guardarError(true)
      }else{
        guardarError(false)
      }
  
      // detecta si hubo resultados correctos en la consulta
      if(resultado === ""){
        guardarError(true)
      }else{
        guardarError(false)
      }

    }
    // busqueda general


    // http://localhost:3001/radiobases?radiobase=RB010017C101
    // http://localhost:3001/radiobases?region=6



   }
  }

  consultarAPI();
  //console.log(radiobase);

}, [consultar])



  return (
   <Fragment>
   <Header 
         titulo ="Radiobases"
    />
    <div className="contenedor-form">
     <div className="container">
       <div className="row">
        <div className ="col md6 s12">
          <Formulario
                  busqueda={busqueda}
                  guardarBusqueda={guardarBusqueda}
                  guardarConsultar={guardarConsultar} 
          />
        </div>
        <div className ="col md6 s12">
         <Listado
            resultado = {resultado}
          />
        </div>
       </div>
     </div>
    </div>
   </Fragment>
  );
}

export default App;
