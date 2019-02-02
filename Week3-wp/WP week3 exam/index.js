var data = {
	"products": [{
			"tit": "Samsung Galaxy J6 Smart Phone 64 GB, 4 GB RAM, Blue",
			"description": "Super AMOLED Display with 1480 x 720 (HD+) Resolution",
			"image": "1.jpeg",
			"quantity":"10"
		},
		{
			"tit": "Mi A2 4GB + 64GB | 6GB + 128GB",
			"description": "15.2cm (5.99) large display",
			"image": "2.jpeg",
			"quantity":"20"
		},
		{
			"tit": "Apple iphone 32GB",
			"description": "11.4 cm(4.7)display",
			"image": "3.jpeg",
			"quantity":"30"
		},
		{
			"tit": "red mi note 6 pro",
			"description": "15.9 cm (6.26 inch) FHD+ Display with Resolution ",
			"image": "4.jpeg",
			"quantity":"40"
		}
	]
}
var i = 0;
console.log(data);
productLoad(i);
document.getElementById('prev').disabled = true;

function disp(button) {
	if (button === 'next' && i <= data.products.length -2) {
		i++;
	}
	else {
		i--;
	}
	if (i === 0) {
		document.getElementById('prev').disabled = true;
		productLoad(i);
	}
	else if (i === data.products.length -1) {
		document.getElementById('next').disabled = true;
		productLoad(i);
	}
	else {
		document.getElementById('next').disabled = false;
		document.getElementById('prev').disabled = false;
		productLoad(i);
	}
}

function productLoad(index) {
	console.log(index);
	document.getElementById('loadImage').innerHTML = '<img style="height: 30em; width: 20em" src="'+data.products[index].image+'" alt="Image not found.">';
	document.getElementById('pDesc').innerHTML = data.products[index].description;
	document.getElementById('pTitle').innerHTML = data.products[index].tit;
	document.getElementById('pQuan').innerHTML = data.products[index].quantity;
}

function remove() {

}

function edIt() {
	document.getElementById("editForm").style.display='block';
}
function subForm() {
	document.getElementById("submit").disabled = true;
	alert('Editing submitted sucessfully.');
	// document.getElementById("editForm")style.display="none";
}
