import React from 'react';
import Radiobase from './Radiobase';

const Listado = ({resultado}) => {
    return ( 
        
        <div>
           {
               resultado.map(result =>(
                  <Radiobase
                          key={result.id} 
                          result = {result}
                  />
               ))
           }
        </div>
     );
}
 
export default Listado;