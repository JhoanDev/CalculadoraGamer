var vetornum = []
var res = document.getElementById('res')
var passnumbers = ''
var posnumbers = ''
var resultado = ''
var qnt = 0
var op = []
var opi = 0
var c = 0

function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

function reset() {
    vetornum = []
    res.innerHTML = 0
    resultado = ''
    qnt = 0
    op = []
    passnumbers = ''
    posnumbers = ''
    opi = 0 
    c = 0
}

function number(x) {
    let n = x
    if (vetornum.length == 0 && typeof(n) == 'string') {
        window.alert('[ERRO] Não pode utilizar operadores no primeiro digito, resetando...')
        reset()
    }
    else{
        if (vetornum.length < 12) {
            if ((typeof(n) == 'string') && (typeof(vetornum[(vetornum.length - 1)]) == 'string')) {
                window.alert('[ERRO] Não coloque duas operações/strings juntas!')
            }
            else{        
                if (typeof(n) == 'string' && n != '.') {
                c++
                }
                if (c<2) {
                    vetornum.push(n)
                    res.innerHTML = vetornum.join('')
                }
                else{
                    result()
                }  
            }
        }
        else{
            window.alert('[ERRO] Número maximo de digitos atingido')
        }
    }
    
}
function negativo() {
    if (typeof(vetornum[(vetornum.length - 1)]) == 'string') {
        window.alert('[ERRO] O ultimo digito não é um número')
    }
    else{
        for (let i = (vetornum.length-1); i >= 0; i--) {
            if (((typeof(vetornum[i])) != 'number') && ((vetornum[i]) != '.')) {
                vetornum[i+1] = -vetornum[i+1]
                res.innerHTML = vetornum.join('')
                break;
            }
            if ((i) == 0) {
                vetornum[i] = -vetornum[i]
                res.innerHTML = vetornum.join('')
                break;
            } 
        }
    }
}

function result() {
    for (let i = 0; i < vetornum.length; i++) {
        switch (vetornum[i]) {
            case '^':
                op.push(i)
                qnt += 1
            break;
            case '/':
                op.push(i)
                qnt += 1
            break;           
            case '*':
                op.push(i)
                qnt += 1
            break;            
            case '-':
                op.push(i)
                qnt += 1
            break;            
            case '+':
                op.push(i)
                qnt += 1
            break;      
            case '.':
                if(qnt == 0){ 
                    passnumbers += '.'
                }
                else if (qnt == 1) {
                    posnumbers +=  '.'
                }
            break;
            default:
                if(qnt == 0){ 
                    passnumbers += JSON.stringify(vetornum[i]) 
                }
                else if (qnt == 1) {
                    posnumbers +=  JSON.stringify(vetornum[i])
                }
                if (qnt == 2 || vetornum.length == (i+1)) {
                    passnumbers = parseFloat(passnumbers)
                    posnumbers = parseFloat(posnumbers)
                    if (vetornum[op[opi]] == '^') {
                        resultado += passnumbers ** posnumbers
                        opi += 1
                    }
                    else if (vetornum[op[opi]] == '/') {
                        if (posnumbers == 0) {
                            window.alert('Não é possivel dividir por zero')
                            vetornum = []
                            res.innerHTML = '[ERRO]'                               
                        }
                        else{
                            resultado = passnumbers / posnumbers
                            opi += 1
                        }
                    }
                    else if (vetornum[op[opi]] == '*') {
                        resultado = passnumbers * posnumbers
                        opi += 1
                    }
                    else if (vetornum[op[opi]] == '-') {
                        resultado = passnumbers - posnumbers
                        opi += 1
                    }
                    else if (vetornum[op[opi]] == '+') {
                        resultado = passnumbers + posnumbers
                        opi += 1
                    }
                    passnumbers = ''
                    posnumbers = ''
                    qnt = 0
                    c = 0
                }
                break;
            }
        }
    resultado = roundToTwo(resultado)
    vetornum = [resultado]
    res.innerHTML = `${resultado} `
}
