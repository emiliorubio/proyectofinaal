import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import QueSeVallan from '../../assets/audios-podcast/que-se-vallan.mp3'
import LosValientes from '../../assets/audios-podcast/los-valientes.mp3'
import CuandoDejarIr from '../../assets/audios-podcast/cuando-dejar-ir-a-alguien.mp3'
import Levantate from '../../assets/audios-podcast/levantate.mp3'
import NoSeRuega from '../../assets/audios-podcast/el-amor-no-se-ruega.mp3'
import RodeateDeGigantes from '../../assets/audios-podcast/rodeate-de-gigantes.mp3'
import LosEnvidiosos from '../../assets/audios-podcast/los-envidiosos.mp3'
import ElPoderDeTuActitud from '../../assets/audios-podcast/el-poder-de-tu-actitud.mp3'
import VivirConEntusiasmo from '../../assets/audios-podcast/vivir-con-entusiasmo.mp3'
import LaReglaDeOro from '../../assets/audios-podcast/la-regla-de-oro.mp3'
import MayBustillo from '../../assets/audios-podcast/may-bustillo.mp3'


export const Podcast = () => {
  return (
    <div className='podcast'>
          <div className='title-podcast'><h1>PodCast</h1></div>
          <div className='autor-podcast'><h2>Daniel Habif</h2></div>
        <div className='container-podcast'>
          <div>
            <h2 className='cast'>Que Se Vayan</h2>
            <ReactAudioPlayer 
            src={QueSeVallan}
            controls
            />
          </div>
          <div>
            <h2 className='cast'>Los valientes</h2>
            <ReactAudioPlayer
            src={LosValientes}
            controls
            />
          </div>
          <div>
            <h2 className='cast'>Cuando dejar ir a alguien</h2>
            <ReactAudioPlayer
            src={CuandoDejarIr}
            controls
            />
          </div>
        </div>
        <div className='container-podcast'>
          <div>
            <h2 className='cast'>Levantate</h2>
            <ReactAudioPlayer
            src={Levantate}
            controls
            />
          </div>
          <div>
            <h2 className='cast'>El amor no se ruega</h2>
            <ReactAudioPlayer
            src={NoSeRuega}
            controls
            />
          </div>
          <div>
            <h2 className='cast'>Rodeate de gigantes</h2>
            <ReactAudioPlayer
            src={RodeateDeGigantes}
            controls
            />
          </div>
        </div>
        <div className='container-podcast'>
          <div>
            <h2 className='cast'>Los Envidiosos</h2>
            <ReactAudioPlayer
            src={LosEnvidiosos}
            controls
            />
          </div> 
        </div> 



        <div className='autor-podcast'><h2>Victor Küppers</h2></div>



        <div className='container-podcast'>
          <div>
            <h2 className='cast'>El poder de tu actitud</h2>
            <ReactAudioPlayer
            src={ElPoderDeTuActitud}
            controls
            />
          </div>
          <div>
            <h2 className='cast'>Vivir con entusiasmo</h2>
            <ReactAudioPlayer
            src={VivirConEntusiasmo}
            controls
            />
          </div>
          <div>
            <h2 className='cast'>La regla de oro</h2>
            <ReactAudioPlayer
            src={LaReglaDeOro}
            controls
            />
          </div>
        </div>

        <div className='autor-podcast'><h2>May Bustillo</h2></div>

        <div className='container-podcast'>
          <div>
            <h2 className='cast'>De ti depende</h2>
            <ReactAudioPlayer
            src={MayBustillo}
            controls
            />
          </div>
        </div>
    </div>
    
  )
}


