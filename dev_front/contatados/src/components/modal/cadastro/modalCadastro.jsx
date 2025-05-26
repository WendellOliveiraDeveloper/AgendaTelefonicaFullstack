import React from "react";
import "./modalCadastroStyle.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContato } from "../../../features/contatos/contatosSlice";

function ModalCadastro({ onClose }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const dispacth = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !telefone) {
      alert("Preencha os campos de nome e telefone");
      return;
    }

    dispacth(addContato(nome, email, telefone));
    setNome("");
    setEmail("");
    setTelefone("");
    onClose();
  };

  return (
    <>
      <div className="modal">
        <div className="modalContent">
          <div className="modalHeader">
            <p>Digite os dados:</p>
            <button onClick={onClose} className="closeButton">
              X
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modalCampos">
              <label htmlFor="campoNome" className="labelCampos">
                Nome
              </label>
              <input
                type="text"
                name=""
                id="campoNome"
                value={nome}
                required
                onChange={(e) => setNome(e.target.value)}
              />
              <label htmlFor="campoEmail" className="labelCampos">
                Email
              </label>
              <input
                type="email"
                name=""
                id="campoEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu_email@gmail.com"
              />
              <label htmlFor="campoTelefone" className="labelCampos">
                Telefone
              </label>
              <input
                type="text"
                name=""
                id="campoTelefone"
                value={telefone}
                required
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="(xx) xxxxx-xxxx"
              />
            </div>
            <div className="botoesModal">
              <button className="botaoCancelar" onClick={onClose}>
                Cancelar
              </button>
              <button type="submit" className="botaoCadastrar">
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ModalCadastro;
