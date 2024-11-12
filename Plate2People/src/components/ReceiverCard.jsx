import {React,useState,useEffect} from 'react'
import axios from 'axios';
import emailjs from '@emailjs/browser';

function ReceiverCard({ _id, name, email, phone, city, district, state, quantity, expirydate, setDonars }) {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3001/useremail`)
      .then(res => {
        console.log('User email response:', res.data); // Log response to check structure
        setUserEmail(res.data.email);
      })
      .catch(err => console.log('Error fetching user email:', err));
  }, [userEmail]);

  const HandleCollect = () => {
   
   
    
 
    console.log('Sending email to:', userEmail);
  
    axios.delete(`http://localhost:3001/donars/${_id}`)
      .then(() => {
        confirm("Are you sure!!")
        alert("Your Request has been Received");
        console.log(`Deleted expired donor: ${name}`);
        
        setDonars(prevDonars => prevDonars.filter(donar => donar._id !== _id));
        
        const serviceId = 'service_1z6g35a';
        const templateId = 'template_2de6mgd';
        const userId = '5dCYy2nTf2hjOK451';
        const templateParams = {
          to_name: name,
          to_email: userEmail,
          message: `Thank you. We have received your Request of accepting ${quantity} units from ${city}, ${district}, ${state}.
             Here is the donar contact details - 
             Name        : ${name}
             Phone number:${phone}`,
        };
  
        emailjs.send(serviceId, templateId, templateParams, userId)
          .then(() => {
            console.log('SUCCESS!');
          })
          .catch((error) => {
            console.log('FAILED...', error.text);
          });
      })
      .catch((error) => {
        console.error(`Error deleting donor: ${error}`);
      });
  }
  return (
      <div className="w-[320px] h-[330px] bg-white relative hover:cursor-pointer hover:scale-105 duration-300 px-6 py-3 m-2 overflow-hidden">
            <h2 className="text-2xl font-bold mb-4">Donar Information</h2>
            <div class="mb-4">
                  <p className="text-gray-700"><span className="font-semibold">Name:</span> {name}</p>
                  <p className="text-gray-700"><span className="font-semibold">Email:</span> {email}</p>
                  <p className="text-gray-700"><span className="font-semibold">City:</span> {city}</p>
                  <p className="text-gray-700"><span className="font-semibold">District:</span> {district}</p>
                  <p className="text-gray-700"><span className="font-semibold">State:</span> {state}</p>
                  <p className="text-gray-700"><span className="font-semibold">Quantity:</span> {quantity}</p>
                  <p className="text-gray-700"><span className="font-semibold">Expiry Date:</span> { expirydate.split('T')[0]}</p>
            </div>
            <div onClick={HandleCollect} className='bg-green absolute right-0 bottom-0 px-8 py-1 m-4 mx-5'>
              Collect
            </div>
      </div>
  )
}

export default ReceiverCard

