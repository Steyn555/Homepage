import './Home.css'

export default function Home() {
  return (
      <div id="home">
          <h1 id="title">Steyn555</h1>
          <a id="discord" class="link" href="https://discord.com/users/640147041376403456/" target="_blank"><img src="/discord.svg" target="_blank"/></a>
         <a id="spotify" class="link" href="https://open.spotify.com/user/1t5b1wv11ml5am7s4v9ds2cyk?si=7a6bc70654c0419a" target="_blank"><img src="/spotify.svg" target="_blank"/></a>
          <a id="steam" class="link" href="https://steamcommunity.com/profiles/76561198849415214" target="_blank"><img src="/steam.svg" target="_blank"/></a>
         <a id="reddit" class="link" href="https://www.reddit.com/user/Steyn555" target="_blank"><img src="/reddit.svg" target="_blank"/></a>
          <a id="github" class="link" href="https://github.com/Steyn555" target="_blank"><img src="/github.svg" target="_blank"/></a>
          <span class="circle" style={{"animation-delay": "0"}}></span>
          <span class="circle" style={{"animation-delay": "-0.2s"}}></span>
          <span class="circle" style={{"animation-delay": "-0.4s"}}></span>
          <span class="circle" style={{"animation-delay": "-0.6s"}}></span>
          <span class="circle" style={{"animation-delay": "-0.8s"}}></span>
          <span class="circle" style={{"animation-delay": "-1s"}}></span>
      </div>
  )
}
