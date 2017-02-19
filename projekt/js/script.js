	function docLoaded(fn){
		if(document.readyState !=='loading'){
			fn();
		}else{
				document.addEventListener('DOMConetentLoaded', fn);
		}
	}

	/*Function that displays the food*/
	function disp_food(parent_id){
		 for(var i=0;i<food.length;i++){
			/*Cells in table*/
				cells(parent_id,i,"myTH"+i);
			 /*Makes the last cell have the same distance from the right wall as the first one have from the left*/
			 if(i==(food.length-1)){
				 document.getElementById("myTH"+i).style.paddingRight="100px";
			 }
			/*img heading*/
				img_heading("myTH"+i,i,"food");
			/*image*/
				img("myTH"+i,i,"food","200px");
			/*food info*/
				food_info("myTH"+i,i,"food");
			/*plus&minus clicker*/
				plus_minus_clicker("myTH"+i,i);
		 }
	}
	/*Cells in table*/
	function cells(parent_id,index,my_id){
		var th = document.createElement("TH");
		th.setAttribute("id",my_id);
		th.setAttribute("class","cells");
		document.getElementById(parent_id).appendChild(th);
	}
	/*img heading*/
	function img_heading(parent_id,index,item){
			var pic_heading = document.createElement("H4");
			if(item==="food"){
			var txt = document.createTextNode(food[index].food_name);
			}
			else if(item==="drinks"){
			var txt = document.createTextNode(drinks[index].drink_name);
			}
			else if(item==="sauce"){
			var txt = document.createTextNode(sauce[index].sauce_name);
			}
			pic_heading.appendChild(txt);
			document.getElementById(parent_id).appendChild(pic_heading);

	}
	function img(parent_id,index,item,img_size){
		var img = document.createElement("img");

		if(item==="food"){
		img.setAttribute("src",food[index].img_link);
		}
		else if(item==="drinks"){
			img.setAttribute("src",drinks[index].img_link);
		}
		else if(item==="sauce"){
			img.setAttribute("src",sauce[index].img_link);
		}
		img.setAttribute("class","images");
		img.style.height = img_size;
		img.style.width = img_size;
		img.style.border = "white Ridge";
		img.style.borderRadius="10px";
		document.getElementById(parent_id).appendChild(img);
	}
	function checkboX(parent_id,index){
		var checkb_txt = document.createTextNode("Välj;");
		var check_box = document.createElement("INPUT");
		check_box.setAttribute("type", "checkbox");
		check_box.setAttribute("id", "checkB"+index);
		document.getElementById(parent_id).appendChild(checkb_txt);
		document.getElementById(parent_id).appendChild(check_box);
	}

	/*method that shows info about the food*/
	function food_info(parent_id,food_element,item){
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
	/*method that shows info about drinks, remains to be implemented*/
	function disp_drink(parent_id){
		 for(var i=0;i<drinks.length;i++){
			/*Cells in table*/
				cells(parent_id,i,"myDrink"+i);
			 /*Makes the last cell have the same distance from the right wall as the first one have from the left*/
			 if(i==(drinks.length-1)){
				 document.getElementById("myDrink"+i).style.paddingRight="100px";
			 }
			/*img heading*/
				img_heading("myDrink"+i,i,"drinks");
			/*image*/
				img("myDrink"+i,i,"drinks","200px");
			/*plus&minus clicker*/
				plus_minus_clicker_drink("myDrink"+i,i);
			}
	}

  /*method that creates minus/txtbox/plus element*/
	function plus_minus_clicker(parent_id,food_element){
		/*Area of intrest*/
		var Button_area = document.createElement("DIV");
		Button_area.setAttribute("id","B_area");
		document.getElementById(parent_id).appendChild(Button_area);
		minus_button(parent_id,food_element)
		MP_txtField(parent_id,food_element)
		plus_button(parent_id,food_element)
	}
			/*minus button*/
	function minus_button(parent_id,food_element){
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
		document.getElementById(parent_id).appendChild(minus_button);
	}
	/*txt field*/
	function MP_txtField(parent_id,food_element){
		var txt_field = document.createElement("INPUT");
		txt_field.setAttribute("type","number");
		txt_field.setAttribute("value","0");
		txt_field.setAttribute("min","0");
		txt_field.setAttribute("max","99");
		txt_field.setAttribute("id",food[food_element].food_name);
		txt_field.size = "10";
		document.getElementById(parent_id).appendChild(txt_field);
		txt_field.style.textAlign="center";
	}
	/*plus button*/
	function plus_button(parent_id,food_element){
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
		document.getElementById(parent_id).appendChild(plus_button);
	}

  /*method that handles plus button click */
	function Pclick(txtbox_id){
		if(document.getElementById(txtbox_id).value<0){
			document.getElementById(txtbox_id).value=0;
		}
		else if(document.getElementById(txtbox_id).value<99){
			document.getElementById(txtbox_id).value++;
		}
}
	/*method that handles minus button click */
	function Mclick(txtbox_id){
		if(document.getElementById(txtbox_id).value>99){
			document.getElementById(txtbox_id).value=99;
		}
		else	if(document.getElementById(txtbox_id).value>0){
		document.getElementById(txtbox_id).value--;
		}
	}
	/*method that collects info from txtbox */
	function clickertxt_info(txtbox_id){
	return document.getElementById(txtbox_id).value;
	}

	/*method that creates warning msg*/
	function disp_warningMsg(){
			if(!!document.getElementById("warn")){}//true if element with id "warn" already exists
			else{
				if(document.getElementById("tableNO").value==""){
					warn_help("OBS: Ange bordsnummer");
				}
				else if(document.getElementById("tableNO").value<1 || document.getElementById("tableNO").value>15){
					warn_help("OBS: Ange bordsnummer mellan 1-15");
				}
				else{
					warn_help("OBS: Välj matträtt");
				}
			}
	}
  /*Helps disp_warningmsg with the warnings*/
	function warn_help(warn_msg){
		var warn = document.createElement("H5");
		warn.setAttribute("style","color:red");
		warn.setAttribute("id","warn");
		var msg = document.createTextNode(warn_msg);
		warn.appendChild(msg);
		document.getElementById("warningsign").appendChild(warn);
		setTimeout(function(){
			warn.parentNode.removeChild(warn);
		}, 2000);
	}

  /*method that displays sauces*/
	function displayExtra_Alternative(parent_id) {
 		for(var i=0;i<sauce.length;i++){
 			/*Cells in table*/
			cells(parent_id,i,"mySauce"+i);
			 /*Makes the last cell have the same distance from the right wall as the first one have from the left*/
			 if(i==(sauce.length-1)){
				 document.getElementById("mySauce"+i).style.paddingRight="100px";
			 }
 			/*pic heading*/
			img_heading("mySauce"+i,i,"sauce");

 			/*pictures */
			img("mySauce"+i,i,"sauce","100px");

			/*necessary space under the img*/
				var h = document.createElement("P");
				var t = document.createTextNode("                ");
				h.appendChild(t);
				document.getElementById("mySauce"+i).appendChild(h);

			/*ordering of food*/
			checkboX("mySauce"+i,i);
 		}
  }


/*method that handles the sauce order*/
function sauce_or(){
	var sauce_order="";
	for(var i=0;i<sauce.length;i++){
		if(document.getElementById("checkB"+i).checked){
			sauce_order=sauce_order+sauce[i].sauce_name+", ";
		}
	}
		if(sauce_order.length!==0){
			return " Extra sås: "+sauce_order+"| ";
		}
		else{
			return"";
		}
}

/*method that handles the food order*/
function food_or(){
	var food_order="";
	for(var i=0;i<food.length;i++){
		if(clickertxt_info(food[i].food_name)!=0 && clickertxt_info(food[i].food_name)!=""){
			food_order=food_order+food[i].food_name+":"+clickertxt_info(food[i].food_name)+"st, ";
		}
	}
	if(food_order.length!==0){
		return food_order+" | ";
	}
	else{
		return"";
	}
}

/*method that .. drink order */

function drink_or(){
	var drink_order="";
	for(var i=0;i<drinks.length;i++){
		if(clickertxt_info_2(drinks[i].drink_name)!=0 && clickertxt_info_2(drinks[i].drink_name)!=""){
			drink_order=drink_order+drinks[i].drink_name+":"+clickertxt_info_2(drinks[i].drink_name)+"st, ";
		}
	}
	if(drink_order.length!==0){
		return drink_order+" | ";
	}
	else{
		return"";
	}
}


/*method that handles the extra info box*/
function txtbox_info(){
	if(!(document.getElementById("txtBox").value==="")){
		return " Extra info: "+document.getElementById("txtBox").value+" | ";
	}
	else{
		return "";
	}
}

function table_NO(){
	return " Bordsnummer: "+document.getElementById("tableNO").value;
}
	/* "refresh" the page*/
function refresh(){
	for(var i=0;i<food.length;i++){
		document.getElementById(food[i].food_name).value="";
	}
	for(var i=0;i<drinks.length;i++){
		document.getElementById(drinks[i].drink_name).value="";
	}
	for(var i=0;i<sauce.length;i++){
		document.getElementById("checkB"+i).checked=false;
				}
	document.getElementById("txtBox").value="";
	document.getElementById("tableNO").value="";
}

/*method that handles "send info" button click */
	function sendinfo_press(){
		if(document.getElementById("tableNO").value==""|| document.getElementById("tableNO").value<1||
			 document.getElementById("tableNO").value>15|| food_or()==""){
				 disp_warningMsg();
		}
		else{
				if(sauce_or()!==""){
					console.log(food_or()+sauce_or()+drink_or()+txtbox_info()+table_NO()+"||");
					refresh()
				}
			else{
				console.log(food_or()+txtbox_info()+drink_or()+table_NO()+"||");
				refresh()
			}
		}
	}


/*method that creates minus/txtbox/plus element*/
	function plus_minus_clicker_drink(parent_id,drink_element){
		/*Area of intrest*/
		var second_Button_area = document.createElement("DIV");
		second_Button_area.setAttribute("id","B_area");
		document.getElementById(parent_id).appendChild(second_Button_area);
		second_minus_button(parent_id,drink_element)
		second_MP_txtField(parent_id,drink_element)
		second_plus_button(parent_id,drink_element)
	}


			/*minus button*/
	function second_minus_button(parent_id,drink_element){
		var second_minus_button = document.createElement("BUTTON");
		second_minus_button.setAttribute("id","SM_button");
		second_minus_button.onclick = function(){
		return Mclick2(drinks[drink_element].drink_name);
		}
		var minus_sign = document.createElement("IMG");
		minus_sign.setAttribute("src","http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/firey-orange-jelly-icons-alphanumeric/070308-firey-orange-jelly-icon-alphanumeric-minus-sign-simple.png")
		minus_sign.setAttribute("height", "12");
		minus_sign.setAttribute("width", "20");
		second_minus_button.appendChild(minus_sign);
		document.getElementById(parent_id).appendChild(second_minus_button);
	}
	/*txt field*/
	function second_MP_txtField(parent_id,drink_element){
		var second_txt_field = document.createElement("INPUT");
		second_txt_field.setAttribute("type","number");
		second_txt_field.setAttribute("value","0");
		second_txt_field.setAttribute("min","0");
		second_txt_field.setAttribute("max","99");
		second_txt_field.setAttribute("id",drinks[drink_element].drink_name);
		second_txt_field.size = "10";
		document.getElementById(parent_id).appendChild(second_txt_field);
		second_txt_field.style.textAlign="center";
	}
	/*plus button*/
	function second_plus_button(parent_id,drink_element){
		var second_plus_button = document.createElement("BUTTON");
		second_plus_button.setAttribute("id","P_button");
		second_plus_button.onclick = function(){
			return Pclick2(drinks[drink_element].drink_name);
		}
		var plus_sign = document.createElement("IMG");
		plus_sign.setAttribute("src","http://www.clker.com/cliparts/2/f/6/1/11949856271997454136tasto_2_architetto_franc_01.svg.med.png")
		plus_sign.setAttribute("height", "12");
		plus_sign.setAttribute("width", "20");
		second_plus_button.appendChild(plus_sign);
		document.getElementById(parent_id).appendChild(second_plus_button);
	}


	  /*method that handles plus button click */
	function Pclick2(txtbox_id_2){
		if(document.getElementById(txtbox_id_2).value<0){
			document.getElementById(txtbox_id_2).value=0;
		}
		else if(document.getElementById(txtbox_id_2).value<99){
			document.getElementById(txtbox_id_2).value++;
		}
}
	/*method that handles minus button click */
	function Mclick2(txtbox_id_2){
		if(document.getElementById(txtbox_id_2).value>99){
			document.getElementById(txtbox_id_2).value=99;
		}
		else	if(document.getElementById(txtbox_id_2).value>0){
		document.getElementById(txtbox_id_2).value--;
		}
	}
	/*method that collects info from txtbox */
	function clickertxt_info_2(txtbox_id_2){
	return document.getElementById(txtbox_id_2).value;
	}




