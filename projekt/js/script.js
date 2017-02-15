	function docLoaded(fn){
		if(document.readyState !=='loading'){
			fn();
		}else{
				document.addEventListener('DOMConetentLoaded', fn);
		}
	}

	function menu(fname, price,lactose,gluten,img_link,img_name){
		this.food_name=fname;
		this.price=price;
		this.lactose=lactose;
		this.gluten=gluten;
		this.img_link=img_link;
		this.img_name=img_name;
		this.Oarr=[this.food_name, this.price, this.lactose, this.gluten, this.img_link,this.img_name];
		this.order=function(){
			return this.Oarr;
		};
	}

	/*Function that displays the food*/
	function disp_food(parent_id){
		 for(var i=0;i<food.length;i++){

			/*Cells in table*/
			 var th = document.createElement("TH");
			 th.setAttribute("id","myTH"+i);
			 th.setAttribute("class","cells");
			 document.getElementById(parent_id).appendChild(th);
			 /*Makes the last cell have the same distance from the right wall as the first one have from the left*/
			 if(i==(food.length-1)){
				 document.getElementById("myTH"+i).style.paddingRight="100px";
			 }

			/*img heading*/
			var pic_heading = document.createElement("H4");
			var txt = document.createTextNode(food[i].food_name);
			pic_heading.appendChild(txt);
			document.getElementById("myTH"+i).appendChild(pic_heading);

			/*image*/
			var img = document.createElement("img");
			img.setAttribute("src",food[i].img_link);
			img.setAttribute("class","images");
			img.style.height = '200px';
			img.style.width = '200px';
			img.style.border = "white Ridge";
			img.style.borderRadius="10px";
			document.getElementById("myTH"+i).appendChild(img);
			food_info("myTH"+i,i);
			plus_minus_clicker("myTH"+i,i);
		 }
	}
	/*method that shows info about the food*/
	function food_info(parent_id,food_element){
			/*ul with info about the food*/
			var Ulist = document.createElement("UL");
			Ulist.setAttribute("id","myUL"+food_element);
			document.getElementById(parent_id).appendChild(Ulist);

				var list = document.createElement("LI");
				var price_text = document.createTextNode("Pris: "+food[food_element].price);
				list.appendChild(price_text);
				document.getElementById("myUL"+food_element).appendChild(list);


			 	if(food[food_element].lactose){
					var E_lactose =  document.createTextNode("Innehåller laktos");
					var list = document.createElement("LI");
					list.appendChild(E_lactose);
					document.getElementById("myUL"+food_element).appendChild(list);
				}

				if(food[food_element].gluten){
					var E_gluten =  document.createTextNode("Innehåller gluten");
					var list = document.createElement("LI");
					list.appendChild(E_gluten);
					document.getElementById("myUL"+food_element).appendChild(list);
				}
	}
	/*method that shows info about drinks*/
	function disp_drinks(parent_id){
	}
  /*method that creates minus/txtbox/plus element*/
	function plus_minus_clicker(parent_id,food_element){
		/*Area of intrest*/
		var Button_area = document.createElement("DIV");
		Button_area.setAttribute("id","B_area");

		/*minus button*/
		var minus_button = document.createElement("BUTTON");
		minus_button.setAttribute("id","M_button");
		minus_button.onclick = function(){
		return Mclick(food[food_element].food_name);
		}
		var minus_sign = document.createElement("IMG");
		minus_sign.setAttribute("src","http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/firey-orange-jelly-icons-alphanumeric/070308-firey-orange-jelly-icon-alphanumeric-minus-sign-simple.png")
		minus_sign.setAttribute("height", "12");
		minus_sign.setAttribute("width", "20");
		minus_button.appendChild(minus_sign);
		Button_area.appendChild(minus_button);

		/*txt field*/
		var txt_field = document.createElement("INPUT");
		txt_field.setAttribute("type","number");
		txt_field.setAttribute("value","0");
		txt_field.setAttribute("min","0");
		txt_field.setAttribute("max","99");
		txt_field.setAttribute("id",food[food_element].food_name);
		txt_field.size = "10";
		Button_area.appendChild(txt_field);
		txt_field.style.textAlign="center";

		/*plus button*/
		var plus_button = document.createElement("BUTTON");
		plus_button.setAttribute("id","P_button");
		plus_button.onclick = function(){
			return Pclick(food[food_element].food_name);
		}
		var plus_sign = document.createElement("IMG");
		plus_sign.setAttribute("src","http://www.clker.com/cliparts/2/f/6/1/11949856271997454136tasto_2_architetto_franc_01.svg.med.png")
		plus_sign.setAttribute("height", "12");
		plus_sign.setAttribute("width", "20");
		plus_button.appendChild(plus_sign);
		Button_area.appendChild(plus_button);

		document.getElementById(parent_id).appendChild(Button_area);
	}
  /*method that handles plus button click */
	function Pclick(txtbox_id){
		document.getElementById(txtbox_id).value++;
	}
	/*method that handles minus button click */
	function Mclick(txtbox_id){
		if(document.getElementById(txtbox_id).value>0){
		document.getElementById(txtbox_id).value--;
		}
	}
	/*method that collects info from txtbox */
	function clickertxt_info(txtbox_id){
	return document.getElementById(txtbox_id).value;
	}
/*method that handles "send info" button click */
	function sendinfo_press(){
		if(document.getElementById("tableNO").value==""){
		warningMsg();
		}
		else{
			var food_order=[];
			for(var i=0;i<food.length;i++){
				if(clickertxt_info(food[i].food_name)!=0){
				food_order[i]=food[i].food_name+", Antal: "+clickertxt_info(food[i].food_name)+"||";
				}
			}
			return console.log(food_order);
		}
	}
	/*method that creates warning msg*/
	function warningMsg(){
		document.getElementById("warningsign").style.visibility = "visible";
		setTimeout(function(){
		document.getElementById("warningsign").style.visibility = "hidden";
		}, 5000);
	}


	function displayExtra_Alternative(parent_id) {
 		for(var i=0;i<sauce.length;i++){
 			/*Celler i tabellen*/
 			 var th = document.createElement("TH")
 			 th.setAttribute("id","mySauce"+i);
			 th.setAttribute("class","cells");
 			 document.getElementById(parent_id).appendChild(th);

 			/*bild rubrik*/
 			var pic_heading = document.createElement("H4");
 			var txt = document.createTextNode(sauce[i].sauce_name);
 			pic_heading.appendChild(txt);
 			document.getElementById("mySauce"+i).appendChild(pic_heading);

 			/*Bilderna i tabellen*/
 			var img = document.createElement("img");
 			img.setAttribute("src",sauce[i].img_link);
 			img.style.height = '100px';
 			img.style.width = '100px';
 			img.style.border = "white Ridge";
 			img.style.borderRadius="10px";
 			document.getElementById("mySauce"+i).appendChild(img);

			/*necessary space*/
				var h = document.createElement("P");
				var t = document.createTextNode("                ");
				h.appendChild(t);
				document.getElementById("mySauce"+i).appendChild(h);

			/*Beställning av mat*/
 		 	var checkb_txt = document.createTextNode("Order");
 			var check_box = document.createElement("INPUT");
 			check_box.setAttribute("type", "checkbox");
 			check_box.setAttribute("id", "checkB"+i);
 			document.getElementById("mySauce"+i).appendChild(checkb_txt);
 			document.getElementById("mySauce"+i).appendChild(check_box);

 		}
  }
