function mudarImagem(){
    let imagem = document.getElementById('lampada');
    if (imagem.src.match("bulbon"))
        imagem.src = "imgs/bulboff.gif"
        else
        imagem.src = "imgs/bulbon.gif"

}
function percorrerTudo(){
    let txt = document.querySelector("#TextoX").value
    let number = document.querySelector("#numeroX").value
    let ul = document.getElementById("ulPercorrer")
    console.log(number)
    console.log(txt)
    if(txt == ""){
        alert("Você não digitou nada, digite alguma coisa no txt")
    }
    console.log(txt)
    for (let i = 0; i < number; i++) {
        ul.insertAdjacentHTML("afterbegin", `<li> ${txt}</li>`)
    }

}
function limpar(){
    let ul = document.getElementById("ulPercorrer")
    let geometria = document.getElementById('geometria')
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }
    while(geometria.firstChild){
        geometria.removeChild(geometria.firstChild);
    }
}
function gerarObjeto(){
    let geometria = document.getElementById('geometria')
    let quadrado = document.getElementById('quadrado')
    let circulo = document.getElementById('circulo')
    let triangulo = document.getElementById('triangulo')
    if (quadrado.checked && circulo.checked && triangulo.checked || quadrado.checked && circulo.checked || triangulo.checked && quadrado.checked || triangulo.checked && circulo.checked) {
        return alert('Selecione apenas um amigão!')
    }
    if (quadrado.checked) {
        geometria.insertAdjacentHTML("afterbegin", `<div class="quadrado"></div>`)
    }
    if (circulo.checked) {
        geometria.insertAdjacentHTML("afterbegin", `<div class="circulo"> </div>`)
    }
    if (triangulo.checked) {
        geometria.insertAdjacentHTML("afterbegin", `<div class="triangulo"> </div>`)
    }
}