import React from 'react'

function Home() {
  <div id="background-blobs">
  <div className="blob blob1"></div>
  <div className="blob blob2"></div>
  <div className="blob blob3"></div>
</div>
  return (


    
    <div className='max-w-5xl mx-auto p-6 bg-white rounded-3xl shadow-lg mt-16 z-10'>
      {/* Main horizontal layout */}
      <div className='flex gap-8'>
        {/* Left Column: Targets and Meals */}
        <div className='flex flex-col flex-1 gap-6'>
          <div>

            <section className='bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-6 mb-6 text-white font-semibold'>
  <h2 className='text-xl font-bold mb-4'>Today's target</h2>
  <div className='flex gap-6'>
    <div className="bg-red-400 rounded-lg p-4 flex flex-col items-center w-32 shadow-md ">
      <span className='text-3xl'>🔥</span>
      <h2 className="text-xl mt-2">Calories</h2>
      <p className="text-2xl font-bold mt-1">2100</p>
    </div>
    <div className='bg-yellow-400 rounded-lg p-4 flex flex-col items-center w-32 shadow-md'>
      <span className="text-3xl">🟡</span>
      <h2 className="text-xl mt-2">Protein</h2>
      <p className="text-2xl font-bold mt-1">110 g</p>
    </div>
    <div className='bg-green-400 rounded-lg p-4 flex flex-col items-center w-32 shadow-md'>
      <span className="text-3xl">✔️</span>
      <h2 className="text-xl mt-2">Carbs</h2>
      <p className="text-2xl font-bold mt-1">140 g</p>
    </div>
  </div>
</section>

          </div>
          
          {/* Meals */}
          <section className='flex justify-between gap-6 mb-6'>
            <div className='bg-yellow-200 rounded-xl p-5 w-1/3 shadow flex flex-col items-center'>
              <div className="text-4xl mb-2">🥣</div>
              <h3 className="font-semibold text-lg mb-1">Breakfast</h3>
              <p className="text-center">Oats, Milk<br />Banana</p>
            </div>
            <div className='bg-pink-200 rounded-xl p-5 w-1/3 shadow flex flex-col items-center'>
              <div className="text-4xl mb-2">🍞</div>
              <h3 className="font-semibold text-lg mb-1">Lunch</h3>
              <p className="text-center">Paneer<br />2 Rotis, Curd</p>
            </div>
            <div className='bg-purple-300 rounded-xl p-5 w-1/3 shadow flex flex-col items-center'>
              <div className="text-4xl mb-2">🍲</div>
              <h3 className="font-semibold text-lg mb-1">Dinner</h3>
              <p className="text-center">Rajma<br />Rice</p>
            </div>
          </section>
        </div>
        
        {/* Right Column: Workout */}
        <div className='w-1/3 mt-10'>
          <section className='bg-blue-300 rounded-xl p-5 shadow text-white w-full max-w-md '>
            <h3 className='font-semibold text-xl mb-3'>Workout</h3>
            <ul className='space-y-2'>
              <li className='flex items-center gap-2'>
                <span className="text-green-400 text-2xl">✔️</span> Goblet Squat
              </li>
              <li className='flex items-center gap-2'>
                <span className="text-green-400 text-2xl">✔️</span> Lat-pull down
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-green-400 text-2xl'>✔️</span> Dumbell press
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-green-400 text-2xl'>✔️</span> Romanian Deadlift
              </li>
            </ul>
            <div className="mt-5 flex justify-center">
              <div className="w-20 h-20 bg-blue-400 rounded-xl shadow-md" />
            </div>
           
          </section>
           <p className="mt-3 text-sm font-black text-gray-800 text-center">
              Close to target is fine (±10%).
            </p>
        </div>
      </div>
    </div>
  )
}

export default Home
