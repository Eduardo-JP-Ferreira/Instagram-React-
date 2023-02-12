import React from "react"
export default function Usuario(){

    const [nomeUsuario, setNomeUsuario] = React.useState("catanacomics")
    const [imagemUsuario, setImagemUsuario] = React.useState("assets/img/catanacomics.svg")

    function trocaNome(){
        let novoNome = prompt("Insira o Nome do Usuário?")
        if(novoNome === "" || novoNome === undefined || novoNome === null){
            
        }else{
            setNomeUsuario(novoNome)
        }
    }

    function trocaImagem(){
        let novaImagem = prompt("Insira o Link da Imagem?")
        if(novaImagem === "" || novaImagem === undefined || novaImagem === null){
            
        }else{
            setImagemUsuario(novaImagem)
        }
    }

    function CriarUsuario(props){
        return(
            <div class="usuario">
                <img data-test="profile-image" onClick={trocaImagem} src={props.imagem} alt={props.alt}/>
                <div class="texto">
                    <span>
                        <strong data-test="name">{props.nome}</strong>
                        <ion-icon data-test="edit-name" onClick={trocaNome} name="pencil"></ion-icon>
                    </span>
                </div>
            </div>
        )
    }

    return(
        <CriarUsuario imagem={imagemUsuario} alt="imagem de perfil" nome={nomeUsuario}/>
    )
}
