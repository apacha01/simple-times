// DOM constants
const timezone = document.getElementById('timezone')
const time = document.getElementById('time')
const date = document.getElementById('date')
const tzsOptions = document.getElementById('timezones-datalist')
const tzsPath = './node_modules/timezones-list/src/timezones.json';

// Date - Time Functions
const getTimezone = () => dayjs.tz.guess().replace('/', ' / ').replace('_', ' ')
const getTime = () => dayjs().format('HH:mm:ss')
const getDate = () => dayjs().format('dddd, D MMM, YYYY')
const updateTimezone = () => timezone.innerText = getTimezone()
const updateTime = () => setInterval(() => time.innerText = getTime(), 1000)
const updateDate = () => setInterval(() => date.innerText = getDate(), 1000)
const createTimezonesOptinos = () => {
	fetch(tzsPath)
	.then(res => res.json())
	.then(tzs => {
		tzs.forEach(tz => {
			let opt = document.createElement('option')
			opt.value = tz.tzCode.replace('/', ' / ').replace('_', ' ')
			tzsOptions.appendChild(opt)
		})
	})
}

updateTimezone()
updateTime()
updateDate()

MicroModal.init('modal-1')

createTimezonesOptinos()