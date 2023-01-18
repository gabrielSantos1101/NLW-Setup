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

document.querySelector('#days').innerHTML =
  newDay(17) +
  newDay(18) +
  newDay(19) +
  newDay(20) +
  newDay(21) +
  newDay(22) +
  newDay(23)
