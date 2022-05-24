function mudarImagem(){
    let imagem = document.getElementById('lampada');
    if (imagem.src.match("bulbon"))
        imagem.src = "imgs/bulboff.gif"
        else
        imagem.src = "imgs/bulbon.gif"

}