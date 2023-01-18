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
  <div class="habit">
            <img
              class="icon"
              src="https://cdn-icons-png.flaticon.com/512/4357/4357645.png"
              alt="icone de alguem correndo"
            />
          </div>
          <div class="habit">
            <img
              class="icon"
              src="https://cdn-icons-png.flaticon.com/512/2447/2447774.png"
              alt="icone water"
            />
          </div>
          <div class="habit">
            <img
              class="icon"
              src="https://cdn-icons-png.flaticon.com/512/1845/1845861.png"
              alt="Icone of strong"
            />
          </div>
          <div class="habit">
            <img
              class="icon"
              src="https://cdn-icons-png.flaticon.com/512/3094/3094837.png"
              alt="icone of sleep time"
            />
          </div>
          <div class="habit">
            <img
              class="icon"
              src="https://cdn-icons-png.flaticon.com/512/616/616554.png"
              alt="dog icon"
            />
          </div>
          <div class="habit">
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
  newDay(17) +
  newDay(18) +
  newDay(19) +
  newDay(20) +
  newDay(21) +
  newDay(22) +
  newDay(23) +
  newDay(23) +
  newDay(23) +
  newDay(23) +
  newDay(23) +
  newDay(23) +
  newDay(23) +
  newDay(23) +
  newDay(23) +
  newDay(23)
