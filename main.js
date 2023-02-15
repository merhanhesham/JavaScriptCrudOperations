var productName = document.getElementById('pn');
var productPrice = document.getElementById('pp');
var productCategory = document.getElementById('pc');
var productDesc = document.getElementById('pd');


var allProducts = [];
if (localStorage.getItem('All Products') != null) {
    allProducts = JSON.parse(localStorage.getItem('All Products'));
    displayProducts();
}

var index;
function AddElements() {

    if (updateBtn != 'Update') {
        var product = {
            name: productName.value,
            price: productPrice.value,
            category: productCategory.value,
            desc: productDesc.value
        }
        allProducts.push(product);
        console.log(allProducts);
        clear();
        displayProducts();
        localStorage.setItem('All Products', JSON.stringify(allProducts));
    }
    else {

        allProducts[index].name = productName.value;
        allProducts[index].price = productPrice.value;
        allProducts[index].category = productCategory.value;
        allProducts[index].desc = productDesc.value;
        clear();
        displayProducts();
        updateBtn = 'ADD';

    }

}

function clear() {
    productName.value = '';
    productPrice.value = '';
    productCategory.value = '';
    productDesc.value = '';
}


function displayProducts() {
    var cartona = '';
    for (var i = 0; i < allProducts.length; i++) {
        cartona +=
            `<tr><td>${allProducts[i].name}</td>
        <td>${allProducts[i].price}</td>
        <td>${allProducts[i].category}</td>
        <td>${allProducts[i].desc}</td>
        <td><button class="btn-primary rounded" onclick="deleteElement(${i})">delete</button></td>
        <td><button class="btn-success rounded" onclick="updateElement(${i}); ">Update</button></td>
        </tr>`
    }
    document.getElementById('demo').innerHTML = cartona;
}
function deleteElement(x) {
    allProducts.splice(x, 1);
    displayProducts();
}

function updateElement(y) {
    index = y;
    productName.value = allProducts[y].name;
    productPrice.value = allProducts[y].price;
    productCategory.value = allProducts[y].category;
    productDesc.value = allProducts[y].desc;
    updateButton();

}
var updateBtn;
function updateButton() {
    updateBtn = document.getElementById('btnId').innerHTML = 'Update';
}

/*search();
function search() {
   
    for (var i = 0; i < allProducts.length; i++) {
        if (allProducts[i].name.toLowerCase().includes(term.toLowerCase())) {
            console.log('hello');
        }

    }
}*/

function search() {
    var term=document.getElementById('search').value;
    var cartona = '';
    for (var i = 0; i < allProducts.length; i++) {
        if(allProducts[i].name.toLowerCase().includes(term.toLowerCase())){
        cartona +=
            `<tr><td>${allProducts[i].name}</td>
        <td>${allProducts[i].price}</td>
        <td>${allProducts[i].category}</td>
        <td>${allProducts[i].desc}</td>
        <td><button class="btn-primary rounded" onclick="deleteElement(${i})">delete</button></td>
        <td><button class="btn-success rounded" onclick="updateElement(${i}); ">Update</button></td>
        </tr>`}
    }
    document.getElementById('demo').innerHTML = cartona;
}




