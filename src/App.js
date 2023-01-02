import logo from './logo.svg';
import './App.css';
import { MintForm } from "./MintForm.js";

function App() {
  return (
    <div className="bg-blue-500 min-h-screen">
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
        </div>
      </div>
      <div className="container mx-auto p-4 mt-4">
        <div className="text-center mb-4">
          <h1 className="text-5xl font-bold text-gray-800">UNKNOWN's 21st Birthday</h1>
          <p className="text-xl font-semibold text-gray-800"></p>
        </div>
        <MintForm />
        <div className="bg-gray-800 mt-20 p-4 rounded-lg text-center text-white flex flex-col items-center">
          <h2 className="flex text-2xl font-bold mb-2"><img src="https://cdn3.emoji.gg/emojis/9176_pepelove.gif" width="28px" height="28px" alt="pepelove" className="mr-1.5"/> Gib gift? <img src="https://cdn3.emoji.gg/emojis/9176_pepelove.gif" width="28px" height="28px" alt="pepelove" className="ml-2"/></h2> 
          <p className="text-lg font-semibold mb-4">Here is where you can give a gift if you would like :pepelove:</p>
          
          <div className="flex justify-between mb-4">
            <input placeholder="Ethereum Gift" type="text" id="eth-donation" className="w-1/8 rounded-full px-4 py-2 bg-gray-900 text-white" />
          </div>
          <div className="flex justify-between mb-4">
            <input placeholder="NFT Gift" type="text" id="nft-donation" className="w-1/8 rounded-full px-4 py-2 bg-gray-900 text-white" />
          </div>
          <button className="bg-gray-600 px-4 py-2 rounded-full shadow-lg text-xl font-bold">Send</button>
        </div>
      </div>
    </div>
  );
}



export default App;
