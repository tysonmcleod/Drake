var socket = io();
	function docLoaded(fn){
		if(document.readyState !=='loading'){
			fn();
		}else{
				document.addEventListener('DOMConetentLoaded', fn);
		}
	}
var iindex=0;
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
			/*image*/
				img("myTH"+i,i,"food","7.5em","food");
			/*lactose and gluten checkboxes*/
				lactoseNgluten("myTH"+i,i);
		 }
	}
	/*Cells in table*/
	function cells(parent_id,index,my_id){
		var th = document.createElement("TH");
		th.setAttribute("id",my_id);
		th.setAttribute("class","cells");
		document.getElementById(parent_id).appendChild(th);

	}
	function img(parent_id,index,item,img_size,type){
		var img = document.createElement("img");

		if(item==="food"){
		img.setAttribute("src",food[index].img_link);
		img.setAttribute("name","food[]");
		}
		else if(item==="sauce"){
			img.setAttribute("src",sauce[index].img_link);
		}else if(item==="drinks"){
			img.setAttribute("src",drinks[index].img_link);
		}

		img.style.height = img_size;
		img.style.width = "7.76em";
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
				orderNav_bar(sauce[index].sauce_name,index,"sauce");
		}	else if(type=="drinks"){
				orderNav_bar(drinks[index].drink_name,index,"drinks");
		}
			else if(type=="food"){
				food_check(parent_id,index);
				document.getElementById('lactose'+index).checked=false;
				document.getElementById('gluten'+index).checked=false;
				iindex++;
			}
		}
	}
	function food_check(parent_id,index){
		if(document.getElementById('gluten'+index).checked===true &&
						 document.getElementById('lactose'+index).checked===true){
			 return orderNav_bar(food[index].food_name+"(Gluten-och laktosfri)",index,"food");
		 }
		else if(document.getElementById('lactose'+index).checked===true){
			return orderNav_bar(food[index].food_name+"(Laktosfri)",index,"food");
		}
		else if(document.getElementById('gluten'+index).checked===true){
			return orderNav_bar(food[index].food_name+"(Glutenfri)",index,"food");
		}
		else{
		return orderNav_bar(food[index].food_name,index,"food");
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

	/*method display lactose n gluten checkboxes*/
	function lactoseNgluten(parent_id,index) {
		var div = document.createElement("DIV");
		div.setAttribute("id","LnGDiv"+index);
		var hej=document.createElement("br")
		var lactose = document.createElement("lactose");
		var checkb_txt1 = document.createTextNode("Laktosfri;");
		var check_box1 = document.createElement("INPUT");
		check_box1.setAttribute("type", "checkbox");
		check_box1.setAttribute("id", "lactose"+index);
		check_box1.style.height = "2em";
		check_box1.style.width = "2em";
		var gluten = document.createElement("gluten");
		var checkb_txt2 = document.createTextNode("Glutenfri;");
		var check_box2 = document.createElement("INPUT");
		check_box2.setAttribute("type", "checkbox");
		check_box2.setAttribute("id", "gluten"+index);
		check_box2.style.height = "2em";
		check_box2.style.width = "2em";
		div.appendChild(checkb_txt1);
		div.appendChild(check_box1);
		div.appendChild(hej);
		div.appendChild(checkb_txt2);
		div.appendChild(check_box2);
		document.getElementById(parent_id).appendChild(div);
	}
	/*method that creates warning msg*/
	function disp_warningMsg(){
			if(!!document.getElementById("warn")){}//true if element with id "warn" already exists
			else{
				if(document.getElementById("tableNO").value==""){
					warn_help("OBS: Ange bordsnummer","red");
				}
				else if(document.getElementById("tableNO").value<1 || document.getElementById("tableNO").value>15){
					warn_help("OBS: Ange bordsnummer mellan 1-15","red");
				}
				else{
					warn_help("OBS: Välj matträtt","red");
				}
			}
	}
  /*Helps disp_warningmsg with the warnings*/
	function warn_help(warn_msg,color){
		var warn = document.createElement("H3");
		warn.setAttribute("style","color:"+color);
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
				 document.getElementById("mySauce"+i).style.paddingRight="30px";
			 }
 			/*pictures */
			img("mySauce"+i,i,"sauce","7em","sauce");
		}
  }
    /*method that displays drinks*/
	function displayDrinks(parent_id) {
 		for(var i=0;i<drinks.length;i++){
 			/*Cells in table*/
			cells(parent_id,i,"myDrinks"+i);
			 /*Makes the last cell have the same distance from the right wall as the first one have from the left*/
			 if(i==(drinks.length-1)){
				 document.getElementById("myDrinks"+i).style.paddingRight="30px";
			 }
 			/*pictures */
			img("myDrinks"+i,i,"drinks","7em","drinks");
		}
  }
	/*notifies the user that the order has been sent*/
	function sent_order(){
		if(!!document.getElementById("warn")){}//true if element with id "warn" already exists
		else{
			 warn_help("Beställning mottagen","green");
		}
	}


	/*adds the order info to the order div in the navbar*/
	function orderNav_bar(order,index,type){
			if(type==="food"){
				var L_order=document.createElement("LI");
				L_order.ondblclick=function(){
					return del_Element(this.id);
			}
			L_order.setAttribute("id",type+iindex);
			var textnode=document.createElement("P");
			textnode.setAttribute("id","txtN"+iindex);
			var order_txt=document.createTextNode(order);
			textnode.appendChild(order_txt);
			L_order.appendChild(textnode);
			document.getElementById('order_list').appendChild(L_order);
			var ol_list= document.getElementById('order_list');
		}
		else{
			var L_order=document.createElement("LI");
			L_order.ondblclick=function(){
				return del_Element(this.id);
			}
			L_order.setAttribute("id",type+index);
			var textnode=document.createElement("P");
			textnode.setAttribute("id","txtN"+index);
			var order_txt=document.createTextNode(order);
			textnode.appendChild(order_txt);
			L_order.appendChild(textnode);
			document.getElementById('order_list').appendChild(L_order);
			var ol_list= document.getElementById('order_list');

		}
	}
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

