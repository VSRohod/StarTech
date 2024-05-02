function atualizarCarrinho(){
    let carrinhoHtml = document.querySelector("#carrinhoDados");
    let resultadoCarrinhoHtml = document.querySelector("#resultadoCarrinho");
    let indice = 0;
    carrinhoHtml.innerHTML = "";

    carrinho.forEach((produto) => {
        carrinhoHtml.innerHTML += `
        <div class="itemCarrinho">
            <div class="productInfoCarrinho">${produto.nome}</div>
            <div class="productValuesCarrinho">${produto.valor}</div>
            <button type="button" class="deleteBtn" onclick="deletarCarrinho(${indice})"> X </button> 
        </div>`;
        indice++
    });

    resultadoCarrinhoHtml.innerHTML = `<h5>O valor total é de : R$ ${valorTotal.toFixed(2)}</h5>`
    
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
                <button type="button" onclick="adicionarCarrinho(${element.codProduto})" class="btn btnAdd btn-primary">COMPRAR</button>
            </div>
        </div>`;
    })
}

function adicionarCarrinho(codProduto){
    let produtoAdicionado = catalogo[codProduto];
    
    carrinho.push(new ProdutosDoCarrinho(codProduto,produtoAdicionado.nome,produtoAdicionado.valor));
    valorTotal += produtoAdicionado.valor;

    atualizarCarrinho();
}

function deletarCarrinho(indiceNum){
    let valorDoItem = carrinho[indiceNum].valor;
    valorTotal -= valorDoItem;
    carrinho.splice(carrinho[indiceNum],1);

    atualizarCarrinho();
}