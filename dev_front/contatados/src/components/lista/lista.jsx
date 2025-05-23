import React from "react";
import "./listaStyle.css";
import { useState } from "react";

function listaContatos() {
  return (
    <>
      <p>Sua lista de contatos:</p>
      <table>
        <th>
          <td>Nome</td>
          <td>Email</td>
          <td>Telefone</td>
        </th>
      </table>
    </>
  );
}

export default listaContatos;
