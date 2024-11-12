import React, { useEffect, useState } from 'react'
import axios from 'axios'

import ReceiverCard from './ReceiverCard'


function Receive() {
  const [donars, setDonars] = useState([])
  const [search, setSearch] = useState('')

  let handleSearch = (e) =>{
    setSearch(e.target.value)
  }
  
  useEffect(()=>{
    axios.get(`http://localhost:3001/donars`)
      .then(function(res) {
        const currentDonars = res.data;
        const expiredDonars = currentDonars.filter(donar => {
          const expiryDate = new Date(donar.expirydate);
          const today = new Date();
          return expiryDate < today;
        });

        expiredDonars.forEach(donar => {
          axios.delete(`http://localhost:3001/donars/${donar._id}`)
            .then(function(res) {
              // confirm("Are u sure!!!")
              alert("Your request sent successfully");
            })
            .catch(function(error) {
              console.error(`Error deleting donor: ${error}`);
            });
        });

        const validDonars = currentDonars.filter(donar => {
          const expiryDate = new Date(donar.expirydate);
          const today = new Date();
          return expiryDate >= today;
        });

        setDonars(validDonars);
    },[donars])
  
  },[])

  return (
    <div className='bg-cover bg-center h-[500%]' style={{backgroundImage:`url(https://media.istockphoto.com/id/1711427615/photo/the-help-of-volunteers-helps-to-donate-free-food-to-the-starving-people.jpg?s=612x612&w=0&k=20&c=t86Uojx14U4Ynvohmsd-GgHRBN-B5OHXHFNu7_a5SKQ=)`}}>
      <div className='h-full w-full bg-gray-900/75 flex flex-col items-center '>
      <div className='bg-rosepink w-2/4 h-12 my-4 border-2 border-black' style={{ clipPath:'polygon(100% 0%, 93% 50%, 100% 99%, 0% 100%, 7% 50%, 0% 0%)'}}>
            <p className="text-3xl text-black font-bold p-2 flex items-center justify-center">
              Available donars
            </p>
      </div>
      <div className='flex items-center justify-center'>
          <input onChange={handleSearch} type="text" placeholder='Search for cities' className='h-[3rem] w-[18rem] bg-white outline-none rounded-md px-4 hover:scale-110 duration-300 hover:cursor-pointer' />
      </div>
      <div className=' flex flex-wrap items-center gap-2 m-5'>

        {donars.filter((donarob)=>{
                  return donarob.city.toLowerCase().includes(search.toLowerCase())
              }).map((donarob)=>{
                return <ReceiverCard _id={donarob._id} name={donarob.name} email={donarob.email} phone={donarob.phone} city={donarob.city} district={donarob.district} state={donarob.state} quantity={donarob.quantity} expirydate={donarob.expirydate}  setDonars={setDonars} />
              })}
      </div>
      </div>
    </div>
  )
}

export default Receive
