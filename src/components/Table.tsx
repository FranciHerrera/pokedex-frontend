import { useEffect, useState } from "react";
import "./Table.css";

const Table = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/species/getspecies")
      .then((resp) => {
        resp.json().then((result) => {
          setdata(result);
        });
      })
      .catch((resp) => {
        console.log(resp);
      });
  }, []);

  return (
    <div className="container">
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripción</th>
            {/* <th scope="col">Tipo</th> */}
            <th scope="col">Peligro</th>
            <th scope="col">Velocidad</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              {/* <td>{item.type}</td> */}
              <td>{item.danger}</td>
              <td>{item.speed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
