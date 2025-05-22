function Calculadora(){
        this.display = document.getElementById('display');

        this.cliqueButoes = () =>{
            document.addEventListener('click', event => {
                const el = event.target;
                if(el.id === 'btn-num') this.addNumDisplay(el);
                if(el.id === 'btn-clear') this.clear(el);
                if(el.id === 'btn-del') this.del(el);
                if(el.id === 'btn-eq') this.realizaConta(el);
            })
        };

        this.addNumDisplay = el => {
            this.display.value += el.innerText
            this.display.focus()
        };

        this.clear = function(){
             this.display.value = ''
            this.display.focus()
        };

        this.del = function(){
           this.display.value = this.display.value.slice(0, -1)
        };

    
            this.realizaConta = () => {
            try{
                let conta = eval(this.display.value);

                if(!conta){
                    alert('Conta Invalida')
                    return
                }
                this.display.value = String(conta)

            }catch(e){
                alert('Conta Invalida')
                return
            }
        };

        this.inicia = () =>{
            this.cliqueButoes()
            this.pressionarEnter()
        };

        this.pressionarEnter=function(){
            this.display.addEventListener('keyup', e =>{
                if(e.key === 'Enter'){
                    this.realizaConta()
                }
            })
        };
    
}

const calculadora = new Calculadora();
calculadora.inicia()