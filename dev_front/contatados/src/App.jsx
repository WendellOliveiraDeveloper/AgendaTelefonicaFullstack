import "./App.css";
import HeaderComponent from "./components/cabecalho/header";
import ListaContatos from "./components/lista/lista";
import FooterComponent from "./components/footer/footer";

function App() {
  return (
    <>
      <HeaderComponent />
      <ListaContatos />
      <FooterComponent />
    </>
  );
}

export default App;
