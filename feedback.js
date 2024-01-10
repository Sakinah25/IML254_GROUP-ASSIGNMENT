const scriptURL = 'https://script.google.com/macros/s/AKfycby_CmPBi75xVRdL7xZ5SofLBjE8Z3I8C3sDLfJSMByaII9dnpE1WQZMXJaKjKSU3NZ7/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})