import React from "react";

export const Incrementar = React.memo(({incrementar}) => {
    console.log('me estoy renderizando')
    return(
        <button onClick={()=>incrementar(5)}>+1</button>
    )
}
)
