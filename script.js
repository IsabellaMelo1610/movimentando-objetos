var x = 0
var y = 0
window.addEventListener("keydown", function(event){
    var tecla = event.keyCode

    if ( tecla == "39"){
        x = x + 5;
        document.getElementById
        ("objetoNaoIdentificado").style.left = x + "px";
    }
    if ( tecla == "37"){
        x = x - 5;
        document.getElementById
        ("objetoNaoIdentificado").style.left = x + "px";
    }
    if ( tecla == "38"){
        y = y - 5;
        document.getElementById
        ("objetoNaoIdentificado").style.top = y + "px";
    }
    if ( tecla == "40"){
        y = y + 5
        this.document.getElementById
        ("objetoNaoIdentificado").style.top = y + "px";
    }
})

(function(){
    //elemento canvas e contexto de renderização
    var cnv = document.querySelector("canvas");
    var ctx = cnv.getContext("2d");

    //tamanho dos blocos
    var tileSize = 35;

    //mapa do labirinto
    var maze = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1],
        [1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1],
        [1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1],
        [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1],
        [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
        [1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1],
        [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1],
        [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1],
        [1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1],
        [1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1],
        [1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1],
        [0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

    ];
      
    //atualização cíclica do programa
    function update(){}

    //renderização (desenha na tela)
    function render(){
        //procedimento que varre as linhas e colunas do labirinto
        for(var row in maze){
            for(var column in maze){
                //pega o elemento armazenado em uma determinada linha/coluna
                var tile = maze[row][column];
                //se for um tijolo...
                if (tile === 1){
                    //...especifica as dimensões e a posição...
                    var x = column*tileSize;
                    var y = row*tileSize;
                    //...e desenha na tela
                    ctx.fillRect(x,y,tileSize,tileSize);
                }
            }
        }
    }

    function loop(){
        update();
        render();
        requestAnimationFrame(loop,cnv);
    }
    requestAnimationFrame(loop,cnv);
}())
