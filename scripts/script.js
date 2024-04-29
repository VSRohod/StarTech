// var all
var carrinho = [];
var valorTotal = 0;

// functions

function atualizarCarrinho(){
    let carrinhoHtml = document.querySelector("#carrinhoDados");
    carrinhoHtml.innerHTML = "";

    carrinho.forEach((nomeProduto) => {
        carrinhoHtml.innerHTML += `<div class="itemCarrinho">${nomeProduto}</div>`;
    });

}

function carregarCatalogo(){
    let produtosHtml = document.querySelector("#produtos");
    catalogo.forEach((element) => {
        produtosHtml.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${element.imgSrc}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.nome}</h5>
                <p class="card-text">${element.descricao}</p>
                <p class="productValue">${element.valor}</p>
                <button type="button" codigoProduto="${element.codProduto}" class="btn btnAdd btn-primary">COMPRAR</button>
            </div>
        </div>`;
    })
}

function adicionarCarrinho(codProduto){
    alert(codProduto)
    atualizarCarrinho();
}

// executar functions
carregarCatalogo()

// codes
// selectors
let btnAdd = document.querySelectorAll(".btnAdd");

// events
let contador = 0
btnAdd.forEach((btn) => {
    btn.setAttribute("onclick", `adicionarCarrinho(${contador})`);
    contador++
})


