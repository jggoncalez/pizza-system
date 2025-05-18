let prodMenu = [];

// Menu
function show(section) {
    document.getElementById('register').classList.add("hidden");
    document.getElementById('consult').classList.add("hidden");
    // document.getElementById('change').classList.add("hidden");
    // document.getElementById('selldb').classList.add("hidden");
    
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
    prodMenu.forEach(product => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.product}</td>
            <td>${product.desc}</td>
            <td>${product.price}</td>
        `;
        table.appendChild(row);
    });   
}

// Log-Out
function logout() {
    window.location.href="index.html"
}

