var vetornum = []
var res = document.getElementById('res')
var passnumbers = ''
var posnumbers = ''
var resultado = ''
var qnt = 0
var op = []
var opi = 0


function reset() {
    vetornum = []
    res.innerHTML = 0
    resultado = ''
    qnt = 0
    op = []
    passnumbers = ''
    posnumbers = ''
    opi = 0 
}

function number(x) {
    let n = x
    if (vetornum.length < 15) {
        vetornum.push(n)
        res.innerHTML = vetornum.join('')
    }
    else{
        window.alert('[ERRO] Número maximo de digitos atingido (15)')
    }
}
function negativo() {
    vetornum[(vetornum.length - 1)] = -vetornum[(vetornum.length - 1)]
    res.innerHTML = vetornum.join('')
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
                    window.alert(`pass: ${passnumbers} pos:${posnumbers} vetor: ${vetornum}`)
                    passnumbers = ''
                    posnumbers = ''
                    qnt = 0
                }
                break;
            }
        }
    vetornum = [resultado]
    res.innerHTML = `${resultado} `
}
