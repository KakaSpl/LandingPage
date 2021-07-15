const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let email = document.getElementById('email').value;
  let data = {
    email,
  }
  let convertData = JSON.stringify(data);

  localStorage.setItem('lead', convertData)

  let content = document.getElementById('contact')

  let carregando = `<p style="font-size: 2rem;">Enviando...</p>`

  let pronto = `<p style="font-size: 2rem;">E-mail cadastrado com sucesso</p>`

  content.innerHTML = carregando


  setTimeout(() => {
    content.innerHTML = pronto
  }, 1000)

})