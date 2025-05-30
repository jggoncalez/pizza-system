let prodMenu = [];
let sales = [];
let dbChanges = null;

// Menu
function show(section) {
    document.getElementById('register').classList.add("hidden");
    document.getElementById('consult').classList.add("hidden");
    document.getElementById('edit').classList.add("hidden");
    document.getElementById('salePage').classList.add("hidden");
    document.getElementById('report').classList.add("hidden");
    
    document.getElementById(section).classList.remove("hidden");

}

// Register product
function registerPizza() {    
    let id = (prodMenu.length + 1)
    let product = (document.getElementById("prodName").value);
    let price = parseFloat(document.getElementById("price").value);
    let desc = (document.getElementById("description").value);
    if (product == "" || price == "" || desc == "" || price <=0) {
        document.getElementById("result").innerHTML = `Preencha todos os campos!`
    } else {
        prodMenu.push( { id, product, price, desc} );
        document.getElementById("result").innerHTML = `Produto ${product} foi cadastrado com sucesso!`
        console.log(prodMenu)
        updateList(prodMenu, "productdb")

        document.getElementById("prodName").value = "";
        document.getElementById("price").value = "";
        document.getElementById("description").value = "";
    }
}

// DB Update
function updateList(prodMenu) {
    const table = document.getElementById("productdb");
    if (!table) return;

    table.innerHTML = "";
    prodMenu.forEach(prod => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${prod.id}</td>
            <td>${prod.product}</td>
            <td>${prod.desc}</td>
            <td>${prod.price}</td>
        `;
        table.appendChild(row);
    });   
}

// Search
function search() {
    const search = (document.getElementById("searchBar").value).toLowerCase()
    const results = prodMenu.filter((prod) =>
        prod.product.toLowerCase().includes(search, "product-db")
    )
    updateList(results)
}

// Edit
function edit(){
    if (dbChanges) {
        const newProd = document.getElementById("new-name").value;
        const newDesc = document.getElementById("new-desc").value;
        const newPrice = parseFloat(document.getElementById("new-price").value);

        if (newProd && newDesc && !isNaN(newPrice)) {
            dbChanges.product = newProd;
            dbChanges.desc = newDesc;
            dbChanges.price = newPrice;

            updateList(prodMenu);
            alert("Produto editado com sucesso!");
            document.getElementById("changeDB").classList.add("hidden");
        } else {
            alert("All fields are required!")
        }
    }
}

function search2Edit(){
    const search = document.getElementById("searchEdit").value.toLowerCase();
    const results = prodMenu.filter((prod) =>
        prod.product.toLowerCase().includes(search));

    if (results.length > 0) {
        const prod = results[0];
        dbChanges = prod;
        document.getElementById("changeDB").classList.remove("hidden");
        document.getElementById("new-name").value = prod.product;
        document.getElementById("new-desc").value = prod.desc;
        document.getElementById("new-price").value = prod.price;
    } else {
        document.getElementById("changeDB").classList.add("hidden");
        dbChanges = null;
    }
}



// Order
function registerOrder() {
    const product = document.getElementById('order-product').value;
    const price = document.getElementById('order-price').value;
    const buyer = document.getElementById('order-buyer').value;

    if (product && price && buyer) {
        const orderList = document.getElementById('order-list');
        const item = document.createElement('li');
        item.textContent = `Título: ${product}, Price: R$${price}, Buyer: ${buyer}`;

        sales.push({ product, price, buyer });
        orderList.appendChild(item);

        document.getElementById('order-product').value = '';
        document.getElementById('order-price').value = '';
        document.getElementById('order-buyer').value = '';
    }
    else {
        alert('Error! All fields are required');
    }
}

// Sales Report

function createSalesReport(){
    
    const tableReport = document.getElementById('report-table');
    tableReport.innerHTML = ''

    if (sales.length === 0) {
        alert('No sales found!');
        return;
    }
    let totalSales = 0;
    sales.forEach((sale) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${sale.product}</td>
        <td>${parseFloat(sale.price).toFixed(2)}</td>
        <td>${sale.buyer}</td>
        `;
        tableReport.appendChild(row);
        totalSales += parseFloat(sale.price);
    });

    const totalSalesRow = document.createElement('tr');
    totalSalesRow.innerHTML = `
    <td><strong>Total</strong></td>
    <td><strong>R$${totalSales.toFixed(2)}</strong></td>
    <td></td>
    `;
    tableReport.appendChild(totalSalesRow);

    document.show('report');
}

// Log-Out
function logout() {
    window.location.href="index.html"
}

