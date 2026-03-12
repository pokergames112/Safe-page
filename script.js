document.addEventListener("DOMContentLoaded", () => {
    const btnAcesso = document.getElementById("btn-acesso");

    btnAcesso.addEventListener("click", (e) => {
        // e.preventDefault(); previne que a página recarregue à toa se estiver com href="#"
        e.preventDefault(); 
        
        // Quando quiser colocar a página para rodar de verdade, 
        // apague as duas barras "//" abaixo e troque o link:
        
        // window.location.href = "https://seulinkdevendas.com.br";
        
        alert("O botão foi clicado! Aqui ocorrerá o redirecionamento.");
    });
});