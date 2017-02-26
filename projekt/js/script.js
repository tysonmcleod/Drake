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
			 /* only within the its acutal section which does not matter */
				 document.getElementById("myTH"+i).style.paddingRight="3em";
			 }
			/*img heading*/
				img_heading("myTH"+i,i,"food");
			/*image*/
				img("myTH"+i,i,"food","3em","food");
			/*food info*/
				//food_info("myTH"+i,i,"food");
			/*plus&minus clicker*/
				//plus_minus_clicker("myTH"+i,i);
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
			else if(item==="sauce"){
			var txt = document.createTextNode(sauce[index].sauce_name);
			}
			// else if(item==="drink"){
			// var txt = document.createTextNode(drink[index].drink_name);
			// }
			pic_heading.appendChild(txt);
			document.getElementById(parent_id).appendChild(pic_heading);

	}
	function img(parent_id,index,item,img_size,type){
		var img = document.createElement("img");

		if(item==="food"){
		img.setAttribute("src",food[index].img_link);
		}
		else if(item==="sauce"){
			img.setAttribute("src",sauce[index].img_link);
		}
		img.setAttribute("class","images");
		img.style.height = img_size;
		img.style.width = img_size;
		img.style.border = "white Ridge";
		img.style.borderRadius="1em";
		document.getElementById(parent_id).appendChild(img);

		img.onmouseover = function(){
			img.style.opacity = "0.5";
		}
		img.onmouseout = function(){
			img.style.opacity = "1";
			document.getElementById(parent_id).style.backgroundImage = "none"
		}
		img.onclick=function(){
			if(type=="sauce"){
				orderNav_bar(sauce[index].sauce_name,index,"sauce")
		}
			else if(type=="food"){
				orderNav_bar(food[index].food_name,index,"food");
			}
		}
	}
	function checkboX(parent_id,index){
		var checkb_txt = document.createTextNode("Välj;");
		var check_box = document.createElement("INPUT");
		check_box.setAttribute("type", "checkbox");
		check_box.setAttribute("id", "checkB"+index);
		check_box.onclick=function(){
		if(document.getElementById("checkB"+index).checked){
			orderNav_bar(sauce[index].sauce_name,index,"sauce");
		}
		else{
			del_Element("sauce"+index);

		}
		};
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
			else{
				var E_lactose =  document.createTextNode("Laktosfri");
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
			else{
				var E_gluten =  document.createTextNode("Glutenfri");
				var list = document.createElement("LI");
				list.appendChild(E_gluten);
				document.getElementById("myUL"+food_element).appendChild(list);

			}
	}
	/*method that shows info about drinks, remains to be implemented*/
	function disp_drinks(parent_id){
		// for(var i=0;i<food.length;i++){
		//  /*Cells in table*/
		// 	 cells(parent_id,i,"myTH"+i);
		// 	/*Makes the last cell have the same distance from the right wall as the first one have from the left*/
		// 	if(i==(food.length-1)){
		// 		document.getElementById("myTH"+i).style.paddingRight="100px";
		// 	}
		//  /*img heading*/
		// 	 img_heading("myTH"+i,i,"food");
		//  /*image*/
		// 	 img("myTH"+i,i,"food","200px");
		//  /*food info*/
		// 	 food_info("myTH"+i,i,"food");
		//  /*plus&minus clicker*/
		// 	 plus_minus_clicker("myTH"+i,i);
		// }

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
		if(!!document.getElementById('food'+food_element)&&
				 document.getElementById(food[food_element].food_name).value==1){
					del_Element('food'+food_element);
					Mclick(food[food_element].food_name);
		}
		else if(document.getElementById(food[food_element].food_name).value>1){
			Mclick(food[food_element].food_name);
			del_Element("txtN"+food_element);
			var a=parseInt(document.getElementById(food[food_element].food_name).value);
			console.log(a);
			var txt=document.createElement("P");
			txt.setAttribute("id","txtN"+food_element)
			var order_txt=document.createTextNode(food[food_element].food_name+", "+a+"st");
			txt.appendChild(order_txt);
			document.getElementById('food'+food_element).appendChild(txt);

		}

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
			if(!!document.getElementById('food'+food_element)){
				del_Element("txtN"+food_element);
				var a=parseInt(document.getElementById(food[food_element].food_name).value)+1;
				var txt=document.createElement("P");
				txt.setAttribute("id","txtN"+food_element)
				var order_txt=document.createTextNode(food[food_element].food_name+", "+a+"st");
				txt.appendChild(order_txt);
				document.getElementById('food'+food_element).appendChild(txt);
			}
			else{
				orderNav_bar(food[food_element].food_name+", 1st",food_element,"food");
			}
			Pclick(food[food_element].food_name);
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
					warn_help("OBS: Ange bordsnummer","color:red");
				}
				else if(document.getElementById("tableNO").value<1 || document.getElementById("tableNO").value>15){
					warn_help("OBS: Ange bordsnummer mellan 1-15","color:red");
				}
				else{
					warn_help("OBS: Välj matträtt","color:red");
				}
			}
	}
  /*Helps disp_warningmsg with the warnings*/
	function warn_help(warn_msg,color){
		var warn = document.createElement("H5");
		warn.setAttribute("style",color);
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
			img("mySauce"+i,i,"sauce","3em","sauce");

			/*necessary space under the img*/
				var h = document.createElement("P");
				var t = document.createTextNode("                ");
				h.appendChild(t);
				document.getElementById("mySauce"+i).appendChild(h);

			/*ordering of food*/
			//checkboX("mySauce"+i,i);
		}
  }
	function sent_order(){
		if(!!document.getElementById("warn")){}//true if element with id "warn" already exists
		else{
			 warn_help("Beställning mottagen","color:green");
		}
	}


	/*adds the order info to the order div in the navbar*/
	function orderNav_bar(order,index,type){
		var L_order=document.createElement("LI");
		L_order.setAttribute("id",type+index);
		var textnode=document.createElement("P");
		textnode.setAttribute("id","txtN"+index);
		var order_txt=document.createTextNode(order);
		textnode.appendChild(order_txt);
		L_order.appendChild(textnode);
		document.getElementById('order_list').appendChild(L_order);
		var ol_list= document.getElementById('order_list');
		//ul_list("list_test"+index,ol_list,index);
		//del_button(parent_id)
		L_order.ondblclick=function(){
			if(type=="sauce"){
				del_Element("sauce"+index);
			}
			else if(type=="food"){
				del_Element("food"+index);
			}
}
	}
	function ul_list(parent_id,list,index){
		var Button_area = document.createElement("DIV");
		Button_area.setAttribute("id","rediNdel_area");
		document.getElementById(parent_id).appendChild(Button_area);
		//del_button(parent_id,index);
	}
	/* //Creats a delete button(not needed atm)
 function del_button(parent_id,index){
  var del_button = document.createElement("BUTTON");
  del_button.setAttribute("id","redi_button");
  del_button.setAttribute("width", "20");
  del_button.onclick = function(){
 	 document.getElementById("checkB"+index).checked=false;
 	 del_Element(parent_id)
 }
 var del_sign = document.createTextNode("Ta bort");
 del_button.appendChild(del_sign);
 document.getElementById(parent_id).appendChild(del_button);
 }
 */


		/*delete element*/
 function del_Element(parent_id){
  var test=document.getElementById(parent_id);
 		test.parentNode.removeChild(test);
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
	return " BordsNo: "+document.getElementById("tableNO").value;
}
	/* "refresh" the page*/
function refresh(){
	for(var i=0;i<food.length;i++){
		document.getElementById(food[i].food_name).value="";
	}
	for(var i=0;i<sauce.length;i++){
		document.getElementById("checkB"+i).checked=false;
				}
	document.getElementById("txtBox").value="";
	document.getElementById("tableNO").value="";
}
function ul(){
	var ul = document.createElement("UL");
	ul.setAttribute("id","order_list");
	document.getElementById('order_listDiv').appendChild(ul);
}

/*method that handles "send info" button click */
	function sendinfo_press(){
		if(document.getElementById("tableNO").value==""|| document.getElementById("tableNO").value<1||
			 document.getElementById("tableNO").value>15|| food_or()==""){
				 disp_warningMsg();
		}
		else{
				if(sauce_or()!==""){
					console.log(food_or()+sauce_or()+txtbox_info()+table_NO()+"||");
					refresh()
					del_Element("order_list");
					ul()
					sent_order();
				}
			else{
				console.log(food_or()+txtbox_info()+table_NO()+"||");
				refresh()
				del_Element("order_list");
				ul()
				sent_order();
			}
		}
	}
