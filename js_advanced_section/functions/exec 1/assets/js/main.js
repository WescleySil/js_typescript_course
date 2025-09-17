(function(){
    function criaCalculadora(){
        return {
            display: document.querySelector('.display'),

            inicia(){
                this.cliqueBototes();
                this.pressionaEnter();
            },

            pressionaEnter(){
                this.display.addEventListener('keyup', e => {
                    if(e.keyCode === 13){
                        this.realizaConta();
                    }
                });
            },


            cliqueBototes() {
              document.addEventListener('click', (e) => {
                const el = e.target;
                if(el.classList.contains('btn-num')){
                  this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.limpaDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.deleteUm();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
              });
            },

            btnParaDisplay(valor){
                this.display.value += valor;
            },

            realizaConta(){
                let conta = this.display.value;
                try{
                    conta = eval(conta);
                    if(!conta){
                        alert('Conta inválida');
                        return;
                    }
                    this.display.value = conta;
                } catch(e){
                    alert('Conta inválida');
                    return;
                }
            },

            limpaDisplay(){
                this.display.value = '';
            },

            deleteUm(){
                this.display.value = this.display.value.slice(0, -1);
            },
        }
    }
    
    const calculadora = criaCalculadora();
    calculadora.inicia();
})();