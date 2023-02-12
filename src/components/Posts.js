import React from "react";

export default function Posts(){

    const [bookmark, setBookmark] = React.useState("bookmark-outline")

    function salvar(){

        if (bookmark==="bookmark-outline"){
            setBookmark("bookmark")
        }
        else{
            setBookmark("bookmark-outline")
        }
    }
    

  const postagens = [
    {imgTopo: "assets/img/meowed.svg", nomeTopo: "meowed", imgConteudo: "assets/img/gato-telefone.svg", nomeConteudo: "gato",imgCurtida:"assets/img/filomoderna.svg", nomeCurtida: "filomoderna", icone: `${bookmark}`},
    {imgTopo: "assets/img/barked.svg", nomeTopo: "barked", imgConteudo: "assets/img/dog.svg", nomeConteudo: "dog",imgCurtida:"assets/img/adorable_animals.svg", nomeCurtida: "adorable_Animals", icone: `${bookmark}`},
    {imgTopo: "assets/img/razoesparaacreditar.svg", nomeTopo: "razoes", imgConteudo: "assets/img/razoesparaacreditar.svg", nomeConteudo: "razao",imgCurtida: "assets/img/respondeai.svg", nomeCurtida: "respondeai", icone: `${bookmark}`}
  ]

    return(
        <div class="posts">
            {postagens.map((p) => 
                <div data-test="post" class="post">
                    <div class="topo">
                        <div class="usuario">
                            <img src={p.imgTopo} alt={p.nomeTopo}/>
                            {p.nomeTopo}
                        </div>
                        <div class="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>

                    <div class="conteudo">
                        <img data-test="post-image" src={p.imgConteudo} alt={p.nomeConteudo}/>
                    </div>

                    <div class="fundo">
                        <div class="acoes">
                            <div>
                                <ion-icon name="heart-outline"></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                                <ion-icon data-test="save-post" onClick={salvar} name={p.icone}></ion-icon>
                                {console.log(p.icone)}
                            </div>
                        </div>

                        <div class="curtidas">
                            <img src={p.imgCurtida} alt={p.nomeCurtida}/>
                            <div class="texto">
                                Curtido por <strong>{p.nomeCurtida}</strong> e <strong>outras 99.159 pessoas</strong>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}