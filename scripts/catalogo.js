var catalogo = [];
let codProduto = 0;

function adicionarCatalogo(nome,descricao,valor,imgSrc){
    catalogo.push(new Produtos(codProduto,nome,descricao,valor,imgSrc));
    codProduto += 1;
}

adicionarCatalogo("Placa de Vídeo","Uma placa de vídeo do modelo RTX2060",2559.80,"images/placaVideo.jpg");
adicionarCatalogo("Placa mãe","Uma placa mãe do modelo ASUS ROG",1998,"images/placaMae.jpg");
adicionarCatalogo("Memória Ram","Pentes de memória ram da corsair",680,"images/memoria.jpg");
adicionarCatalogo("Monitor","Monitor 27 polegadas",2800,"images/monitor.jpg");
adicionarCatalogo("Processador I7","Modelo 10700k",869.99,"images/processador.jpg");