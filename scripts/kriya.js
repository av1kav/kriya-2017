var modal = document.getElementById('quick-access');
		
var blurcontainer = document.getElementById('blurcontainer');
		
var quickaccessbutton = document.getElementById('quick-access-button');
		
	

var hamburger = document.getElementById('dropdown-btn');
		
var expandDiv = document.getElementById('dropdown');
		
var open = 0;
	

var heading = document.getElementsByClassName('menuHeading');
		
var item = document.getElementsByClassName('subMenuItem');
		
var i;
	
	
		
hamburger.onclick = function(){

	if(open == 1){
				
		expandDiv.className = 'dropdown-hide';
				
		open = 0;
			
	}
			
	else{
				
		expandDiv.className = 'dropdown-show';
				
		open = 1;
			
	}
		
}
	
		

quickaccessbutton.onclick = function(){
			
			
	if(modal.className == "hide-modal"){
	
		//console.log("was hide-modal.");
							
		blurcontainer.className = "blur-container";
						
		modal.className = "show-modal";

		expandDiv.className = 'dropdown-hide';
			
		open = 0;
			
				
	}
			
	else{
				
		//console.log("was show-modal");
							
		blurcontainer.className = "no-blur-container";
						
		modal.className = "hide-modal";
			
	}
		
}


blurcontainer.onclick = function(){

			
	
		if(event.target==blurcontainer){
			modal.className = "hide-modal";
								
			blurcontainer.className = "no-blur-container";
						
			expandDiv.className = 'dropdown-hide';
				
			open = 0;
		}
		else{			
			//console.log("else");
		}

					
}

window.onclick = function(){
	if(event.target == hamburger || event.target.className=='icon-menu' || event.target == quickaccessbutton || event.target.className == 'icon-plus' || blurcontainer.className == "blur-container" || event.target.className == 'show-modal'){
		//console.log("window.onclick");
	}
	else{
		expandDiv.className = 'dropdown-hide';
			
		open = 0;

	}
}
	
			
		

heading[0].onclick = function(){
			
	this.classList.toggle("active");
			
	item[0].classList.toggle("show");
		
}
		
		

heading[1].onclick = function(){
			
		this.classList.toggle("active");
			
		item[1].classList.toggle("show");
		
}
		
	

heading[2].onclick = function(){
			
	this.classList.toggle("active");
			
	item[2].classList.toggle("show");
		
}