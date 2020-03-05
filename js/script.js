var totalNode = document.getElementById('total').firstChild;
var inc = document.getElementById('inc');
var dec = document.getElementById('dec');

window.onload = function(){
	if (localStorage.getItem('total')!== null){
		totalNode.data = localStorage.getItem('total');
	}
	mutationObserver.observe(totalNode, options);
	console.log('Текущее значение: '+ totalNode.data)

}


inc.onclick = function(){
	totalNode.data++;
	var result = totalNode.data;
	localStorage.setItem('total', result)
}
dec.onclick = function(){
	if (totalNode.data >= 1) {
		totalNode.data--;
		var result = totalNode.data;
		localStorage.setItem('total', result)
	}
}

	var mutationObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
        var newValue = mutation.target.nodeValue;
        var oldValue = mutation.oldValue;
   	if  (newValue > oldValue) {
   		console.log('Количество увеличилось, текущее значение: ' + newValue);
   	}else if  (newValue < oldValue) {
   		console.log('Количество уменьшилось, текущее значение: ' + newValue)
   	}
    
         });
 });

var options = {
    characterData: true,
	childList: false,
	characterDataOldValue: true	
}	

