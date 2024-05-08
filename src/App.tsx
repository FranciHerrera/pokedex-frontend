import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form/Form";

function App() {
  return (
    <>
      <div className="container p-3 my-3 bg-dark text-white">
        <Header title="Iniciar sesion" />
        <Form />
      </div>
    </>
  );
}

export default App;
