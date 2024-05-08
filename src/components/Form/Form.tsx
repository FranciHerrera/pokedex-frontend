import { useState, useEffect } from "react";
import "./Form.css";
import Data from "./Data";

const API_URL = "http://localhost:3000/";

function Form() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showData, setShowData] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);
  const [speciesData, setSpeciesData] = useState<any[]>([]);

  useEffect(() => {
    const userInStorageString = window.localStorage.getItem("user");
    const userInStorage = JSON.parse(userInStorageString);
    setUser(userInStorage);
  }, []);

  const loginData = {
    email: "fran@example.com",
    passwd: "1234",
  };

  //curried function
  const handleInputChange = (stateUpdate: any) => {
    return (event: any) => {
      stateUpdate(event.target.value);
    };
  };

  const handleOnClick = () => {
    logIn({ email, password });
    fetchSpecies();
  };

  const logIn = async ({
    email,
    password,
  }: {
    email: String;
    password: String;
  }) => {
    try {
      const response = await fetch(`${API_URL}api/v1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.status == 200) {
        const data = await response.json();
        setUser(data);
        window.localStorage.setItem("user", JSON.stringify(data));
        alert("Bienvenido");
      } else {
        alert("Usuario o contraseña incorrectos");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  // const fetchSpecies = async () => {
  //   try {
  //     const response = await fetch(`${API_URL}api/v1/species/`, {
  //       headers: {
  //         Authorization: `Bearer ${user.token}`,
  //       },
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {}
  // };
  const fetchSpecies = async () => {
    try {
      const response = await fetch(`${API_URL}api/v1/species/`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      if (response.status === 200) {
        const data = await response.json();
        setSpeciesData(data);
      } else {
        console.error("Error al recuperar las especies");
      }
    } catch (error) {
      console.error("Error al procesar la solicitud:", error);
    }
  };

  return (
    <>
      {/* {user && (
        <section className="dataContainer">
          {
            <>
              <p>Email: {user.user.email}</p>
              <p>Nombre: {user.user.name}</p>
              <p>Id: {user.user.id}</p>
            </>
          }
        </section>
      )} */}
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          placeholder="Ingresa email"
          value={email}
          onChange={handleInputChange(setEmail)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          className="form-control"
          placeholder="Ingresa contraseña"
          value={password}
          onChange={handleInputChange(setPassword)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleOnClick}>
        Ingresar
      </button>
      {speciesData.length > 0 && (
        <section className="speciesContainer">
          <h2>Datos de las especies:</h2>
          {speciesData.map((species, index) => (
            <div key={index}>
              <p>Nombre: {species.name}</p>
              <p>Descripcion: {species.description}</p>
              {/* Otros datos de la especie si es necesario */}
            </div>
          ))}
        </section>
      )}
    </>
  );
}

export default Form;
