import React from 'react';

import  './style.css';

export default function Table() {
  return (
    <>
        <h2>Lista de Lugares Cadastrados</h2>
        <div className="table">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Nome do Local</th>
                        <th scope="col">Endereço</th>
                        <th scope="col">Tipo de lixo reciclado</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>

        </div>
    </>
  );
}
