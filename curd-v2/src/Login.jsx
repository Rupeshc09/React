import { useNavigate } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";

function Login() {
    const [credentials, setCredentials] = useState({userName: "", Password: ""})

    const [message, setMessage ] = useState("");
    const navigate =  useNavigate()

    useEffect(()=>{
        if(message!="")
        {
            setTimeout(() => {
                setMessage("");
            }, 3000);
        }
    }, [message])

    const SignIn = ()=>{

        if(credentials.userName == "abc" && credentials.Password == "123")
        {
            sessionStorage.setItem("isLoggedIn", 'true');
            navigate("/products", {replace: "true"});
        }
        else
        {
            setCredentials({userName: "", Password: ""});
            setMessage("Credentials are invalid")
          
        }
       
    }

    const OnTextChange = (args)=>{
        var copyOfCredentials = {...credentials};
        copyOfCredentials[args.target.name] = args.target.value;
        setCredentials(copyOfCredentials)
    }
    return (<>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td>UserName</td>
                            <td>
                                <input type="text" 
                                name="userName"
                                value={credentials.userName}
                                onChange={OnTextChange}/>
                            </td>
                        </tr>

                          <tr>
                            <td>Password</td>
                            <td>
                                <input type="password" 
                                value={credentials.Password}
                                name="Password" onChange={OnTextChange}/>
                            </td>
                          </tr>

                          <tr>
                            <td></td>
                            <td>
                                <button onClick={SignIn}
                                className="btn btn-primary">Login</button>
                            </td>
                          </tr>
                    </tbody>
                </table>
        <hr></hr>
        <div className="alert alert-warning">
            {message}
        </div>
              
            </div>
            </>);
}

export  {Login};