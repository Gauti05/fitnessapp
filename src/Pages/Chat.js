import React from 'react'
import { useState } from 'react';

function Chat() {

const [messages,setMessages] = useState([
  { text: "Here are some diet tips to help you reach your goal.", type: "bot" },
    { text: "Thank you!", type: "user" },
    { text: "Sure! Focus on whole foods and drink plenty of water.", type: "bot" },
    { text: "Got it!", type: "user" },
    { text: "Consider meal prepping to save time during the week.", type: "bot" }
]);

const [input, setInput] = useState("");

//Add new user message 
const handleSend = () =>{
  if(input.trim()){
    setMessages([...messages, {text:input, type:"user"}]);
    setInput("");
  }
}

//handle enter key
const handleKeyDown = (e)=>{
  if(e.key === 'Enter'){
    handleSend();
  }
}

  return (
    <div className='p-10'>
<div className='grid grid-cols-1 md:grid-cols-[350px_1fr] gap-8'>
{/* sidebar with quick tips */}
<div className='flex md:block justify-center'>
<div className='bg-red-300 rounded-xl py-8 px-6 flex flex-col items-center space-y-6 w-[270px] '>
<div className='text-2xl font-bold text-white mb-2'>quick-tips</div>
<button className="w-full py-2 rounded-lg bg-gradient-to-r from-orange-300 to-orange-100 text-white font-semibold mb-2 border border-white shadow">
              Diet
            </button>
 <button className='w-full py-2 rounded-lg bg-cyan-400 text-white font-semibold mb-2 border border-white shadow'>
  Workout
  </button>   
  <button className="w-full py-2 rounded-lg bg-purple-500 text-white font-semibold border border-white shadow">
              Motivation
            </button>        
</div>
</div>
{/* chat area */}
<div className='flex flex-col items-stretch h-[470px]'>
<div className='flex-1 bg-white rounded-xl shadow border border-gray-200 p-7 flex flex-col space-y-4 overflow-y-auto'> 
{messages.map((msg,idx) => (
  <div key={idx} className={`max-w-[65%] ${
    msg.type === "bot"
    ? "bg-purple-100 text-gray-700 rounded-xl px-4 py-2 self-start"
    : "bg-yellow-200 text-gray-800 rounded-xl px-4 py-2 self-end text-right"
  }`}>
{msg.text}
  </div>
))}

</div>
{/* input */}

<div className='flex mt-4 items-center'>
  <input
  className='flex-1 border border-gray-200 rounded-lg px-4 py-3 outline-none'
  type='text'
  placeholder='Type your message...'
  value={input}
   onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
  />

   <button
              className="ml-4 px-8 py-3 bg-purple-500 text-white rounded-lg font-semibold shadow transition hover:bg-purple-600"
              onClick={handleSend}
            >
              Send
            </button>

</div>

</div>
</div>
     
      
    </div>
  )
}

export default Chat
