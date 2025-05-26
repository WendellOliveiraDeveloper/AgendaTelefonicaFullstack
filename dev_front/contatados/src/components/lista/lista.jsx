import React from "react";
import "./listaStyle.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalCadastro from "../modal/cadastro/modalCadastro";
import {
  deleteContact,
  selectAllContacts,
  updateContact,
} from "../../features/contatos/contatosSlice";

function listaContatos() {
  const [showModal, setShowModal] = useState(false);
  const contatos = useSelector(selectAllContacts);
  const dispacth = useDispatch();

  const handleDelete = (id) => {
    dispacth(deleteContact(id));
  };

  return (
    <>
      <div className="cabecalhoLista">
        <p>Sua lista de contatos:</p>
      </div>
      {contatos.length === 0 ? (
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          Você não possui contatos
        </p>
      ) : (
        <div className="tabelaContatos">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {contatos.map((contato) => (
                <tr key={contato.id}>
                  <td>{contato.name ? contato.name : "Não informado"}</td>
                  <td>{contato.email ? contato.email : "Não informado"}</td>
                  <td>{contato.phone ? contato.phone : "Não informado"}</td>
                  <td>
                    <div className="botoesTabela">
                      <button
                        className="botaoEditar"
                        onClick={() =>
                          updateContact(contato.id) && setShowModal(true)
                        }
                      >
                        Editar
                      </button>
                      <button
                        className="botaoRemover"
                        onClick={() => handleDelete(contato.id)}
                      >
                        Remover
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {showModal && <ModalCadastro onClose={() => setShowModal(false)} />}
    </>
  );
}

export default listaContatos;
