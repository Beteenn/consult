document.addEventListener('DOMContentLoaded', function () {

    var cpfButton = document.querySelector('#cpf');
    var cnpjButton = document.querySelector('#cnpj');
    var cepButton = document.querySelector('#cep');
    var iconButton = document.querySelector('.icon');
    var switchButton = document.querySelector('#switch');

    var pontuacao = false;

    cpfButton.addEventListener('click', function () {
        gerarCpf();
    });

    cnpjButton.addEventListener('click', function () {
        gerarCnpj();
    });

    cepButton.addEventListener('click', function () {
        gerarCep();
    });

    iconButton.addEventListener('click', function () {
        copiar();
    });

    switchButton.addEventListener('click', function () {
        pontuacao = !pontuacao;
    });


    function gerarCep() {
        let cep = ceps[geraRandom(10)];

        if (pontuacao === false)
            cep = cep.replace('-', '');

        document.querySelector('#dado').value = cep;

        copiar();

    }

    function gerarCpf() {
        let n = 9;
        let n1 = geraRandom(n);
        let n2 = geraRandom(n);
        let n3 = geraRandom(n);
        let n4 = geraRandom(n);
        let n5 = geraRandom(n);
        let n6 = geraRandom(n);
        let n7 = geraRandom(n);
        let n8 = geraRandom(n);
        let n9 = geraRandom(n);
        let d1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10;
        d1 = 11 - (mod(d1, 11));
        if (d1 >= 10) d1 = 0;
        let d2 = d1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11;
        d2 = 11 - (mod(d2, 11));
        if (d2 >= 10) d2 = 0;

        let cpf;

        if (pontuacao)
            cpf = '' + n1 + n2 + n3 + '.' + n4 + n5 + n6 + '.' + n7 + n8 + n9 + '-' + d1 + d2;
        else
            cpf = '' + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + d1 + d2;

        document.querySelector('#dado').value = cpf.toString();

        copiar();

        return cpf;
    }

    function gerarCnpj() {
        let n = 9;
        let n1 = geraRandom(n);
        let n2 = geraRandom(n);
        let n3 = geraRandom(n);
        let n4 = geraRandom(n);
        let n5 = geraRandom(n);
        let n6 = geraRandom(n);
        let n7 = geraRandom(n);
        let n8 = geraRandom(n);
        let n9 = 0;
        let n10 = 0;
        let n11 = 0;
        let n12 = 1;

        let d1 = n12 * 2 + n11 * 3 + n10 * 4 + n9 * 5 + n8 * 6 + n7 * 7 + n6 * 8 + n5 * 9 + n4 * 2 + n3 * 3 + n2 * 4 + n1 * 5;
        d1 = 11 - (mod(d1, 11));
        if (d1 >= 10) d1 = 0;
        let d2 = d1 * 2 + n12 * 3 + n11 * 4 + n10 * 5 + n9 * 6 + n8 * 7 + n7 * 8 + n6 * 9 + n5 * 2 + n4 * 3 + n3 * 4 + n2 * 5 + n1 * 6;
        d2 = 11 - (mod(d2, 11));
        if (d2 >= 10) d2 = 0;

        let cnpj;

        if (pontuacao)
            cnpj = '' + n1 + n2 + '.' + n3 + n4 + n5 + '.' + n6 + n7 + n8 + '/' + n9 + n10 + n11 + n12 + '-' + d1 + d2;
        else
            cnpj = '' + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10 + n11 + n12 + d1 + d2;


        document.querySelector('#dado').value = cnpj;

        copiar();

        return cnpj
    }

    function copiar() {
        dado = document.querySelector('#dado');
        dado.select();
        document.execCommand('copy');

        toggle();
    }

    function toggle() {
        let active = true;
        let element = document.getElementById("copiado");
        element.classList.toggle("active", active);
        setTimeout(function () {
            element.classList.toggle("active", active);
        }, 2000);
        active = !active;
    }

    function geraRandom(n) {
        var ranNum = Math.round(Math.random() * n);
        return ranNum;
    }

    function mod(dividendo, divisor) {
        return Math.round(dividendo - (Math.floor(dividendo / divisor) * divisor));
    }

    var ceps = [
        '65607-530',
        '69303-495',
        '72309-605',
        '77815-040',
        '29163-515',
        '70830-352',
        '77818-804',
        '76871-239',
        '74710-405',
        '57080-549',
        '69313-634',
        '61624-325'
    ];

})