AOS.init();

let nome = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let password = document.getElementById("password");
let button = document.getElementById("button");


let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let phoneError = document.getElementById("phoneError");
let passwordError = document.getElementById("passwordError");
let loginError = document.getElementById("loginError")

let printInfos = document.getElementById("printInfos")
let Logout = document.getElementById("Logout")

let Pdt = [
    {Name:"Console", image:"images/home/ps5-Catalog.png"},
    {Name:"PCs", image:"images/home/PC-Catalog.jpg"},
    {Name:"Processador", image:"images/home/Ryzen-Catalog.jpg"},
]

let resultado = Pdt.find((produto) =>{
    return produto.Name === "PCs"
})
console.log(resultado)


// let numeros = [1,2,3,4,5,6,7,8,9,10]

// let pares = numeros.filter((numero) =>{
//     return numero % 2 === 0
// })



let Produtos = [
    { Name: "Consoles", image: "images/home/ps5-Catalog.png" },
    { Name: "PCs", image: "images/home/PC-Catalog.jpg" },
    { Name: "Processadores", image: "images/home/Ryzen-Catalog.jpg" },
    { Name: "Memorias", image: "images/home/Memoria.webp" },
    { Name: "SSDs", image: "images/home/SSD.jpg" },
    { Name: "Fontes", image: "images/home/Fonte-alimentacao.jpg" },
    { Name: "Placas Mães", image: "images/home/Placa-mae.webp" },
    { Name: "Placas de Vídeo", image: "images/home/Placa-video.jpg" },
    { Name: "Gabinetes", image: "images/home/Gabinete.webp" },
    { Name: "Acessórios", image: "images/home/Acessorios.jpg" },
];

let Catalogo = document.getElementById("Catalogo")

Produtos.forEach((produto) => {
      Catalogo.innerHTML +=

    `
        <div class="text-center Itens" data-aos="fade-right" data-aos-duration="1000">
            <img src="${produto.image}" class="rounded" alt="${produto.Name}">
            <h6>${produto.Name}</h6>
        </div>
    `


})

let saudacao = (nome) =>{
    return "ola," + nome
}





function validate() { //criando a função de validar os campos do formulario



    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    passwordError.textContent = "";
    loginError.textContent = "";

    //aqui eu limpo os erros para que quando o usuario clicar no botão de login, ele limpe os erros anteriores e mostre apenas os erros atuais, caso haja um erro.

    nome.classList.remove("inputsError", "inputsSuccess");
    email.classList.remove("inputsError", "inputsSuccess");
    phone.classList.remove("inputsError", "inputsSuccess");
    password.classList.remove("inputsError", "inputsSuccess");

    //aqui eu limpo as classes de erro e sucesso para que quando o usuario clicar no botao de login,ele limpe as classes anteriores e mostre apenas as classes atuais, caso haja um erro ou sucesso.



    if (nome.value === "") { // foi criado um if que verifica se o nome esta vazio, se estiver  vazio ele cai no if, ele vai acionar a funcao "mostrarErro" e fara o input ficar vermelho, mostrar o span com a mensagem e erro

        mostrarErro(nome, nameError, "O campo Nome e obrigatorio")
        return
    } else { // se nao estiver vazio
        mostrarSuccess(nome, nameError)//deixa o input verde e mostra qual o span va ser limpo

    }


    if (email.value === "") {
        mostrarErro(email, emailError, "O campo E-MAIL e obrigatorio")
        return
    } else if (!email.value.includes("@")) {
        mostrarErro(email, emailError, "O campo E-MAIL deve conter um '@'!")
        return
    } else if (!email.value.endsWith(".com")) {
        mostrarErro(email, emailError, "O campo E-MAIL deve conter um '.com'!")
        return
    } else {
        mostrarSuccess(email, emailError)
    }

    if (phone.value === "") {
        mostrarErro(phone, phoneError, "O campo TELEFONE é obrigatório!")
        return
    } else if (isNaN(phone.value)) {
        mostrarErro(phone, phoneError, "O campo TELEFONE deve conter apenas números!")
        return
    } else if (phone.value.length < 11 || phone.value.length > 11) {
        mostrarErro(phone, phoneError, "O campo TELEFONE deve conter 11 digitos!")
        return
    } else {
        mostrarSuccess(phone, phoneError)
    }

    if (password.value === "") {
        mostrarErro(password, passwordError, "O campo SENHA é obrigatório!")
        return
    } else if (password.value.length < 6) {
        mostrarErro(password, passwordError, "O campo SENHA deve conter no minimo 6 caracteres!")
    } else {
        mostrarSuccess(password, passwordError)
    }


    // if (password.value === "") {
    //     passwordError.textContent = "O campo SENHA é obrigatório!"
    //     password.classList.add("inputsError")
    //     return
    // } else if (password.value.length < 6) {
    //     passwordError.textContent = "O campo SENHA deve conter no minimo 6 caracteres!"
    //     password.classList.add("inputsError")
    //     return
    // } else {
    //     password.classList.add("inputsSuccess")
    // }

    loginError.textContent = "Login realizado com sucesso, ola " + nome.value + "!";

    localStorage.setItem("Nomeusuario", nome.value); //salva quando o login for bem sucedido, guarda o nome do usuario no navegador com a chave Nomeuisuario.

    printInfos.textContent = "Bem Vindo, " + nome.value + "!"
    Logout.style.display = "block"// assim q o login for bem sucedido, o texto de boas vinda sera exibido juntamente ao botao.


}

function mostrarErro(inputs, spanErro, mensagem) { //foi criado uma funcao com 3 parametros

    inputs.classList.add("inputsError")//adiciona borda vermelha, o classList acessa as classes dos inputs, e nessas minhas classes acessadas foram adicionados a classe inputsError, por isso a borda fica vermelha.

    inputs.classList.remove("inputsSuccess")//remove a borda verde
    spanErro.textContent = mensagem //mostra a mensagem de erro no span

}

function mostrarSuccess(inputs, spanErro) { // foi criado uma funcao com 2 parametros

    inputs.classList.add("inputsSuccess")//adiciona borda verde
    inputs.classList.remove("inputError")//remove borda vermelha
    spanErro.textContent = "" //limpa qualquer mensgame de erro

}






let User = localStorage.getItem("Nomeusuario"); //criei uma variavel onde recupera os dados  quando a pagina carrega, getItem e usado pra recuperar o valor armazenado no localStorage, no caso neste codigo esta sendo usado para ver se o usuario ja fez login antes.

if (User !== null) {
    printInfos.textContent = "Bem Vindo, " + User + "!";
    Logout.style.display = "block"
}
//se o User for diferente de vazio, sera deefinido um texto de boas vindas e o botao de logout sera exibido, caso contrario o botao de logout ficara escondido.

Logout.addEventListener("click", function () {
    localStorage.removeItem("Nomeusuario");
    printInfos.textContent = "";
    Logout.style.display = "none";
    //espera o clique no botao de logout acontecer, quand clicado ele executa esta funcao anonima que remove os dados do localStorage, limap o textoo de boas vindas, esconde o botao de logout. 
})
button.addEventListener("click", validate);



document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        validate()
    }
}) // permitir q o usuario clique "Enter" apra fazer login em vez de clicar no botao de login, dets vez o addEventListerner esta esperando uma tecla ser clicada, criamos uma funcao anonima onde tem o objeto "event" que guarda a informacao de qual tecla foi acionada, e temops o if: se a teclada acionada for "Enter" entao ele vai acionar minha funcao "validate".

// function saudacao(nome) {
//     console.log("Ola," + nome + "!")
// }
// saudacao("Karine")