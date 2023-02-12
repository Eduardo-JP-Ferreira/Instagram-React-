export default function Sugestoes(){

  const caixaSugestao = [
    {imagem: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes"},
    {imagem: "assets/img/chibirdart.svg", nome: "chibirdart"},
    {imagem: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar"},
    {imagem: "assets/img/adorable_animals.svg" , nome: "adorable_animals"},
    {imagem: "assets/img/smallcutecats.svg", nome: "smallcutecats"}
  ]
    return(
        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>

          {caixaSugestao.map((c)=> 
            <div class="sugestao">
              <div class="usuario">
                <img src={c.imagem} alt={c.nome}/>
                <div class="texto">
                  <div class="nome">{c.nome}</div>
                  <div class="razao">Segue você</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>
        )}
      </div>
    )
}