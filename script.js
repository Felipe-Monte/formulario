const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault()

  alert('Formulário enviado ✅')
  location.reload()
})