function criaCalculadora(){
    return {
        display: document.getElementById('display'),

        clearDisplay(){
            this.display.value = ''
            this.display.focus()
        },

        inicia(){
            this.cliqueBotoes()
            this.pressionaEnter()
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e =>{
                if(e.key === "Enter"){
                    this.realizaConta()
                }
            });
        },

        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if(!conta){
                    alert('Conta inválida')
                    return
                }
            
                this.display.value = String(conta)
            }catch(e){
                alert('Conta Inválida!')
                return
            }
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1)
        },

        cliqueBotoes(){
            //this -> calculadora
            document.addEventListener('click',function(e){
                const el = e.target;
                //el.classList.contains('btn-num)
                if(el.id === 'btn-num'){//Aqui é pra pegar oo ID
                    this.btnParaDisplay(el.innerText)
                }

                 if(el.id === 'btn-clear'){
                this.clearDisplay()
                }

                if(el.id === 'btn-del'){
                    this.apagaUm()
                }

                if(el.id === 'btn-eq'){
                    this.realizaConta()
                }

            }.bind(this));//Aponta pro this da calculadora pois sem isso
            //o this aponta pro documento

           
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        }
        
    };
}

const calculadora = criaCalculadora();
calculadora.inicia()












