import React, { useState } from 'react';



function TageEdit(){
    const [Tage, setTage] = useState(["java"]);
    return(
        <div>
            <div className="wrapTage">
                <p>{Tage}</p>
            </div>
        </div>
    )
}

export default TageEdit;