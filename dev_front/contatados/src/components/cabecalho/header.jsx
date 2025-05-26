import React from "react";
import { useState } from "react";
import "./headerStyle.css";
import { useSelector } from "react-redux";
import ModalCadastro from "../modal/cadastro/modalCadastro";
import { verQuantidadeContatos } from "../../features/contatos/contatosSlice";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const numContatos = useSelector(verQuantidadeContatos);

  return (
    <>
      <div className="principal">
        <div className="cabecalho">
          <h1>Bem vindo ao contatados</h1>
          {numContatos === 0 ? (
            <p>Você não tem contatos</p>
          ) : (
            <p>Você tem: {numContatos} contatos</p>
          )}
        </div>
      </div>
      <div className="botaoAdicionar">
        <button onClick={() => setShowModal(true)}>Adicionar contatos</button>
      </div>
      {showModal && <ModalCadastro onClose={() => setShowModal(false)} />}
    </>
  );
}
export default Header;
