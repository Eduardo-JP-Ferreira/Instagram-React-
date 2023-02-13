import React from "react";
import PostFeed from "./PostFeed";



export default function Posts(){

    const postagensInicial = [
        {id: "0",imgTopo: "assets/img/meowed.svg", nomeTopo: "meowed", imgConteudo: "assets/img/gato-telefone.svg", nomeConteudo: "gato",imgCurtida:"assets/img/filomoderna.svg", nomeCurtida: "filomoderna", curtidas:"241"},
        {id: "1",imgTopo: "assets/img/barked.svg", nomeTopo: "barked", imgConteudo: "assets/img/dog.svg", nomeConteudo: "dog",imgCurtida:"assets/img/adorable_animals.svg", nomeCurtida: "adorable_Animals", curtidas:"370"},
        {id: "2",imgTopo: "assets/img/razoesparaacreditar.svg", nomeTopo: "razoes", imgConteudo: "assets/img/razoesparaacreditar.svg", nomeConteudo: "razao",imgCurtida: "assets/img/respondeai.svg", nomeCurtida: "respondeai", curtidas:"513"}
      ]
      
    return(
        <div class="posts">
            {/* <PostFeed imgTopo={postagensInicial[0].imgTopo} nomeTopo={postagensInicial[0].nomeTopo} imgConteudo={postagensInicial[0].imgConteudo} nomeConteudo={postagensInicial[0].nomeConteudo} imgCurtida={postagensInicial[0].imgCurtida} nomeCurtida={postagensInicial[0].nomeCurtida}/>
            <PostFeed imgTopo={postagensInicial[1].imgTopo} nomeTopo={postagensInicial[1].nomeTopo} imgConteudo={postagensInicial[1].imgConteudo} nomeConteudo={postagensInicial[1].nomeConteudo} imgCurtida={postagensInicial[1].imgCurtida} nomeCurtida={postagensInicial[1].nomeCurtida}/>
            <PostFeed imgTopo={postagensInicial[2].imgTopo} nomeTopo={postagensInicial[2].nomeTopo} imgConteudo={postagensInicial[2].imgConteudo} nomeConteudo={postagensInicial[2].nomeConteudo} imgCurtida={postagensInicial[2].imgCurtida} nomeCurtida={postagensInicial[2].nomeCurtida}/> */}

            {postagensInicial.map((item)=>
                <PostFeed imgTopo={item.imgTopo} nomeTopo={item.nomeTopo} imgConteudo={item.imgConteudo} nomeConteudo={item.nomeConteudo} imgCurtida={item.imgCurtida} nomeCurtida={item.nomeCurtida} curtidas={item.curtidas}/>
            )}
        
        
        </div>
    )
}