document.addEventListener("DOMContentLoaded", () => {
    const btnAcesso = document.getElementById("btn-acesso");

    btnAcesso.addEventListener("click", (e) => {
        // Previne que a página recarregue à toa
        e.preventDefault(); 
        
        // Coloque o seu link de vendas real entre as aspas abaixo:
        window.location.href = "https://www.trevo.club/casino?form=signup";
    });
});