let n1 = '';
let n2 = '';
let op = '';
let sinal = false;
let limpar = false;

const res = document.querySelector('.resultado');

function resultado(n1, o, n2) {
    n1 = Number(n1);
    n2 = Number(n2);
 
    switch(o) {
       case '+': return n1 + n2; break;
       case '-': return n1 - n2; break;
       case '/': return n1 / n2; break;
       case '*': return n1 * n2; break;
       case '%': return (n1/100) * n2; break;
    }
}

document.querySelector('.buttons').addEventListener("click", function(e) {

    const target = e.target;

    if(target.matches('button')) {

        if(target.innerText != 'DE' && target.innerText != 'MC' && target.innerText != '=') {
            setTimeout(function(){
                res.innerText += target.innerText;
            }, 10);
        }

        if (target.innerText == 'DE' && sinal == false) {
            res.innerText = res.innerText.slice(0, -1);
            n1 = n1.slice(0, -1);
        } else if (target.innerText == 'DE' && sinal == true) {
            res.innerText = res.innerText.slice(0, -1);
            n2 = n2.slice(0, -1);
        }
        
        if(target.innerText == 'MC') {
            n1 = '';
            n2 = '';
            op = '';
            sinal = false;
            res.innerText = '';
        }
        
        if(sinal == false && Number(target.innerText) >= 0 &&  parseFloat(target.innerText) <= 9) {
            n1 += target.innerText;
        } else if(sinal == false && target.innerText == '.') {
            n1 += target.innerText;
        }

        if(sinal == true && Number(target.innerText) >= 0 &&  parseFloat(target.innerText) <= 9) {
            n2 += target.innerText;
        } else if(sinal == true && target.innerText == '.') {
            n2 += target.innerText;
        }

        if(target.innerText == '+' || target.innerText == '-' || target.innerText == '/' || target.innerText == '*' || target.innerText == '%') {
            sinal = true;
        }

        if(limpar == true && Number(target.innerText) >= 0 &&  parseFloat(target.innerText) <= 9) {
            res.innerText = ''
            limpar = false
        }
        
        switch(target.innerText) {
            case '+':
                op = '+'
                break;
            case '-':
                op = '-'
                break;
            case '/':
                op = '/'
                break;
            case '*':
                op = '*'
                break;
            case '%':
                op = '%'
                break
            case '=':
                res.innerText = parseFloat(resultado(parseFloat(n1), op, parseFloat(n2)).toFixed(2));
                n1 = '';
                n2 = '';
                op = '';
                sinal = false;
                limpar = true;
                break;
        }
    }
})