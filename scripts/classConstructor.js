class Produtos {
    constructor(codProduto,nome,descricao,valor,imgSrc){
        this.codProduto = codProduto;
        this.nome = nome;
        this.descricao = descricao;
        this.valor = valor;
        this.imgSrc = imgSrc;
    }
}

class ProdutosDoCarrinho {
    constructor(codProduto,nome,valor){
        this.codProduto = codProduto;
        this.nome = nome;
        this.valor = valor;
        this.item = 0;
    }
}

