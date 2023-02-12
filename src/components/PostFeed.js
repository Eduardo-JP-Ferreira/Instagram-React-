
import { useState } from "react"
export default function PostFeed(props){
    const [salvar, setSalvar] = useState("bookmark-outline")

    function salvar1(){
        if (salvar==="bookmark-outline"){
            setSalvar( "bookmark")
        }
        else{
            setSalvar("bookmark-outline")
        }
    }
    return(
        
        <div data-test="post" class="post">
            
                    <div class="topo">
                        <div class="usuario">
                            <img src={props.imgTopo} alt={props.nomeTopo}/>
                            {props.nomeTopo}
                        </div>
                        <div class="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>

                    <div class="conteudo">
                        <img data-test="post-image" src={props.imgConteudo} alt={props.nomeConteudo}/>
                    </div>

                    <div class="fundo">
                        <div class="acoes">
                            <div>
                                <ion-icon name="heart-outline"></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                                <ion-icon data-test="save-post" onClick={() => salvar1()} name={salvar}></ion-icon>
                            </div>
                        </div>

                        <div class="curtidas">
                            <img src={props.imgCurtida} alt={props.nomeCurtida}/>
                            <div class="texto">
                                Curtido por <strong>{props.nomeCurtida}</strong> e <strong>outras 99.159 pessoas</strong>
                            </div>
                        </div>
                    </div>
                </div>
    )

}