import './App.css';
import { MintForm } from "./MintForm.js";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import degen from './images/degen.png'
import free from './images/FREE.png'
import topg from './images/topG.png'
import wow from './images/wow.png'
import bj from './images/bj.png'
import whale from './images/whale.png'
import king from './images/king.png'
import gm from './images/gm.png'
import gib from './images/gib.png'


function App() {
  return (
    <div className="bg-gray-800 min-h-screen font-messy">
      <div class="relative flex overflow-x-hidden bg-black">
        <div class="py-12 animate-marquee whitespace-nowrap">
          <span class="text-6xl mx-4">🎉</span>
          <span class="text-6xl mx-4">🎂</span>
          <span class="text-6xl mx-4">🎉</span>
          <span class="text-6xl mx-4">🎂</span>
          <span class="text-6xl mx-4">🎉</span>
          <span class="text-6xl mx-4">🎂</span>
          <span class="text-6xl mx-4">🎉</span>
          <span class="text-6xl mx-4">🎂</span>
          <span class="text-6xl mx-4">🎉</span>
          <span class="text-6xl mx-4">🎂</span>
          <span class="text-6xl mx-4">🎉</span>
          <span class="text-6xl mx-4">🎂</span>
          <span class="text-6xl mx-4">🎉</span>
          <span class="text-6xl mx-4">🎂</span>
          <span class="text-6xl mx-4">🎉</span>
          <span class="text-6xl mx-4">🎂</span>
          <span class="text-6xl mx-4">🎉</span>
          <span class="text-6xl mx-4">🎂</span>
          <span class="text-6xl mx-4">🎉</span>
          <span class="text-6xl mx-4">🎂</span>
          <span class="text-6xl mx-4">🎉</span>
          <span class="text-6xl mx-4">🎂</span>
          <span class="text-6xl mx-4">🎉</span>
          <span class="text-6xl mx-4">🎂</span>
          <span class="text-6xl mx-4">🎉</span>
          <span class="text-6xl mx-4">🎂</span>
          <span class="text-6xl mx-4">🎉</span>
          <span class="text-6xl mx-4">🎂</span>
          <span class="text-6xl mx-4">🎉</span>
          <span class="text-6xl mx-4">🎂</span>
          <span class="text-6xl mx-4">🎉</span>
          <span class="text-6xl mx-4">🎂</span>
          <span class="text-6xl mx-4">🎉</span>
          <span class="text-6xl mx-4">🎂</span>
          <span class="text-6xl mx-4">🎉</span>
          <span class="text-6xl mx-4">🎂</span>
        </div>

        <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
          <span class="text-6xl mx-4">🎉</span>
          <span class="text-6xl mx-4">🎂</span>
          <span class="text-6xl mx-4">🎉</span>
          <span class="text-6xl mx-4">🎂</span>
          <span class="text-6xl mx-4">🎉</span>
          <span class="text-6xl mx-4">🎂</span>
          <span class="text-6xl mx-4">🎉</span>
          <span class="text-6xl mx-4">🎂</span>
          <span class="text-6xl mx-4">🎉</span>
          <span class="text-6xl mx-4">🎂</span>
          <span class="text-6xl mx-4">🎉</span>
          <span class="text-6xl mx-4">🎂</span>
          <span class="text-6xl mx-4">🎉</span>
          <span class="text-6xl mx-4">🎂</span>
          <span class="text-6xl mx-4">🎉</span>
          <span class="text-6xl mx-4">🎂</span>
          <span class="text-6xl mx-4">🎉</span>
          <span class="text-6xl mx-4">🎂</span>
          <span class="text-6xl mx-4">🎉</span>
          <span class="text-6xl mx-4">🎂</span>
          <span class="text-6xl mx-4">🎉</span>
          <span class="text-6xl mx-4">🎂</span>
          <span class="text-6xl mx-4">🎉</span>
          <span class="text-6xl mx-4">🎂</span>
          <span class="text-6xl mx-4">🎉</span>
          <span class="text-6xl mx-4">🎂</span>
          <span class="text-6xl mx-4">🎉</span>
          <span class="text-6xl mx-4">🎂</span>
          <span class="text-6xl mx-4">🎉</span>
          <span class="text-6xl mx-4">🎂</span>
          <span class="text-6xl mx-4">🎉</span>
          <span class="text-6xl mx-4">🎂</span>
          <span class="text-6xl mx-4">🎉</span>
          <span class="text-6xl mx-4">🎂</span>
          <span class="text-6xl mx-4">🎉</span>
          <span class="text-6xl mx-4">🎂</span>
        </div>
      </div>
      <div className='container mx-auto p-4 mt-4 grid grid-cols-2'>
        <h1 className="text-5xl text-white font-bold">SUPPLY:456</h1>
        <div className="flex flex-row-reverse">
        <ConnectButton 
          showBalance={false} 
          chainStatus={{
            smallScreen: 'none',
            largeScreen: 'icon'
         }} 
          label="Join the Party!" 
          accountStatus={{
            smallScreen: 'avatar',
            largeScreen: 'full'
         }}/>
         </div>
         <div><h1 className="font-bold text-white text-2xl mt-2">All for the FREE</h1></div>
        </div>
        
      <div className="container mx-auto p-4 mt-4">
        <div className="text-center mb-4">
          <h1 className="text-5xl text-white font-bold text-gray-800">UNKNOWN's 21st Birthday</h1>
          <h3 className="mt-5 text-xl text-white font-semibold text-gray-800">SING ALONG BEFORE YOU MINT MFERS...</h3>
          <h4 className="mt-5 text-xl text-white font-semibold text-gray-800">HAPPY BIRTHDAY TO YOU HAPPY BIRTHDAY TO YOU</h4>
          <h4 className="mt-5 text-xl text-white font-semibold text-gray-800">HAPPY BIRTHDAY DEAR UNKNOWN HAPPY BIRTHDAY TO YOUUUUUUUUU</h4>
        </div>
        <MintForm />
        
      </div>
      <div class="grid grid-cols-10 gap-5">
        <img class="hover:animate-ping" width="256px" height="256px" src={wow}/>
        <img class="hover:animate-bounce" width="256px" height="256px" src={topg}/>
        <img class="hover:animate-spin" width="256px" height="256px" src={degen}/>
        <img class="hover:animate-ping" width="256px" height="256px" src={free}/>
        <img class="hover:animate-spin" width="256px" height="256px" src={king}/>
        <img class="hover:animate-bounce" width="256px" height="256px" src={whale}/>
        <img class="hover:animate-ping" width="256px" height="256px" src={gm}/>
        <img class="hover:animate-bounce" width="256px" height="256px" src={bj}/>
        <img class="hover:animate-spin" width="256px" height="256px" src={wow}/>
        <img class="hover:animate-ping" width="256px" height="256px" src={topg}/>
        <img class="hover:animate-spin" width="256px" height="256px" src={degen}/>
        <img class="hover:animate-ping" width="256px" height="256px" src={free}/>
        <img class="hover:animate-spin" width="256px" height="256px" src={king}/>
        <img class="hover:animate-bounce" width="256px" height="256px" src={whale}/>
        <img class="hover:animate-ping" width="256px" height="256px" src={gm}/>
        <img class="hover:animate-bounce" width="256px" height="256px" src={bj}/>
        <img class="hover:animate-spin" width="256px" height="256px" src={wow}/>
        <img class="hover:animate-bounce" width="256px" height="256px" src={topg}/>
        <img class="hover:animate-ping" width="256px" height="256px" src={degen}/>
        <img class="hover:animate-bounce" width="256px" height="256px" src={free}/>
        <img class="hover:animate-spin" width="256px" height="256px" src={king}/>
        <img class="hover:animate-ping" width="256px" height="256px" src={whale}/>
        <img class="hover:animate-spin" width="256px" height="256px" src={gm}/>
        <img class="hover:animate-ping" width="256px" height="256px" src={bj}/>
        <img class="hover:animate-spin" width="256px" height="256px" src={wow}/>
        <img class="hover:animate-bounce" width="256px" height="256px" src={topg}/>
        <img class="hover:animate-ping" width="256px" height="256px" src={degen}/>
        <img class="hover:animate-bounce" width="256px" height="256px" src={free}/>
        <img class="hover:animate-spin" width="256px" height="256px" src={king}/>
        <img class="hover:animate-ping" width="256px" height="256px" src={whale}/>
        <img class="hover:animate-spin" width="256px" height="256px" src={gm}/>
        <img class="hover:animate-ping" width="256px" height="256px" src={bj}/>
        <img class="hover:animate-spin" width="256px" height="256px" src={wow}/>
        <img class="hover:animate-bounce" width="256px" height="256px" src={topg}/>
        <img class="hover:animate-spin" width="256px" height="256px" src={degen}/>
        <img class="hover:animate-ping" width="256px" height="256px" src={free}/>
        <img class="hover:animate-spin" width="256px" height="256px" src={king}/>
        <img class="hover:animate-ping" width="256px" height="256px" src={whale}/>
        <img class="hover:animate-spin" width="256px" height="256px" src={gm}/>
        <img class="hover:animate-bounce" width="256px" height="256px" src={bj}/>
        <img class="hover:animate-ping" width="256px" height="256px" src={wow}/>
        <img class="hover:animate-bounce" width="256px" height="256px" src={topg}/>
        <img class="hover:animate-spin" width="256px" height="256px" src={degen}/>
        <img class="hover:animate-ping" width="256px" height="256px" src={free}/>
        <img class="hover:animate-spin" width="256px" height="256px" src={king}/>
        <img class="hover:animate-ping" width="256px" height="256px" src={whale}/>
        <img class="hover:animate-spin" width="256px" height="256px" src={gm}/>
        <img class="hover:animate-bounce" width="256px" height="256px" src={bj}/>
        <img class="hover:animate-ping" width="256px" height="256px" src={wow}/>
        <img class="hover:animate-bounce" width="256px" height="256px" src={topg}/>
        <img class="hover:animate-spin" width="256px" height="256px" src={degen}/>
        <img class="hover:animate-ping" width="256px" height="256px" src={free}/>
        <img class="hover:animate-spin" width="256px" height="256px" src={king}/>
        <img class="hover:animate-ping" width="256px" height="256px" src={whale}/>
        <img class="hover:animate-spin" width="256px" height="256px" src={gm}/>
        <img class="hover:animate-bounce" width="256px" height="256px" src={bj}/>
        <img class="hover:animate-ping" width="256px" height="256px" src={wow}/>
        <img class="hover:animate-bounce" width="256px" height="256px" src={topg}/>
        <img class="hover:animate-spin" width="256px" height="256px" src={degen}/>
        <img class="hover:animate-bounce" width="256px" height="256px" src={free}/>
        <img class="hover:animate-spin" width="256px" height="256px" src={king}/>
        <img class="hover:animate-ping" width="256px" height="256px" src={whale}/>
        <img class="hover:animate-spin" width="256px" height="256px" src={gm}/>
        <img class="hover:animate-bounce" width="256px" height="256px" src={bj}/>
        <img class="hover:animate-ping" width="256px" height="256px" src={wow}/>
        <img class="hover:animate-bounce" width="256px" height="256px" src={topg}/>
        <img class="hover:animate-ping" width="256px" height="256px" src={degen}/>
        <img class="hover:animate-bounce" width="256px" height="256px" src={free}/>
        <img class="hover:animate-spin" width="256px" height="256px" src={king}/>
        <img class="hover:animate-ping" width="256px" height="256px" src={whale}/>
        <img class="hover:animate-ping" width="256px" height="256px" src={gm}/>
        <img class="hover:animate-bounce" width="256px" height="256px" src={bj}/>
        <img class="hover:animate-spin" width="256px" height="256px" src={wow}/>
        <img class="hover:animate-bounce" width="256px" height="256px" src={topg}/>
        <img class="hover:animate-ping" width="256px" height="256px" src={degen}/>
        <img class="hover:animate-bounce" width="256px" height="256px" src={free}/>
        <img class="hover:animate-spin" width="256px" height="256px" src={king}/>
        <img class="hover:animate-ping" width="256px" height="256px" src={whale}/>
        <img class="hover:animate-spin" width="256px" height="256px" src={gm}/>
        <img class="hover:animate-ping" width="256px" height="256px" src={bj}/>
        
        
        
      </div>
    </div>
  );
}



export default App;
