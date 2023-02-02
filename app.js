const form = document.querySelector('#habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

/* It make all habts out side the form */
document.querySelector('#outHabits').innerHTML = `
<div class="habit" data-name="run">
            <img
              class="icon"
              src="https://cdn-icons-png.flaticon.com/512/4357/4357645.png"
              alt="icone de alguem correndo" />
          </div>
          <div class="habit" data-name="water">
            <img
              class="icon"
              src="https://cdn-icons-png.flaticon.com/512/2447/2447774.png"
              alt="icone water" />
          </div>
          <div class="habit" data-name="gym">
            <img
              class="icon"
              src="https://cdn-icons-png.flaticon.com/512/1845/1845861.png"
              alt="Icone of strong" />
          </div>
          <div class="habit" data-name="sleep">
            <img
              class="icon"
              src="https://cdn-icons-png.flaticon.com/512/3094/3094837.png"
              alt="icone of sleep time" />
          </div>
          <div class="habit" data-name="walk">
            <img
              class="icon"
              src="https://cdn-icons-png.flaticon.com/512/644/644626.png"
              alt="studi icon" />
          </div>
          <div class="habit" data-name="food">
            <img
              class="icon"
              src="https://cdn-icons-png.flaticon.com/512/2424/2424848.png"
              alt="dinner icon" />
          </div>
`

// form.addEventListener('change', save)
button.addEventListener('click', add)
form.addEventListener('change', save)

/* This function add all days in form */
for (let index = '1'; index <= '30'; index++) {
  let numberFixed = index < 10 ? '0' + index : index;
  let month = new Date().getMonth
  nlwSetup.addDay(`${numberFixed}/${month}`)
}

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    // alert('Esté dia já existe')
    return
  }

  alert('Adicionado com sucesso')
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
nlwSetup.setData(data)
nlwSetup.load()
