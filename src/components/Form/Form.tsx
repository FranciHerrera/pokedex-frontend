import { useState, useEffect } from "react"
import "./Form.css"
import Data from "./Data";

function Form (){
    const [email, setEmail] = useState<string>("");
    const [passwd, setPasswd] = useState<string>("");
    const [showData, setShowData] = useState<boolean>(false);

    const loginData = {
        email: "franxbox6@gmail.com",
        passwd: "1234"
    }
    
    //curried function
    const handleInputChange = (stateUpdate: any) => {
        return (event: any) => {
            stateUpdate(event.target.value);
        }
    }

    const handleOnClick = () => {
        if(showData){
            setEmail("");
            setPasswd("");
        }
        if(email === loginData.email && passwd == loginData.passwd){
            alert("Bienvenido")
        }
        else{
            alert("Datos incorrectos")
        }
        //toggleflag
        //setShowData(!showData);
    }
    return(
    <>
    <Data passwd={passwd} email={email} showData={showData} />
    <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" className="form-control" placeholder="Ingresa email" value={email} onChange={handleInputChange(setEmail)} />
    </div>
    <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" name="password" className="form-control" placeholder="Ingresa contraseña" value={passwd} onChange={handleInputChange(setPasswd)} />
    </div>
    <button className="btn btn-primary" onClick={handleOnClick}>Ingresar</button>
    </>
    )
}

export default Form