var orderOpen = false;
function orderToggle(){
	var order = document.getElementById('orderForm');
		if (orderOpen == false){
			var pos = 100;
			var id = setInterval(moveOut, 10);
			function moveOut() {
				if (pos == 35) {
					clearInterval(id);
				}
				else {
					pos-=5; 
					order.style.top = pos + '%';
				}
			}
			orderOpen = true;
		}
		else {
			var pos = 35;
			var id = setInterval(moveIn, 10);
			function moveIn() {
				if (pos == 100) {
					clearInterval(id);
				}
				else {
					pos+=5; 
					order.style.top = pos + '%';
				}
			}
			orderOpen = false;
		}
	}