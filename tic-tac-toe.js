const tic_tac_toe = {
    board: ["","","","","","","","",""],
    simbols: ["X","O"],
    sequenciasParaGanhar: [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ],

    jogador: 0,
    container_element: null,
    gameover: false,

    init: function(container){
        this.container_element = container;   
    },
    
    draw: function(){
        let content = "";  
        for(i in this.board){
            content+= "<div onclick = tic_tac_toe.jogada("+i+")>"+this.board[i]+"</div>";
            //content+= "<div onclick = tic_tac_toe.jogada("+i+")>"+i+"</div>";
        }    
        this.container_element.innerHTML = content;
    },

    jogada: function(position){
        if(this.gameover){
            return false;
        }
        if(this.board[position]==""){
            this.board[position] = this.simbols[this.jogador];
            this.draw();
            this.verificarFim(this.simbols[this.jogador]);
            this.trocarJogador();
        }
    },

    trocarJogador: function(){
        if(this.jogador==1){
            this.jogador = 0;
        }else{
            this.jogador = 1;
        }
    },

    verificarFim: function(simbolo){
        for(i in this.sequenciasParaGanhar){
            if(this.board[this.sequenciasParaGanhar[i][0]]==simbolo 
                && this.board[this.sequenciasParaGanhar[i][1]]==simbolo
                && this.board[this.sequenciasParaGanhar[i][2]]==simbolo){
                    this.gameover = true;
                    return i;
            }
        }

        return -1;
    }

    
};

