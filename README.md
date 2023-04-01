# finance-backend


<h3>Refresh token</h2>
<table>
  <tr>
    <th>URL</th>
    <th>Method</th>
  </tr>

  <tr>
    <td>/refreshToken</td>
    <td>POST</td>
  </tr>
</table>

<table>
  <tr>
    <th>Endpoint</th>
    <th>Obligatory</th>
    <th>Type</th>
    <th>Exemple</th>
  </tr>

  <tr>
    <td>email</td>
    <td>true</td>
    <td>String</td>
    <td>email@dominio.com</td>
  </tr>

  <tr>
    <td>password</td>
    <td>true</td>
    <td>String</td>
    <td>password123</td>
  </tr>
</table>

<h3>Create new user</h2>

<table>
  <tr>
    <th>URL</th>
    <th>Method</th>
  </tr>

  <tr>
    <td>/user</td>
    <td>POST</td>
  </tr>
</table>

<table>
  <tr>
    <th>Endpoint</th>
    <th>Obligatory</th>
    <th>Type</th>
    <th>Exemple</th>
  </tr>

  <tr>
    <td>nome</td>
    <td>true</td>
    <td>String</td>
    <td>Joao</td>
  </tr>

  <tr>
    <td>segundo_nome</td>
    <td>true</td>
    <td>String</td>
    <td>Alves</td>
  </tr>

  <tr>
    <td>email</td>
    <td>true</td>
    <td>String</td>
    <td>email@dominio.com</td>
  </tr>

  <tr>
    <td>password</td>
    <td>true</td>
    <td>String</td>
    <td>senha123</td>
  </tr>
</table>

<h3>New launch</h2>

<table>
  <tr>
    <th>URL</th>
    <th>Method</th>
  </tr>

  <tr>
    <td>/launch</td>
    <td>POST</td>
  </tr>
</table>

<table>
  <tr>
    <th>Endpoint</th>
    <th>Obligatory</th>
    <th>Type</th>
    <th>Exemple</th>
    <th>Observation</th>
  </tr>

  <tr>
    <td>descricao</td>
    <td>true</td>
    <td>String</td>
    <td>Computador</td>
    <td>-</td>
  </tr>

  <tr>
    <td>tipo</td>
    <td>true</td>
    <td>Integer</td>
    <td>1</td>
    <td>1 = Despesa <br> 2 = Receita</td>
  </tr>

  <tr>
    <td>recorrencia</td>
    <td>true</td>
    <td>integer</td>
    <td>1</td>
    <td>1 = Valor único <br> 2 = Valor com recorrência</td>
  </tr>

  <tr>
    <td>valor</td>
    <td>true</td>
    <td>String</td>
    <td>22.50</td>
    <td>-</td>
  </tr>

  <tr>
    <td>qtd_recorrencia</td>
    <td>false</td>
    <td>Integer</td>
    <td>12</td>
    <td>Quantidade de repetições <br> do lançamento</td>
  </tr>

</table>
