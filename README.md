# finance-backend


<h3>Atualização de token</h2>
<table>
  <tr>
    <th>URL</th>
    <th>Metódo</th>
  </tr>

  <tr>
    <td>/refreshToken</td>
    <td>POST</td>
  </tr>
</table>

<table>
  <tr>
    <th>Endpoint</th>
    <th>Obrigatório</th>
    <th>Tipo</th>
    <th>Exemplo</th>
  </tr>

  <tr>
    <td>email</td>
    <td>Sim</td>
    <td>String</td>
    <td>email@dominio.com</td>
  </tr>

  <tr>
    <td>password</td>
    <td>Sim</td>
    <td>String</td>
    <td>password123</td>
  </tr>
</table>

<h3>Usuários</h2>

<table>
  <tr>
    <th>URL</th>
    <th>Metódo</th>
  </tr>

  <tr>
    <td>/user</td>
    <td>POST, GET</td>
  </tr>
</table>

<table>
  <tr>
    <th>Endpoint</th>
    <th>Obrigatório</th>
    <th>Tipo</th>
    <th>Exemplo</th>
  </tr>

  <tr>
    <td>nome</td>
    <td>Sim</td>
    <td>String</td>
    <td>Joao</td>
  </tr>

  <tr>
    <td>segundo_nome</td>
    <td>Sim</td>
    <td>String</td>
    <td>Alves</td>
  </tr>

  <tr>
    <td>email</td>
    <td>Sim</td>
    <td>String</td>
    <td>email@dominio.com</td>
  </tr>

  <tr>
    <td>password</td>
    <td>Sim</td>
    <td>String</td>
    <td>senha123</td>
  </tr>
</table>

<h3>Lançamentos</h2>

<table>
  <tr>
    <th>URL</th>
    <th>Metódo</th>
  </tr>

  <tr>
    <td>/launch</td>
    <td>POST, GET</td>
  </tr>
</table>

<table>
  <tr>
    <th>Endpoint</th>
    <th>Obrigatório</th>
    <th>Tipo</th>
    <th>Exemplo</th>
    <th>Observation</th>
  </tr>

  <tr>
    <td>descricao</td>
    <td>Sim</td>
    <td>String</td>
    <td>Computador</td>
    <td>-</td>
  </tr>

  <tr>
    <td>tipo</td>
    <td>Sim</td>
    <td>Integer</td>
    <td>1</td>
    <td>1 = Despesa <br> 2 = Receita</td>
  </tr>

  <tr>
    <td>recorrencia</td>
    <td>Sim</td>
    <td>integer</td>
    <td>1</td>
    <td>1 = Valor único <br> 2 = Valor com recorrência</td>
  </tr>

  <tr>
    <td>valor</td>
    <td>Sim</td>
    <td>String</td>
    <td>22.50</td>
    <td>-</td>
  </tr>

  <tr>
    <td>qtd_recorrencia</td>
    <td>Não</td>
    <td>Integer</td>
    <td>12</td>
    <td>Quantidade de repetições <br> do lançamento</td>
  </tr>

</table>
