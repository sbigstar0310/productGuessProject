let jsonData = JSON.parse(JSON.stringify(items));
var random_index = Math.floor( ( Math.random() * 10 + 1 ) );
//const random_index = 1;
//console.log(random_index);
var item_name = JSON.stringify(jsonData[random_index].name);
var item_price = JSON.stringify(jsonData[random_index].price);
var item_image = JSON.stringify(jsonData[random_index].image);

//console.log(item_name);
//console.log(item_price);
//console.log(item_image);

function gameStart() {
	var imgArea = document.getElementById("productImageArea");
	var nameArea = document.getElementById("productNameArea");
	imgArea.innerHTML = "";
	nameArea.innerHTML = "";

	var img = new Image();
	img.src = 'images/' + item_image.replace(/"/g, '');
	img.width  = "400";
	img.height = "400";
	imgArea.appendChild(img);

	nameArea.append(item_name);
}

function nextProblem() {
	document.getElementById("user-price-box").value = "";
	document.getElementById("real-price-box").value = "";
	document.getElementById("diff-price-box").value = "";

	random_index = Math.floor( ( Math.random() * 10 + 1 ) );
	item_name = JSON.stringify(jsonData[random_index].name);
	item_price = JSON.stringify(jsonData[random_index].price);
	item_image = JSON.stringify(jsonData[random_index].image);

	var imgArea = document.getElementById("productImageArea");
	var nameArea = document.getElementById("productNameArea");
	imgArea.innerHTML = "";
	nameArea.innerHTML = "";

	var img = new Image();
	img.src = 'images/' + item_image.replace(/"/g, '');
	img.width  = "400";
	img.height = "400";
	imgArea.appendChild(img);

	nameArea.append(item_name);
}

function show_result() {
	console.log("show_result function");
	var real_price = item_price.replace(/"/g, "") * 1;
	console.log("real_price: " + real_price + " type: " + typeof real_price);
	var user_price = parseInt(document.getElementById("user-price-box").value);
	console.log("user_price: " + user_price + " type: " + typeof user_price);
	document.getElementById("real-price-box").value = real_price;
	document.getElementById("diff-price-box").value = real_price - user_price;
}



