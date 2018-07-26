function Move() {
	a = document.getElementById('ball');
	b = Math.round(Math.random() * (window.innerHeight - 80));
	c = Math.round(Math.random() * (window.innerWidth - 80));
	i = Math.round(c / b) ;
	i1= 0;
	x = 0;

	setInterval(run,5)

	function run(){
		if (c < (window.innerWidth - 80)){
			if (b < (window.innerHeight - 80)){
				x++;
				i1 = i1 + i;
				a.style.top = x + 'px';
				a.style.left = i1 + 'px';
				if (i1 >= (window.innerWidth - 80)){
					c = i1;
				}
				if (x >= (window.innerHeight - 80)){
					b = x;
				}
			} else if (b >= (window.innerHeight -80)){
				x--;
				i1 = i1 + i;
				a.style.top = x + 'px';
				a.style.left = i1 + 'px';
				if (i1 >= (window.innerWidth - 80)){
					c = i1;
				}
				if (x <= 0){
					b = x;
				}
			}
		} else if (c >= (window.innerWidth - 80)){
			if (b < (window.innerHeight - 80)){
				x++;
				i1 = i1 - i;
				a.style.top = x + 'px';
				a.style.left = i1 + 'px';
				if (i1 <= 0){
					c = i1;
				}
				if (x >= (window.innerHeight - 80)){
					b = x;
				}
			}else if (b >= (window.innerHeight - 80)){
				x--;
				i1= i1 -i;
				a.style.top = x + 'px';
				a.style.left = i1 + 'px';
				if (i1 <= 0){
					c = i1;
				}
				if (x <= 0){
					b = x;
				}
			}
			
		}
	}
}