/*method that handles the drink order*/
function drink_or(){
	var drinks_order="";
	var list = document.getElementById("order_list");
	var list_items = list.getElementsByTagName("li");
 	for(var i=0;i<list_items.length;i++){
		 if(list_items[i].textContent!="" && list_items[i].id.substring(0, 6)==="drinks"){
			 drinks_order=drinks_order+list_items[i].textContent+", ";
		 }
	 }
 		if(drinks_order!=""){
 			return drinks_order+" | ";
 		}
		else{
			return "";
		}
}
/*method that handles the food order*/
function food_or(){
	var food_order="";
	var sauce_order="";
	 var list = document.getElementById("order_list");
	 var list_items = list.getElementsByTagName("li");
	for(var i=0;i<list_items.length;i++){
		if(list_items[i].textContent!="" && (list_items[i].id.substring(0,4))==="food"){
			food_order=food_order+list_items[i].textContent+", ";
		}
		else if(list_items[i].id.substring(0,5)==="sauce"){
			sauce_order=sauce_order+list_items[i].textContent+", ";
		}
	}
	if(list_items.length!==0){
		if(food_order!=""&&sauce_order!=""){
			return food_order+" | "+sauce_order+" | ";
		}
		else if(food_order!==""){
			return food_order+" | ";
		}

		else if(food_order==""){
			return"";
		}
	}
	else{
		return "";
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
	document.getElementById("txtBox").value="";
	document.getElementById("tableNO").value="";
}

/* creates a new ul*/
function ul(){
	var ul = document.createElement("UL");
	ul.setAttribute("id","order_list");
	document.getElementById('order_listDiv').appendChild(ul);
}
var testindex=1000;

/*method that handles "send info" button click */
	function sendinfo_press(){
		if(document.getElementById("tableNO").value==""|| document.getElementById("tableNO").value<1||
			 document.getElementById("tableNO").value>15|| food_or()==""){
				 disp_warningMsg();
		}

			else{
				console.log(food_or()+drink_or()+txtbox_info()+table_NO()+"||");
				var infoToKitchen = food_or()+txtbox_info()+table_NO()+"||";
				socket.emit('order', {orderId: "#"+testindex, orderItems:infoToKitchen});
				refresh()
				del_Element("order_list");//deletes the orders in the sidebar
				ul()                      //Creates a new empty ul
				sent_order();             //notifies the user that the order has been sent
				testindex++;
			}
		}
