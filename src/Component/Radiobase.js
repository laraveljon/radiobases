import React,{Fragment} from 'react';


const  Radiobase= ({result}) => {

    //extraer lasvariables
     const {radiobase, region, trafico,fecha} = result


    return ( 
        <Fragment>
        <table className="striped">
        <thead>
          <tr>
              <th>Radiobase</th>
              <th>Fecha</th>
              <th>Region</th>
              <th>Trafico</th>
          </tr>
        </thead>

        <tbody>
        <tr>
          <td>{radiobase}</td>
          <td>{fecha}</td>
          <td>{region}</td>
          {
            (() => {
                if (trafico <= 15)
                    return <td BGCOLOR="#FB3207">{trafico}</td>
                if (trafico > 15 && trafico <= 40)
                    return <td BGCOLOR="#E08949">{trafico}</td>
                if (trafico > 40 && trafico <= 90)
                    return <td BGCOLOR="#E9DC03">{trafico}</td>
                if (trafico > 90 )
                    return <td BGCOLOR="#24BA0A">{trafico}</td>
            })()
         }
          
        </tr>
        
      </tbody>
        </table>

        </Fragment>
     );
}
 
export default Radiobase;