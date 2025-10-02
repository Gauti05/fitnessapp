import React from 'react'

function Profile() {
  return (
    <div className='max-w-4xl mx-auto mt-12 bg-white rounded-2xl shadow-lg p-8'>
     <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
{/* /body section */}
<div className='bg-orange-200 rounded-xl shadow p-0 pb-4'>
<div className='px-6 py-3 rounded-t-xl bg-orange-300 font-bold text-lg text-gray-800'>body</div>

<div className='px-6 pt-4'>
<label className='block mb-2 font-semibold'>AGE</label>
<input className='border border-blue-200 rounded-lg px-3 py-2 w-full' type='number' placeholder='enter age'/>

<div className='flex gap-4 mb-4'>
<div>
  <label className='block mb-2 font-semibold'>Height (cm)</label>
  <input className='border border-blue-200 rounded-lg px-3 py-2 w-full' type="number" placeholder="Enter height"/>
</div>

<div>
  <label className="block mb-2 font-semibold">Weight (kg)</label>
   <input className="border border-blue-200 rounded-lg px-3 py-2 w-full" type="number" placeholder="Enter weight" />
</div>
</div>

<div className='flex items-center gap-5 mb-2'>
  <span className='font-semibold mr-2'>Gender: </span>
   <label className="inline-flex items-center">
                <input type="radio" name="gender" className="accent-purple-500" />
                <span className="ml-2">M</span>
              </label>

         <label className="inline-flex items-center">
                <input type="radio" name="gender" className="accent-purple-500" />
                <span className="ml-2">F</span>
              </label>     

</div>
</div>
</div>


{/* /goal section */}

<div className='bg-pink-200 rounded-xl shadow p-0 pb-4'>
  <div className='px-6 py-3 rounded-t-xl bg-pink-300 font-bold text-lg text-gray-800'>Goal</div>
<div className='px-6 pt-4'> 
{["lose fat", "Muscle gain", "stay fit", "atheletic"].map(opt => (
  <label key={opt} className='flex items-center mb-4'>
    <input type="radio" name="goal1" className="accent-purple-500" />
                <span className="ml-2 text-gray-800 font-medium">{opt}</span>
  </label>
))}
</div>
</div>

{/* goal-sections-2 */}

<div className='bg-purple-200 rounded-xl shadow p-0 pb-4'>
<div className='px-6 py-3 rounded-t-xl bg-pink-300 font-bold text-lg text-gray-800'>any health-issues</div>
<div className='px-6 pt-4'>
{["diabites",'body-pain', 'heart-disease', 'anyother', 'nonde'].map(opt => (
  <label key={opt} className='flex items-center mb-4'>
    <input type="radio" name="goal1" className="accent-purple-500" />
                <span className="ml-2 text-gray-800 font-medium">{opt}</span>
  </label>
))}
</div>
</div>

{/* diet and trainnig session */}

<div className='bg-green-200 rounded-xl shadow p-0 pb-4'>
  <div className='px-6 py-3 rounded-t-xl bg-green-300 font-bold text-lg text-gray-800'>Diet and Trainnig</div>
  <div className='px-6 pt-4'>
<label className='block mb-2 font-semibold'>Diet</label>
<select className='border border-blue-200 rounded-lg px-3 py-2 w-full mb-4'>
  <option value="">Select Diet Preference</option>
  <option value="veg">Vegetarian</option>
  <option value="non-veg">Non-Vegetarian</option>
  <option value="vegan">Vegan</option>

</select>

<label className="block mb-2 font-semibold">Workout-prefrence</label>
            <select className="border border-blue-200 rounded-lg px-3 py-2 w-full mb-4">
              <option>Gym</option>
              <option>Home</option>
              <option>open-park</option>
            </select>

 <label className="block mb-2 font-semibold">Workout-Duration</label>
            <select className="border border-blue-200 rounded-lg px-3 py-2 w-full mb-4">
              <option>30 minutes</option>
              <option>60 minutes</option>
              <option>90 minutes</option>
              <option>or-more</option>
            </select>

            <button className="px-6 py-2 mt-2 w-full rounded-lg bg-purple-600 text-white font-bold shadow hover:bg-purple-700 transition">Save</button>
  </div>

</div>

 </div>
    </div>
  )
}

export default Profile
