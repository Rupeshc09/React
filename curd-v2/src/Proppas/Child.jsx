import GrandChild from "./GrandChild";

function Child(props) {
    //debugger;
    const ChangeStateOfParent = ()=>{
        //props.parentname = "blah blah";
        
        props.SomeFunction("cdac");
    }
     console.log("Child render")
    return (<>
                <h1>This is Child</h1>
                <h2>Data received from parent is : </h2>
                <h2>Parameter 1 = {props.parameter1}</h2>
                <h2>Parameter 2 = {props.parameter2}</h2>
                <h2>Parent Name received is  = {props.parentname}</h2>
                <button onClick={ChangeStateOfParent}>Child Button</button>
                <hr></hr>
                <GrandChild {...props}></GrandChild>
                {/* Above line is same as  below code */}
                {/* <GrandChild  parameter1={props.parameter1} 
                             parameter2={props.parameter2}
                             parentname={props.parentname}
                             SomeFunction = {props.SomeFunction}></GrandChild> */}
            </>);
}

export default Child;