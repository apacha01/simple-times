// DOM constants
const timezone = document.getElementById('timezone')
const time = document.getElementById('time')
const date = document.getElementById('date')
const tzsOptions = document.getElementById('timezones-datalist')
const btnApply = document.getElementById('apply-tz')
const tzsPath = './node_modules/timezones-list/src/timezones.json';

// Date - Time Functions
const getTimezone = () => currTz.replace('/', ' / ').replace('_', ' ')
const getTime = () => dayjs().tz(currTz).format('HH:mm:ss')
const getDate = () => dayjs().tz(currTz).format('dddd, D MMM, YYYY')
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

// Aux
let currTz = dayjs.tz.guess()

// Main
updateTimezone()
updateTime()
updateDate()

MicroModal.init('modal-1')

createTimezonesOptinos()

btnApply.addEventListener('click', () => {
	let t = document.getElementById('timezone-input').value
	t = t.replace(' / ', '/').replace(' ', '_')
	currTz = t
	updateTimezone()
	MicroModal.close('modal-1')
});