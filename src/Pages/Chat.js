import React, { useState } from 'react';

function Chat() {
  const [messages, setMessages] = useState([
    { text: "Here are some diet tips to help you reach your goal.", type: "bot" },
    { text: "Thank you!", type: "user" },
    { text: "Sure! Focus on whole foods and drink plenty of water.", type: "bot" },
    { text: "Got it!", type: "user" },
    { text: "Consider meal prepping to save time during the week.", type: "bot" }
  ]);

  const [input, setInput] = useState("");

  // Add new user message 
  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, type: "user" }]);
      setInput("");
    }
  }

  // Handle enter key
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  }

  return (
    <div className='px-2 py-6 sm:p-6 md:p-10'>
      <div className='grid grid-cols-1 md:grid-cols-[320px_1fr] gap-4 md:gap-8'>
        {/* Sidebar */}
        <div className='mb-4 md:mb-0 flex md:block justify-center'>
          <div className='w-full md:w-[270px] bg-red-300 rounded-xl py-8 px-6 flex flex-col items-center space-y-6'>
            <div className='text-2xl font-bold text-white mb-2'>Quick Tips</div>
            <button className="w-full py-2 rounded-lg bg-gradient-to-r from-orange-300 to-orange-100 text-white font-semibold border border-white shadow">
              Diet
            </button>
            <button className='w-full py-2 rounded-lg bg-cyan-400 text-white font-semibold border border-white shadow'>
              Workout
            </button>
            <button className="w-full py-2 rounded-lg bg-purple-500 text-white font-semibold border border-white shadow">
              Motivation
            </button>
          </div>
        </div>
        {/* Chat area */}
        <div className='flex flex-col h-[400px] sm:h-[470px] items-stretch'>
          <div className='flex-1 bg-white rounded-xl shadow border border-gray-200 p-4 sm:p-7 flex flex-col space-y-4 overflow-y-auto'>
            {messages.map((msg, idx) => (
              <div key={idx} className={`max-w-[90%] sm:max-w-[65%] ${
                msg.type === "bot"
                  ? "bg-purple-100 text-gray-700 rounded-xl px-4 py-2 self-start"
                  : "bg-yellow-200 text-gray-800 rounded-xl px-4 py-2 self-end text-right"
              }`}>
                {msg.text}
              </div>
            ))}
          </div>
          {/* Input and send button */}
          <div className='flex flex-col sm:flex-row gap-2 mt-2 sm:mt-4 items-stretch'>
            <input
              className='flex-1 border border-gray-200 rounded-lg px-4 py-3 outline-none'
              type='text'
              placeholder='Type your message...'
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className="px-8 py-3 bg-purple-500 text-white rounded-lg font-semibold shadow hover:bg-purple-600 transition w-full sm:w-auto"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;

