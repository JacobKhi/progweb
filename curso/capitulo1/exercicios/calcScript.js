const display = document.getElementById('display');
const botoes = document.querySelectorAll('button');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const valor = botao.dataset.valor;
        const acao = botao.dataset.acao;

        if (valor) {
            adicionarAoDisplay(valor);
        }

        if (acao) {
            executarAcao(acao);
        }
    });
});

function adicionarAoDisplay(valor) {
    if (display.value === '' && ['/', '*', '+', '.'].includes(valor)) {
        return;
    }
    
    display.value += valor;
}

function executarAcao(acao) {
    switch (acao) {
        case 'limpar':
            display.value = '';
            break;
            
        case 'apagar':
            display.value = display.value.slice(0, -1);
            break;
            
        case 'calcular':
            try {
                if (display.value) {
                    display.value = eval(display.value);
                }
            } catch (erro) {
                display.value = 'Erro';
                setTimeout(() => display.value = '', 1500);
            }
            break;
    }
}