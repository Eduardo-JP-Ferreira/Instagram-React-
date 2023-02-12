export default function Usuario(){
    return(
        <CriarUsuario imagem="assets/img/catanacomics.svg" alt="imagem de perfil" nome="catanacomics"/>
    )
}

function CriarUsuario(props){
    return(
        <div class="usuario">
            <img src={props.imagem} alt={props.alt}/>
            <div class="texto">
                <span>
                    <strong>{props.nome}</strong>
                    <ion-icon name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}