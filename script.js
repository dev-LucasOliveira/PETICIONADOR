const button = document.getElementById('button');
button.addEventListener("click", (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const nacionality = document.getElementById('nacionality').value;
  const civilState = document.getElementById('civilState').value;
  const occupation = document.getElementById('occupation').value;
  const id = document.getElementById('id').value;
  const idIssuedBy = document.getElementById('idIssuedBy').value;
  const cpf = document.getElementById('cpf').value;
  const cep = document.getElementById('cep').value;
  const adress = document.getElementById('adress').value;
  // const street = document.getElementById('street').value;
  // const number = document.getElementById('number').value;
  // const apt = document.getElementById('apt').value;
  const district = document.getElementById('district').value;
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonthNumber = date.getMonth() + 1;
  const currentDay = date.getDate();

  function numberToMonth(n) {
    if (n === 1) return 'Janeiro';
    if (n === 2) return 'Fevereiro';
    if (n === 3) return 'Março';
    if (n === 4) return 'Abril';
    if (n === 5) return 'Maio';
    if (n === 6) return 'Junho';
    if (n === 7) return 'Julho';
    if (n === 8) return 'Agosto';
    if (n === 9) return 'Setembro';
    if (n === 10) return 'Outubro';
    if (n === 11) return 'Novembro';
    if (n === 12) return 'Dezembro';
  }
  const currentMonth = numberToMonth(currentMonthNumber);

  const text = `
    <div style="text-align: justify; font-family: Arial, Helvetica, sans-serif; font-size: 12; line-height: 1.5">
      <div style="display: flex; justify-content: center"><b><p style="text-decoration: underline">PROCURAÇÃO</p></b></div>
      <br><br>
      <p><b>OUTORGANTE: ${name}</b>, ${nacionality}, ${civilState}, ${occupation}, portador da carteira de identidade nº ${id} expedida pelo(a) ${idIssuedBy}, portador(a) do CPF sob o nº ${cpf}, residente e domiciliado à ${adress}, ${district} - ${city}/${state}, CEP: ${cep}, nomeia e constitui a outorgada abaixo qualificada em sua bastante procuradora.</p>
      <br><br>
      <p><b>OUTORGADA: ELISA ACCIOLY GONÇALVES E VASCONCELLOS</b>, brasileira, casada, advogada, portadora da carteira de identidade nº 123.258, expedida pela OAB/RJ, com escritório profissional à Rua Real Grandeza, nº 139, sala 403, Botafogo, Rio de Janeiro/RJ, CEP: 22281-033.</p>
      <br><br>
      <p><b>PODERES E FINALIDADES:</b> Procuração ad judicia et extra e os mais especiais para representar o outorgante judicialmente, podendo, para tanto, propor e variar de ação, solicitar e receber certidões, confessar, transigir, desistir, renunciar a direito sobre o qual se funda a ação, concordar e discordar, conciliar em audiência, receber e dar quitação, assinar termos, receber e retirar alvarás e firmar compromissos, em qualquer instância ou Tribunal, podendo ainda, substabelecer com ou sem reserva de poderes e praticar todos os atos para bem fielmente desempenhar o presente, em todo e qualquer Estado da Federação.</p>
      <br><br>
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center">
        <p>Rio de Janeiro, ${currentDay} de ${currentMonth} de ${currentYear}.</p>
        <br><br>
        <p>_________________________________________________________________</p>
        <br>
        <p><b>${name}</b></p>
      </div>
    </div>
  `;

  download(text);
});

function download(text) {

  const options = {
    margin: 20,
    filename: "test.pdf",
    html2canvas: {scale: 2},
    jsPDF: {unit: "mm", format: "a4", orientation: "portrait"}
  }

  html2pdf().set(options).from(text).save();
}