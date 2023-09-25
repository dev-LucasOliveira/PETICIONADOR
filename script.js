const button = document.getElementById('button');
button.addEventListener("click", function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const name2 = document.getElementById('name2').value;
  const nacionality = document.getElementById('nacionality').value;
  const nacionality2 = document.getElementById('nacionality2').value;
  const civilState = document.getElementById('civilState').value;
  const civilState2 = document.getElementById('civilState2').value;
  const occupation = document.getElementById('occupation').value;
  const occupation2 = document.getElementById('occupation2').value;
  const id = document.getElementById('id').value;
  const id2 = document.getElementById('id2').value;
  const idIssuedBy = document.getElementById('idIssuedBy').value;
  const idIssuedBy2 = document.getElementById('idIssuedBy2').value;
  const cpf = document.getElementById('cpf').value;
  const cpf2 = document.getElementById('cpf2').value;
  const cep = document.getElementById('cep').value;
  const cep2 = document.getElementById('cep2').value;
  const street = document.getElementById('street').value;
  const street2 = document.getElementById('street2').value;
  const number = document.getElementById('number').value;
  const number2 = document.getElementById('number2').value;
  const apt = document.getElementById('apt').value;
  const apt2 = document.getElementById('apt2').value;
  const district = document.getElementById('district').value;
  const district2 = document.getElementById('district2').value;
  const city = document.getElementById('city').value;
  const city2 = document.getElementById('city2').value;
  const state = document.getElementById('state').value;
  const state2 = document.getElementById('state2').value;

  const text = `
      PROCURAÇÃO:

      Outorgantes: ${name}, ${civilState}, ${occupation}, portador da carteira de identidade nº ${id} expedida pelo(a) ${idIssuedBy}, portador(a) do CPF sob o nº ${cpf}, residente e domiciliado á ${street}, nº ${number}, apto ${apt}, ${district} - ${city}/${state}, CEP: ${cep}, nomeia e constitui o(a) outorgado(a) abaixo qualificado(a) em sua bastante procuradora.

      Outorgado(a): ${name2}, ${civilState2}, ${occupation2}, portador da carteira de identidade nº ${id2} expedida pelo(a) ${idIssuedBy2}, com escritório profissional á ${street2}, nº ${number2}, apto ${apt2}, ${district2} - ${city2}/${state2}.
    `;

  download('test.odt', text);
});

function download(filename, text) {
  // const text = generateText();
  let element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}