// DOM constants
const timezone = document.getElementById('timezone')
const time = document.getElementById('time')
const date = document.getElementById('date')

// Date - Time Functions
const getTimezone = () => dayjs.tz.guess().replace('/', ' / ').replace('_', ' ')
const getTime = () => dayjs().format('HH:mm:ss')
const getDate = () => dayjs().format('dddd, D MMM, YYYY')
const updateTimezone = () => timezone.innerText = getTimezone()
const updateTime = () => setInterval(() => time.innerText = getTime(), 1000)
const updateDate = () => setInterval(() => date.innerText = getDate(), 1000)

updateTimezone()
updateTime()
updateDate()