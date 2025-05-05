document.getElementById('confirmationForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const data = {
      cantë: document.getElementById('numriCantës').value,
      tds: this.tds.checked,
      elektrolize: this.elektrolize.checked,
      kontrate: this.kontrate.checked,
      numra: this.numra.checked,
      mandat: this.mandat.checked,
      agjent: localStorage.getItem('emriAgjentit') || 'Agjent i panjohur',
      datetime: new Date().toLocaleString()
    };
  
    let konfirmime = JSON.parse(localStorage.getItem('konfirmime')) || [];
    konfirmime.push(data);
    localStorage.setItem('konfirmime', JSON.stringify(konfirmime));
  
    alert("Konfirmimi u ruajt me sukses!");
    this.reset();
  });
  