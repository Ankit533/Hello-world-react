import React from "react";

function Test1(){
    const  myfun = () =>{
        alert("Working")
    }
    return(
        <div>
            <button onClick={myfun}>Click</button>
        </div>
    )
}

export default Test1