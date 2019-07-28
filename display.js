function display(mead){
				switch (mead){
					case "kamahi":
						document.getElementById('displayLeft').setAttribute('src',"images/labelsflowers/FlowersKamahi.png");
						document.getElementById('displayRight').setAttribute('src',"images/labelsflowers/elderflower.jpg");
						document.getElementById('displayHeader').innerText = "Kamahi Cottage Garden Herbs";
						document.getElementById('displaySub').innerText = "2001 Medium Metheglyn";
						document.getElementById('displayPara').innerText = "Kamahi honey mead has a touch of nuttiness and a lingering clean dryness that is reminiscent of some Amontillado Sherries. The elderflower gives a little refreshing herbal character without dominating. Kamahi is a small size flowering forest tree found through all New Zealand, including Stewart Island. All Haewai Honey Mead is fermented with 'wai ariki', natural spring water from Haewai Meadery, and bottled on site on Wellington's South Coast.";
						document.getElementById('displayLink').innerText = "This product and the honey used have both received a Bio-Gro IFOAM organic certification.";
						document.getElementById('displayLink').href = "pdf/kamahi.png";
						document.getElementById('displayDetail').innerText = "Price: $30/375 ml | 14% abv";
						break;
					case "pohutukawa":
						document.getElementById('displayLeft').setAttribute('src',"images/labelsflowers/FlowersPohutukawa.png");
						document.getElementById('displayRight').setAttribute('src',"images/labelsflowers/elderflower.jpg");
						document.getElementById('displayHeader').innerText = "Pohutukawa Cottage Garden Herbs";
						document.getElementById('displaySub').innerText = "2003, Sweet/Off-Dry Metheglyn";
						document.getElementById('displayPara').innerText = "Organically made from the honey of native pohutukawa flowers: has a smooth, full bodied, complex flavour. Aged with an infusion of elderflower and peppermint; an age-old recipe to benefit your health. Like all our products this mead is fermented with Haewai natural spring water, 'wai ariki' from the meadery spring, and pohutukawa honey; supplied by the Wellington Bee-Keepers Association. A truly Wellington product! Pohutukawa is a warmth-loving coastal tree. ";
						document.getElementById('displayLink').innerText = "";
						document.getElementById('displayLink').href = "";
						document.getElementById('displayDetail').innerText = "Price: $25/375 ml | 14% abv";
						break;
					case "tawari":
						document.getElementById('displayLeft').setAttribute('src',"images/labelsflowers/FlowersTawari.jpg");
						document.getElementById('displayRight').setAttribute('src',"images/labelsflowers/distribution tawari.png");
						document.getElementById('displayHeader').innerText = "Tawari Cottage Garden Herbs";
						document.getElementById('displaySub').innerText = "2001, Off-Dry Metheglyn";
						document.getElementById('displayPara').innerText = "This mead has a refreshing fruitiness deepened by the herbal infusion of elderflower and peppermint. Although in the off-dry range, there is a mild sweetness in the background. Tawari is a native flowering forest tree that, when in flower, has its own name 'Whakou' because the large very attractive waxy, white flowers which were traditionally prized by Maori and worn as adornments. Tawari once covered lowland and sub-alpine North Island areas from Ahipara to Kawhia and Hawkes' Bay. ";
						document.getElementById('displayLink').innerText = "This product and the honey used have both received a Bio-Gro IFOAM organic certification.";
						document.getElementById('displayLink').href = "pdf/tawari.png";
						document.getElementById('displayDetail').innerText = "Price: $30/375 ml | 14% abv";
						break;
					case "niue":
						document.getElementById('displayLeft').setAttribute('src',"images/labelsflowers/flowersniue.jpg");
						document.getElementById('displayRight').setAttribute('src',"images/labelsflowers/Label Honey.png");
						document.getElementById('displayHeader').innerText = "Niue Island Honey Mead";
						document.getElementById('displaySub').innerText = "2004, Sweet";
						document.getElementById('displayPara').innerText = "Made from Organically Certified honey harvested from tropical flowers whose perfume fills the air on Niue Island; a clean, floral flavour. This is a one-off mead as it was the only exported  harvest of a fledgling honey industry on Niue Island. Unfortunately Cyclone Heta destroyed the bee-keeping business at that time, just after this first honey harvest! We are very lucky to have this mead! Niue is a tropical island in the Pacific Ocean, located to the east of the Tonga Islands and 19 degrees south of the Equator; it is one of the largest coral islands in the world.";
						document.getElementById('displayLink').innerText = "The honey used in this product has received a Bio-Gro IFOAM organic certification.";
						document.getElementById('displayLink').href = "pdf/niue.png";
						document.getElementById('displayDetail').innerText = "Price: $30/375 ml | 14% abv";
						break;
					case "pohutukawaSparkling":
						document.getElementById('displayLeft').setAttribute('src',"images/labelsflowers/FlowersPohutukawa.png");
						document.getElementById('displayRight').setAttribute('src',"images/labelsflowers/Label Festive.png");
						document.getElementById('displayHeader').innerText = "Pohutukawa Festive Sparkling";
						document.getElementById('displaySub').innerText = "2000, Off-Dry";
						document.getElementById('displayPara').innerText = "Organically made from pohutukawa honey harvested in the Wellington Region; a truly Wellington product! Gently sparkling, full bodied, complex but clean flavour and a honey bouquet. The pohutukawa is sometimes called the NZ Christmas tree because of its summer-blooming crimson flowers. The honey from this tree is very quick to solidify once out of the hive; it is very light coloured and has a distinctive taste.";
						document.getElementById('displayLink').innerText = "";
						document.getElementById('displayLink').href = "";
						document.getElementById('displayDetail').innerText = "Price: $25/375 ml | 13% abv";
						break;
					case "comingSoon":
						window.location = "about.html?1#upcoming";
						break;
				}
				document.getElementById('displayOrderLink').innerText = "Order Now";
				window.scrollTo(0, 0);
			}