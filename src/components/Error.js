import React from 'react';
import PageError from '../images/pagenotfound.JPG'

var error=()=>{
    return(
        <div>
            <center>
                <img src={PageError} height={400} width={500}/>
            </center>
        </div>
    )
}

export default error;