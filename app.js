function newDay(day) {
  return `
  <div class="day">
  <h3>${day}/01</h3>
  <input type="checkbox" />
  <input type="checkbox" />
  <input type="checkbox" />
  <input type="checkbox" />
  <input type="checkbox" />
  <input type="checkbox" />
  </div>
  `
}

function habits() {
  return `
  <div class="habit" data-name="run">
            <img
              class="icon"
              src="https://cdn-icons-png.flaticon.com/512/4357/4357645.png"
              alt="icone de alguem correndo"
            />
          </div>
          <div class="habit" data-name="water">
            <img
              class="icon"
              src="https://cdn-icons-png.flaticon.com/512/2447/2447774.png"
              alt="icone water"
            />
          </div>
          <div class="habit" data-name="gym">
            <img
              class="icon"
              src="https://cdn-icons-png.flaticon.com/512/1845/1845861.png"
              alt="Icone of strong"
            />
          </div>
          <div class="habit" data-name="sleep">
            <img
              class="icon"
              src="https://cdn-icons-png.flaticon.com/512/3094/3094837.png"
              alt="icone of sleep time"
            />
          </div>
          <div class="habit" data-name="walk">
            <img
              class="icon"
              src="https://cdn-icons-png.flaticon.com/512/616/616554.png"
              alt="dog icon"
            />
          </div>
          <div class="habit" data-name="food">
            <img
              class="icon"
              src="https://cdn-icons-png.flaticon.com/512/2424/2424848.png"
              alt="dinner icon"
            />
          </div>
  `
}

document.querySelector('.habits').innerHTML = habits()

document.querySelector('#days').innerHTML =
  newDay(01) +
  newDay(02) +
  newDay(03) +
  newDay(04) +
  newDay(05) +
  newDay(06) +
  newDay(07) +
  newDay(08) +
  newDay(09) +
  newDay(10) +
  newDay(11) +
  newDay(12) +
  newDay(13) +
  newDay(14) +
  newDay(15) +
  newDay(16) +
  newDay(17) +
  newDay(18) +
  newDay(19) +
  newDay(20) +
  newDay(21) +
  newDay(22) +
  newDay(23) +
  newDay(24) +
  newDay(25) +
  newDay(26) +
  newDay(27) +
  newDay(28) +
  newDay(29) +
  newDay(30)

const form = document.querySelector('#habits')
const nlwSetup = new NLWSetup(form)

const data = {
  run: ['01-01', '01-02', '01-03']
}

nlwSetup.setData(data)
nlwSetup.load()
