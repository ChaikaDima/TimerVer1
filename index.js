const input = document.querySelector('input')
const btn = document.querySelector('.btn')
const minutes = document.querySelector('.clock_minutes')
const seconds = document.querySelector('.clock_seconds')
const breaker = document.querySelector('.dotter')
const audio = document.querySelector('.audio')

const updateTimer = (event) => {
  event.preventDefault()

  if (!input.value) {
    return
  }

  let totalTimer = input.value

  let minutesUpdate = totalTimer - 1
  let secondsUpdate = 60
  if (minutesUpdate < 10) {
    minutesUpdate = '0' + minutesUpdate
  }

  const interval = setInterval(() => {
    breaker.classList.add('hidden')
    if (minutesUpdate === '00' && secondsUpdate === '01') {
      clearInterval(interval)
      seconds.innerHTML = '00'
      minutes.innerHTML = '00'
      breaker.classList.remove('hidden')

      document.body.style.opacity = ''
      audio.play()

      return
    }

    secondsUpdate -= 1

    if (secondsUpdate < 10) {
      secondsUpdate = '0' + secondsUpdate
    }
    if (secondsUpdate === '00') {
      secondsUpdate = 60
      minutesUpdate -= 1
    }

    if (minutesUpdate < 10 && typeof minutesUpdate !== 'string') {
      minutesUpdate = '0' + minutesUpdate
    }

    seconds.innerHTML = secondsUpdate
    minutes.innerHTML = minutesUpdate
  }, 1000)
}

btn.addEventListener('click', updateTimer)
