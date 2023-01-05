import React from "react";


function Contador(props){
    return(
        <div className="contador">
            {props.numClics}
        </div>
    );
}

export default Contador;