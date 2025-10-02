import React from 'react'


import { useState } from 'react';

const LinearChartSvg = (
    <svg width="100%" height="120%" viewBox='0 0 280 120'>
        <polyline 
        fill='none'
        stroke='#6366f1'
        strokeWidth='3'
        points='15,105 55, 85 95, 65 135, 75 175, 50 215, 85 255, 105'

        />
 {[105,85,65,75,50,85,105].map((y,i) =>
      <circle key={i} cx={15+40*i} cy={y} r="5" fill="#6366f1" />
    )}
 <line x1="15" y1="105" x2="255" y2="105" stroke="#e5e7eb" />
    </svg>
)


function Progress() {
    const [weight, setWeight] = useState('');
  return (
    <div className='p-10'>
<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
{/* today's entry card */}
<div className='bg-white rounded-xl shadow p-8 flex-1 mb-6'>
    <h2 className='text-xl font-bold mb-6'>Today's entry</h2>

    <label className='block mb-1 font-semibold'>Today's weight(kg)</label>
    <input className='border border-grey-500 rounded-lg px-4 py-2 w-full mb-5'
    type='number'
    value={weight}
    onChange={(e) => setWeight(e.target.value)}
    />
    <label className='block mb-3 font-semibold'>Workout done?</label>
    <div className='flex gap-2 mb-6'>
<button className="bg-cyan-600 text-white rounded-md px-8 py-2 font-semibold">Yes</button>
            <button className="bg-gray-100 text-gray-700 rounded-md px-8 py-2 font-semibold">No</button>
          
    </div>

      <button className="bg-purple-600 text-white w-full rounded-lg py-3 font-bold text-lg hover:bg-purple-700 transition">Save</button>



</div>

{/* chart and streak card */}
<div className='flex flex-col gap-8'>
{/* chart card */}
<div className='bg-white rounded-xl shadow p-8'>
<h2 className='text-xl font-bold mb-5'>weight Last 7 day's</h2>
<div className='w-full'>{LinearChartSvg}</div>
<div className='flex justify-between pt-2 px-1 text-gray-500 text-sm font-semibold'>
<span>Mon</span>
              <span>Tu</span>
              <span>We</span>
              <span>Thu</span>
              <span>Fu</span>
              <span>Sa</span>
              <span>Su</span>
</div>
</div>
{/* streak card */}
<div className='bg-white rounded-xl shadow p-6 flex items-center space-x-4'>
    <div className="text-3xl text-green-500 flex items-center">
              <svg width="32" height="32" fill="none"><circle cx="16" cy="16" r="16" fill="#34d399" /><path d="M13 16l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div>
              <span className="font-bold text-lg">Current Streak: 3 days</span>
              <div className="text-gray-600 mt-1 text-sm">This week: 3/4 workouts done</div>
            </div>

</div>
</div>
</div>
    </div>
   
  )
}

export default Progress
