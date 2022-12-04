const API_LINK = "https://api.adviceslip.com/advice";
const adviceNum = document.getElementById('adviceNum')
const adviceDisplay= document.getElementById('adviceDisplay')
const btn = document.getElementById('btn')


const fetchNewAdvice = async () => {
	const response = await  fetch(API_LINK);
	const advice = await response.json()
	return advice
}

const renderAdvice = (adviceObj) => {
	const {id, advice} = adviceObj;
	adviceNum.textContent = `ADVICE #${id}`;
	adviceDisplay.textContent = advice;
	
};


const newAdvice = async () => {
	const data = await fetchNewAdvice()
	const advice = data.slip;
	renderAdvice(advice)
	console.log(advice)
}

window.addEventListener('DOMContentLoaded', () => {
	btn.addEventListener('click', newAdvice)
	// renderAdvice
}) 