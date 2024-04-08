// validar username
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// funções gerais
function togglePopup(input, label) {
    // Mostrar popup de campo obrigatório
    input.addEventListener("focus", () => {
        label.classList.add("required-popup")
    })

    // Ocultar popup de campo obrigatório
    input.addEventListener("blur", () => {
        label.classList.remove("required-popup")
    });
};

togglePopup(usernameInput, usernameLabel);

function estilizarInputCorreto(input, helper) {
    helper.classList.remove("visible");
    input.classList.remove("error");
    input.classList.add("correct");
};

function estilizarInputIncorreto(input, helper) {
    helper.classList.add("visible");
    input.classList.add("error");
    input.classList.remove("correct");
};

// validar valor do input
usernameInput.addEventListener("change", (e) => {
    let valorInput = e.target.value;

    if (valorInput.length < 3) {
        // adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
        usernameHelper.innerText = "o nome de usuário precisa ter no mínimo 3 caracteres"
        estilizarInputIncorreto(usernameInput, usernameHelper);
        inputsCorretos.username = false;
    } else {
        // adicionar estilo dinâmico se o valor estiver correto
        estilizarInputCorreto(usernameInput, usernameHelper);
        inputsCorretos.username = true;
    }
});

// validação de email
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel);

// validar valor do input
emailInput.addEventListener("change", (e) => {
    let valorEmail = e.target.value;

    if (valorEmail.includes("@") && valorEmail.includes(".com")) {
        // adicionar estilo dinâmico se o valor estiver correto
        estilizarInputCorreto(emailInput, emailHelper);
        inputsCorretos.email = true;
    } else {       
        // adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
        emailHelper.innerText = "Precisa inserir um email válido"
        estilizarInputIncorreto(emailInput, emailHelper);
        inputsCorretos.email = false;
    }
});

// validação de senha
let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

togglePopup(senhaInput, senhaLabel);

// validar valor do input
senhaInput.addEventListener("blur", (e) => {
    let valorSenha = e.target.value;

    if (valorSenha == "") {
        senhaHelper.innerText = "Favor preencher este campo com uma senha válida!";
       estilizarInputIncorreto(senhaInput, senhaHelper);
        inputsCorretos.senha = false;
    } else {       
        senhaHelper.innerText = "";
        estilizarInputCorreto(senhaInput, senhaHelper);
        inputsCorretos.senha = true;
    }
});

// validação de confirma senha
let confirmaSenhaInput = document.getElementById("confirma-senha");
let confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]');
let confirmaSenhaHelper = document.getElementById("confirma-senha-helper");

togglePopup(confirmaSenhaInput, confirmaSenhaLabel);

// validar valor do input
confirmaSenhaInput.addEventListener("blur", (e) => {
    let valorConfirmaSenha = e.target.value;

    if (valorConfirmaSenha == senhaInput.value) {
        estilizarInputCorreto(confirmaSenhaInput, confirmaSenhaHelper);
        inputsCorretos.confirmaSenha = True;
    } else {
        confirmaSenhaHelper.innerText = "As senhas precisam ser iguais";
        estilizarInputIncorreto(confirmaSenhaInput, confirmaSenhaHelper);
        inputsCorretos.confirmaSenha = False;
    };
});

// evitar envio do formulário
let btnSubmit = document.querySelector('button[type="submit"]');
let inputsCorretos = {
    username: false,
    email: false,
    senha: false,
    confirmaSenha: false
};

btnSubmit.addEventListener("click", (e) => {
   if (inputsCorretos.username == false ||
        inputsCorretos.email == false ||
        inputsCorretos.senha == false ||
        inputsCorretos.confirmaSenha == false) {
        e.preventDefault();
        alert("Favor preencher todos os campos!");
    } else {
        alert("Formulário enviado com sucesso!");
    }
})