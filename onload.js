			var previousOrientation = window.orientation;
			var checkOrientation = function(){
				if(window.orientation !== previousOrientation){
					previousOrientation = window.orientation;
					location.reload();	
				}
			};

			window.addEventListener("resize", checkOrientation, false);
			window.addEventListener("orientationchange", checkOrientation, false);
			
			window.onload = function(){
			//check type of device; display navbar for either desktop or mobile
				if(document.documentElement.clientWidth > document.documentElement.clientHeight){
					var mobile = false;
					document.getElementById('content').setAttribute('style','width:77%;padding:56px 11.5%; box-shadow:0px 0px 20px 2px black;');
					var pList = document.getElementsByTagName("p");
					for (i = 0; i < pList.length; i++){
						pList[i].style.fontSize = "125%";
					}
					var pList = document.getElementsByTagName("h1");
					for (i = 0; i < pList.length; i++){
						pList[i].style.fontSize = "200%";
					}
					var pList = document.getElementsByTagName("h2");
					for (i = 0; i < pList.length; i++){
						pList[i].style.fontSize = "150%";
					}
					var textareaList = document.getElementsByTagName("textarea");
					for (i = 0; i < textareaList.length; i++){
						textareaList[i].style.fontSize = "115%";
					}
					var productDiv = document.querySelectorAll(".product");
					for (var i = 0; i < productDiv.length; i++) {
						productDiv[i].setAttribute('style','transition-duration:.5s;font-size:100%;');
					}
					var productDisplay = document.getElementById("productDisplay");
					if (productDisplay != null){productDisplay.style.fontSize = "100%";}
					var quanList = document.querySelectorAll(".meadQuan");
					for (var i = 0; i < quanList.length; i++) {
						quanList[i].style.fontSize = "115%";
					}
					var orderLinks = document.querySelectorAll(".orderLink");
					for (var i = 0; i < orderLinks.length; i++) {
						orderLinks[i].style.fontSize = "125%";
					}
					var orderLinks = document.querySelectorAll(".meadLabel");
					for (var i = 0; i < orderLinks.length; i++) {
						orderLinks[i].style.fontSize = "110%";
					}
					var homeHead = document.getElementById("homeHeader");
					if (homeHead != null){homeHead.style.fontSize = "350%";}
				}
				else {
					var mobile = true;
					var content = document.getElementById('content');
					content.setAttribute('style','width:94%; top:-10px; padding:210px 3% 0 3%;');
					var productDiv = document.querySelectorAll(".contact");
						for (var i = 0; i < productDiv.length; i++) {
							productDiv[i].setAttribute('style','width:70%; margin:2% 15%;');
						}
				}
				//desktop navbar
				if(mobile == false){
					//create container
					var bar = document.createElement('div');
					bar.id = 'navbarContainer';
					document.body.appendChild(bar);
					//create links
					var link1 = document.createElement('a');
					var link2 = document.createElement('a');
					var link3 = document.createElement('a');
					var link4 = document.createElement('a');
					link1.setAttribute('href', 'index.html?1');
					link2.setAttribute('href', 'products.html?1');
					link3.setAttribute('href', 'mead.html?1');
					link4.setAttribute('href', 'about.html?1');
					link1.id = 'link1';
					link2.id = 'link2';
					link3.id = 'link3';
					link4.id = 'link4';
					document.getElementById('navbarContainer').appendChild(link1);
					document.getElementById('navbarContainer').appendChild(link2);
					document.getElementById('navbarContainer').appendChild(link4);
					document.getElementById('navbarContainer').appendChild(link3);
					//add boxes to links
					var box1 = document.createElement('div');
					var box2 = document.createElement('div');
					var box3 = document.createElement('div');
					var box4 = document.createElement('div');
					box1.id = 'navBox1';
					box2.id = 'navBox2';
					box3.id = 'navBox3';
					box4.id = 'navBox4';
					box1.innerText = "Home/ Contact";
					box2.innerText = "Our Mead/Order";
					box3.innerText = "About Mead";
					box4.innerText = "About Haewai";
					document.getElementById('link1').appendChild(box1);
					document.getElementById('link2').appendChild(box2);
					document.getElementById('link3').appendChild(box3);
					document.getElementById('link4').appendChild(box4);
				}
				//mobile navbar
				else {
					var menuOpen = false;
					var mNav = document.createElement('div');
					mNav.id = "mNav";
					var mNavButton = document.createElement('div');
					mNavButton.id = "mNavButton";
					if (location.pathname.includes("index")||location.pathname=="/"){
						mNav.style.backgroundImage = "url('images/headerLogo.png')";
						document.getElementById('map').style.height = '800px';
					}
					else if (location.pathname.includes("products")){
						mNav.style.backgroundImage = "url('images/headerBottles.png')";
						var productDiv = document.querySelectorAll(".productsFloat");
						for (var i = 0; i < productDiv.length; i++) {
							productDiv[i].setAttribute('style','width:100%; margin-bottom:0;');
						}
						var productDiv = document.querySelectorAll(".product");
						for (var i = 0; i < productDiv.length; i++) {
							productDiv[i].setAttribute('style','margin:24px 1.5%;');
						}
						document.getElementById('displayLeft').setAttribute('style','width:48%;');
						document.getElementById('displayRight').setAttribute('style','width:48%;');
						document.getElementById('displayDivider').setAttribute('style', 'width:100%;float:left;');
						document.getElementById('order').setAttribute('style', 'width:90%;top:-245px;');
						document.getElementById('orderRight').setAttribute('style', 'width:90%;margin-right:5%;top:-245px');
						document.getElementById('toggle').setAttribute('style', 'bottom:245px;padding:64px 10%;font-size:600%;');
					}
					else if (location.pathname.includes("about")){
						mNav.style.backgroundImage = "url('images/headerUenuku.png')";
						var productDiv = document.querySelectorAll(".aboutImage");
						for (var i = 0; i < productDiv.length; i++) {
							productDiv[i].setAttribute('style','width:40%;');
						}
						
					}
					else if (location.pathname.includes("mead")){
						mNav.style.backgroundImage = "url('images/headerBee.png')";
						document.getElementById('meaderyImage').style.width = "40%";
					}
					else {
						mNav.style.backgroundImage = "url('images/headerLogo.png')";
					}
					mNav.style.backgroundSize = "100% 100%";
					var hr1 = document.createElement('hr');
					var hr2 = document.createElement('hr');
					var hr3 = document.createElement('hr');
					document.body.appendChild(mNav);
					document.getElementById('mNav').appendChild(mNavButton);
					document.getElementById('mNavButton').appendChild(hr1);
					document.getElementById('mNavButton').appendChild(hr2);
					document.getElementById('mNavButton').appendChild(hr3);
					mNavButton.onclick = function openMenu(){
						var menu = document.getElementById('menu');
						var mNav = document.getElementById('mNav');
						var mNavButton = document.getElementById('mNavButton');
						if (menuOpen == false){
							menu.style.zIndex = 0;
							var menupos = -60;
							var pos = 0;
							var id = setInterval(moveOut, 10);
							function moveOut() {
								if (pos == 60) {
									clearInterval(id);
								}
								else {
									menupos+=3;
									pos+=3; 
									menu.style.left = menupos + '%'; 
									mNav.style.left = pos + '%';
									mNavButton.style.left = pos + '%';
								}
							}
							menuOpen = true;
						}
						else {
							var pos = 60;
							menupos = 0;
							var id = setInterval(moveIn, 10);
							function moveIn() {
								if (pos == 0) {
									clearInterval(id);
									menu.style.zIndex = -3;
								}
								else {
									menupos-=3;
									pos-=3; 
									menu.style.left = menupos + '%'; 
									mNav.style.left = pos + '%';
									mNavButton.style.left = pos + '%';
								}
							}
							menuOpen = false;
						}
					}
				}
				//Age confirmation
				if (location.search == ""){
					//create main divs
					var main = document.createElement('div');
					var img = document.createElement('img');
					main.id = 'popUpBackground';
					img.id = 'popUp';
					img.src = 'images/popupgarden.png';
					var textbox = document.createElement('div');
					textbox.id = 'popUpText';
					//append main divs to body
					document.body.appendChild(main);
					document.body.appendChild(img);
					document.body.appendChild(textbox);
					//create textbox elements
					var head = document.createElement('p');
					head.innerText = 'Welcome to Haewai Meadery';
					head.id = 'popupHeader';
					head.className = 'popup';
					var text = document.createElement('p');
					text.innerText = 'Are you over 18?';
					text.className = 'popup';
					var buttonYes = document.createElement('button');
					buttonYes.innerText = 'Yes';
					buttonYes.className = 'popUpButton';
					buttonYes.onclick = function confirm(){
						var main = document.getElementById('popUpBackground');
						var box = document.getElementById('popUp');
						box.parentNode.removeChild(box);
						main.parentNode.removeChild(main);
						textbox.parentNode.removeChild(textbox);
					}
					var buttonNo = document.createElement('button');
					buttonNo.innerText = 'Return';
					buttonNo.className = 'popUpButton';
					buttonNo.onclick = function back()
						{window.history.back();}
					//append elements to textbox
					document.getElementById('popUpText').appendChild(head);
					document.getElementById('popUpText').appendChild(text);
					document.getElementById('popUpText').appendChild(buttonYes);
					document.getElementById('popUpText').appendChild(buttonNo);
					//change popup according to device
					if (mobile == false)
						{img.setAttribute('style', 'width:50%;left:25%;');
						textbox.setAttribute('style', 'width:46%;left:25%;');}
					else
						{img.setAttribute('style', 'width:95%;left:2.5%;')
						textbox.setAttribute('style', 'width:91%;left:2.5%;font-size:200%;')}
				}
				
				var cover = document.getElementById('cover');
				cover.parentNode.removeChild(cover);
			}