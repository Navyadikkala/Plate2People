import React from 'react'
import {Link} from 'react-router-dom'
import Card from './Card'
import Onethirdimg from '../images/Onethirdimg.jpeg'
import layers_img from '../images/layers_img.png'
import donate_img from '../images/donate.png'
import recieve_img from '../images/recieve_logo.jpg'
import stopwaste_img from '../images/stop_waste.jpg'

function Home({isLoggedIn}) {

  return (
    <div>
      <div className='h-[40vh] md:h-[85vh] bg-cover bg-center' style={{backgroundImage:`url(https://images.squarespace-cdn.com/content/v1/60795610b05e0b4b67af086c/f7c6092c-b14b-4d58-b8ed-61ae5eada0ed/Daniel_fast_page_pic.jpeg?format=750w)`}}>
        <div className='h-full w-full bg-gray-900/75'>
            <div className='flex flex-col items-center text-center p-20'>
              <div className='text-8xl text-white font-bold flex flex-col font-cur'><span>Let's start </span><span>saving </span><span className='text-rosepink bold italic py-4'>FOOD</span></div>
              <div className='flex flex-row p-1 space-x-8'>
                <div className='h-[40px] w-[120px] bg-white rounded-full font-merinda hover:scale-110 duration-300 hover:cursor-pointer hover:bg-rosepink px-1 py-2 '>{isLoggedIn?<Link to="/donate">Donate now</Link>:<Link to="/login">Donate now</Link>}</div>
                <div className='h-[40px] w-[120px] bg-white rounded-full font-merinda  hover:scale-110 duration-300 hover:cursor-pointer hover:bg-rosepink px-1 py-2  '>{isLoggedIn?<Link to="/receive">Receive now</Link>:<Link to="/login">Receive now</Link>}</div>
              </div>
            </div>
        </div>
      </div>
      <div>
      <div id="vision" className='flex flex-col items-center text-center h-[500px] w-full bg-cover' style={{backgroundImage:`url(${layers_img})`}}>
        <div className='flex flex-col items-center text-center w-full h-[230px] text-white space-y-8 relative' >
            <h1 className='text-3xl font-merinda pt-10 hover:scale-110 duration-300 text-rosepink hover:cursor-pointer'>WHY WE'RE HERE...</h1>
            <h4 className='text-xl'>Our mission? To make sure good food gets eaten, not wasted. <br />
                Every day, delicious, fresh food goes to waste at functions, birthday parties and family parties.<br />
                The Plate2People lets donars inform about the surplus food they have and will be able to share their address <br />
                so that the needy organizations may collect the food from that addres after accepting the donation.</h4>
            <h3 className='text-2xl text-green font-bold italic'>Together, we can be the generation that ends global hunger.</h3>
        </div>

        <div className=' h-[550px] w-[800px] flex flex-row items-center pt-5 mt-52'>
          <div className='h-[350px] w-[400px] flex flex-col justify-center items-center text-5xl text-center font-roboto hover:scale-105 duration-300  hover:cursor-pointer'>MORE THAN 1/3 <br />OF FOOD <br />IS WASTED.
              <div className='text-xl pt-8 font-bold italic text-rosepink hover:scale-110 duration-300'>AND WE WANT TO CHANGE THAT</div>
          </div>
          <div className='h-[350px] w-[400px] flex justify-center rounded-full hover:scale-105 duration-300 hover:cursor-pointer'><img src={Onethirdimg} alt="Onethirdfoodimg" /></div>
        </div>
        <div id="motto" className='bg-gray-200 h-[550px] w-full flex flex-col items-center justify-center space-y-10 mt-12 mb-16 p-16'>
          <div className='bg-black w-2/4 h-24 mt-2' style={{ clipPath:'polygon(100% 0%, 93% 50%, 100% 99%, 0% 100%, 7% 50%, 0% 0%)'}}>
            <p  className="text-3xl text-rosepink font-bold p-2">
              OUR MOTTO
            </p>
            <div className='text-white text-xl'>It's time to Share more, Care more and Waste less!!</div>
          </div>
          <div className='flex flex-row space-x-10 mt-16'>
            <Card title="Card1" image={donate_img} body="Holding a party or function? Donate the leftover food to a local organization"/>
            <Card title="Card1" image={recieve_img} body="Look for the donars nearby your city,who are looking forward to donate their surplus food"/>
            <Card title="Card1" image={stopwaste_img} body="Join us in limiting food wastage and ending the hunger,because we together can make it happen!!"/>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
export default Home
