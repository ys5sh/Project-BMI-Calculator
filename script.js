const forms = document.querySelectorAll('form')
forms.forEach(form => {
  form.addEventListener('submit', function (e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    if (isNaN(height) || height <= 0) {
      result.innerHTML = 'Please Enter Valid Height'
    } else if (isNaN(weight) || weight <= 0) {
      result.innerHTML = 'Please Enter Valid Weight'
    } else {
      const bmi = (weight / ((height * height) / 10000)).toFixed(2)
      result.innerHTML = `<span>${bmi}</span>`
    }
  })
})