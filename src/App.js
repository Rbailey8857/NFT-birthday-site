import './App.css';
import { MintForm } from "./MintForm.js";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import degen from './degen.png'
import free from './FREE.png'
import topg from './topG.png'
import wow from './wow.png'
import bj from './bj.png'
import whale from './whale.png'
import king from './king.png'
import gm from './gm.png'


function App() {
  return (
    <div className="bg-blue-500 min-h-screen font-messy">
      <div class="relative flex overflow-x-hidden bg-blue-800">
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
      <div className='container mx-auto p-4 mt-4 flex flex-row-reverse'>
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
      <div className="container mx-auto p-4 mt-4">
        <div className="text-center mb-4">
          <h1 className="text-5xl font-bold text-gray-800">UNKNOWN's 21st Birthday</h1>
          <h3 className="mt-5 text-xl font-semibold text-gray-800">SING ALONG BEFORE YOU MINT MFERS...</h3>
          <h4 className="mt-5 text-xl font-semibold text-gray-800">HAPPY BIRTHDAY TO YOU HAPPY BIRTHDAY TO YOU</h4>
          <h4 className="mt-5 text-xl font-semibold text-gray-800">HAPPY BIRTHDAY DEAR UNKNOWN HAPPY BIRTHDAY TO YOUUUUUUUUU</h4>
        </div>
        <MintForm />
        <div className="bg-gray-800 mt-20 p-4 rounded-lg text-center text-white flex flex-col items-center">
          <h2 className="flex text-2xl font-bold mb-2"> Gib gift? </h2> 
          <h3 className="flex text-lg font-semibold mb-4"><img src="https://cdn3.emoji.gg/emojis/9176_pepelove.gif" width="28px" height="28px" alt="pepelove" className="mr-1.5"/>Here is where you can give a gift if you would like<img src="https://cdn3.emoji.gg/emojis/9176_pepelove.gif" width="28px" height="28px" alt="pepelove" className="ml-2"/></h3>
          <p className="mb-5">During my birthday I will be raffling off NFTs to token hodlers</p>
          <div className="flex justify-between mb-4">
            <input placeholder="Gift Native Token" type="text" id="eth-donation" className="w-1/8 rounded-full px-4 py-2 bg-gray-900 text-white" />
          </div>
          <div className="flex justify-between mb-4">
            <input placeholder="Gift NFT" type="text" id="nft-donation" className="w-1/8 rounded-full px-4 py-2 bg-gray-900 text-white" />
          </div>
          <button className="bg-gray-600 px-4 py-2 rounded-full shadow-lg text-xl font-bold">Send</button>
        </div>
      </div>
      <div class="grid grid-cols-10 gap-5">
        <img width="256px" height="256px" src={wow}/>
        <img width="256px" height="256px" src={topg}/>
        <img width="256px" height="256px" src={degen}/>
        <img width="256px" height="256px" src={free}/>
        <img width="256px" height="256px" src={king}/>
        <img width="256px" height="256px" src={whale}/>
        <img width="256px" height="256px" src={gm}/>
        <img width="256px" height="256px" src={bj}/>
        <img width="256px" height="256px" src={wow}/>
        <img width="256px" height="256px" src={topg}/>
        <img width="256px" height="256px" src={degen}/>
        <img width="256px" height="256px" src={free}/>
        <img width="256px" height="256px" src={king}/>
        <img width="256px" height="256px" src={whale}/>
        <img width="256px" height="256px" src={gm}/>
        <img width="256px" height="256px" src={bj}/>
        <img width="256px" height="256px" src={wow}/>
        <img width="256px" height="256px" src={topg}/>
        <img width="256px" height="256px" src={degen}/>
        <img width="256px" height="256px" src={free}/>
        <img width="256px" height="256px" src={king}/>
        <img width="256px" height="256px" src={whale}/>
        <img width="256px" height="256px" src={gm}/>
        <img width="256px" height="256px" src={bj}/>
        <img width="256px" height="256px" src={wow}/>
        <img width="256px" height="256px" src={topg}/>
        <img width="256px" height="256px" src={degen}/>
        <img width="256px" height="256px" src={free}/>
        <img width="256px" height="256px" src={king}/>
        <img width="256px" height="256px" src={whale}/>
        <img width="256px" height="256px" src={gm}/>
        <img width="256px" height="256px" src={bj}/>
        <img width="256px" height="256px" src={wow}/>
        <img width="256px" height="256px" src={topg}/>
        <img width="256px" height="256px" src={degen}/>
        <img width="256px" height="256px" src={free}/>
        <img width="256px" height="256px" src={king}/>
        <img width="256px" height="256px" src={whale}/>
        <img width="256px" height="256px" src={gm}/>
        <img width="256px" height="256px" src={bj}/>
        <img width="256px" height="256px" src={wow}/>
        <img width="256px" height="256px" src={topg}/>
        <img width="256px" height="256px" src={degen}/>
        <img width="256px" height="256px" src={free}/>
        <img width="256px" height="256px" src={king}/>
        <img width="256px" height="256px" src={whale}/>
        <img width="256px" height="256px" src={gm}/>
        <img width="256px" height="256px" src={bj}/>
        <img width="256px" height="256px" src={wow}/>
        <img width="256px" height="256px" src={topg}/>
        <img width="256px" height="256px" src={degen}/>
        <img width="256px" height="256px" src={free}/>
        <img width="256px" height="256px" src={king}/>
        <img width="256px" height="256px" src={whale}/>
        <img width="256px" height="256px" src={gm}/>
        <img width="256px" height="256px" src={bj}/>
        <img width="256px" height="256px" src={wow}/>
        <img width="256px" height="256px" src={topg}/>
        <img width="256px" height="256px" src={degen}/>
        <img width="256px" height="256px" src={free}/>
        <img width="256px" height="256px" src={king}/>
        <img width="256px" height="256px" src={whale}/>
        <img width="256px" height="256px" src={gm}/>
        <img width="256px" height="256px" src={bj}/>
        <img width="256px" height="256px" src={wow}/>
        <img width="256px" height="256px" src={topg}/>
        <img width="256px" height="256px" src={degen}/>
        <img width="256px" height="256px" src={free}/>
        <img width="256px" height="256px" src={king}/>
        <img width="256px" height="256px" src={whale}/>
        <img width="256px" height="256px" src={gm}/>
        <img width="256px" height="256px" src={bj}/>
        <img width="256px" height="256px" src={wow}/>
        <img width="256px" height="256px" src={topg}/>
        <img width="256px" height="256px" src={degen}/>
        <img width="256px" height="256px" src={free}/>
        <img width="256px" height="256px" src={king}/>
        <img width="256px" height="256px" src={whale}/>
        <img width="256px" height="256px" src={gm}/>
        <img width="256px" height="256px" src={bj}/>
        
        
        
      </div>
    </div>
  );
}



export default App;
