import { useState } from "react";
import Child from "./Child";

function Parent() {
    const [name, setName] =  useState("iacsd");

    const Change =(data)=>{
        debugger;
        setName(data);
    }
    console.log("Parent render")
    return (<>
                <h1>This is Parent : State Name Value is {name}</h1>
                <button onClick={Change}>Change State</button>
                <hr></hr>
                <Child parameter1="abc" parameter2="xyz"
                       parentname={name} SomeFunction = {Change}/>
                    
            </>);
}

export default Parent;