window.onload = function() {
	initColorPicker();
};
//changing the color and font in paragraph 1
function turnOn() {
	var myCol = document.getElementById("P1");
	myCol.style.color = "red";
	myCol.style.fontFamily = "sans-serif";
}

//finding and replace in  paragraph 2
function findReplace()  {
	var str = document.getElementById("P2").innerHTML;
	var res = str.replace("porchetta", "Veg");
	document.getElementById("P2").innerHTML = res;

//this is a really bad search & highlight word..not stable...need to spend some time with this
}
function hilight() {

	var s = document.querySelector('input[type="search"]'),
		p = document.querySelector('p'),
		find = function() {
			var words = p.innerText.split(' ');
			for(var i = 0; i < words.length; i++) {
				if(words[i].toLowerCase() == s.value.toLowerCase()) {
					words[i] = '<span class="highlight">' + words[i] + "</span>";
					p.innerHTML = words.join(' ');
				}
				else {

				}
			}
		}
	s.addEventListener('keydown', find, false);
	s.addEventListener('keyup', find, false);

}

var list = document.getElementById("P3"),
	button = document.getElementById("shuffle");
function shuffle(items)
{
	var cached = items.slice(0), temp, i = cached.length, rand;
	while(--i)
	{
		rand = Math.floor(i * Math.random());
		temp = cached[rand];
		cached[rand] = cached[i];
		cached[i] = temp;
	}
	return cached;
}
function shuffleNodes()
{
	var nodes = list.children, i = 0;
	nodes = Array.prototype.slice.call(nodes);
	nodes = shuffle(nodes);
	while(i < nodes.length)
	{
		list.appendChild(nodes[i]);
		++i;
	}
}
button.onclick = shuffleNodes;