import { useState } from "react"

export default function PostFeed(props) {
    const [salvar, setSalvar] = useState("bookmark-outline")
    const [curtir, setCurtir] = useState("heart-outline")
    const [curtida, setCurtida] = useState(props.curtidas)
    const [corIcone, setCorIcone] = useState("preto")
    function botaoSalvar() {
        if (salvar === "bookmark-outline") {
            setSalvar("bookmark")

        }
        else {
            setSalvar("bookmark-outline")
        }
    }

    function botaoCurtir() {
        if (curtir === "heart-outline") {
            setCurtir("heart")
            setCorIcone("vermelho")
            let num =Number(curtida)+1
            setCurtida(num)
        }
        else {
            setCurtir("heart-outline")
            setCorIcone("preto")
            let num =Number(curtida)-1
            setCurtida(num)
        }
    }

    function imgCurtir() {
        if (curtir === "heart-outline") {
            setCurtir("heart")
            setCorIcone("vermelho")
            let num =Number(curtida)+1
            setCurtida(num)
        }
    }
    return (

        <div data-test="post" class="post">

            <div class="topo">
                <div class="usuario">
                    <img src={props.imgTopo} alt={props.nomeTopo} />
                    {props.nomeTopo}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img data-test="post-image" onDoubleClick={() => imgCurtir()} src={props.imgConteudo} alt={props.nomeConteudo} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon data-test="like-post" onClick={() => botaoCurtir()} class={corIcone} name={curtir}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" onClick={() => botaoSalvar()} name={salvar}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imgCurtida} alt={props.nomeCurtida} />
                    <div class="texto">
                        Curtido por <strong>{props.nomeCurtida}</strong> e <strong>outras <span data-test="likes-number">{curtida}</span> pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )

}