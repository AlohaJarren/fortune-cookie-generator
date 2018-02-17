console.log("gucci");

function generateFortuneCookie() {
	var fortunesList = [
	"Hooo brahh, gon get one hot spouse",
	"Life afta 2day gon be one breeze",
	"Sorry buggah, one stunnah finna crack you afta skool",
	"CHEEEHEEEE, manzz bouta get dem stecks $$$",
	"Eh, U Da Kine Ah?",
	"Learn Da Wae n U set por lyfe mayn",
	"Shibata gon giv u one dollah",
	"Gon die soon cuzz, might as well go Waianae",
	"Get dis portune and someone bouta give u sum false cracks",
	];

	var randomFortuneGenerator = fortunesList[Math.floor(Math.random() * fortunesList.length)];
	document.getElementById("text").textContent = randomFortuneGenerator;
	console.log(randomFortuneGenerator);

	var list = document.getElementById("listOfPrevFortunes");
	var help = document.createElement("div");
	help.innerHTML = randomFortuneGenerator;
	list.appendChild(help);
}