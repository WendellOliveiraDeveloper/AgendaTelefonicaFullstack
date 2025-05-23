import React from "react";
import "./modalCadastroStyle.css";

function ModalCadastro({ onClose }) {
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
          <div className="modalCampos">
            <label htmlFor="campoNome" className="labelCampos">
              Nome
            </label>
            <input type="text" name="" id="campoNome" />
            <label htmlFor="campoEmail" className="labelCampos">
              Email
            </label>
            <input type="email" name="" id="campoEmail" />
            <label htmlFor="campoTelefone" className="labelCampos">
              Telefone
            </label>
            <input type="text" name="" id="campoTelefone" />
          </div>
          <div className="botoesModal">
            <button className="botaoCancelar" onClick={onClose}>
              Cancelar
            </button>
            <button className="botaoCadastrar">Cadastrar</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalCadastro;
