const tbody = document.querySelector("#tabelaKonfirmimeve tbody");
const konfirmime = JSON.parse(localStorage.getItem("konfirmime")) || [];

konfirmime.reverse().forEach(item => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${item.agjent}</td>
    <td>${item.cantë}</td>
    <td>${item.datetime}</td>
    <td>
      ${item.tds ? '✔️ TDS<br>' : ''}
      ${item.elektrolize ? '✔️ Elektrolizë<br>' : ''}
      ${item.kontrate ? '✔️ Kontratë<br>' : ''}
      ${item.numra ? '✔️ Numra<br>' : ''}
      ${item.mandat ? '✔️ Mandat<br>' : ''}
    </td>
  `;
  tbody.appendChild(row);
});
