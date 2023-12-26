import React from 'react'
const App = () => {
  return (
    <>
    <div className='w-full h-screen bg-slate-100  overflow-hidden'>

<nav className=' h-14 flex items-center justify-between px-8 ' >
{/* bg-stone-400 */}
<div className="logo h-12 w-36 flex items-center justify-center ">
  <img src="https://img.lovepik.com/element/40147/3126.png_1200.png" alt="" className='h-10'/>
  <h1 className='font-sans text-3xl  text-green-500'>Niled</h1>
</div>

<ul className='flex text-xl gap-5 font-bold'>
  <li >Home</li>
  <li>About us</li>
  <li>Services</li>
  <li>Contact us</li>
</ul>
<button className='h-10 w-32 bg-green-500 text-xl rounded-lg font-bold'>Get Started</button>

</nav>

<div className="container h-screen w-full flex  ">

  <div className="container-left  h-full w-1/2 px-8 ">
  {/* bg-amber-300  bg-white-500*/}
<h1 className='text-5xl font-bold mt-12'>Turning innovative ideas into amazing solutions </h1>

<p className='w-96  leading-5 mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, tempore doloremque. Doloremque impedit dignissimos magni ratione, alias ad labore pariatur.</p>
<button className='h-10 w-36 bg-green-500 text-xl rounded-lg mt-4 font-bold '>Our Solutions</button>

<div className="contact-box h-36 mt-5 shadow-sm shadow-black">

<h3 className='pl-4 pt-2 font-bold font-sans text-xl'>Contact Us:</h3>

<input  type="text" placeholder='Name' className='ml-4 mt-2 h-8 w-52 border-solid border-black border-b-2 bg-inherit pl-4 text-xl outline-0' />

<input type="email" placeholder='Email' className='ml-4 mt-2 h-8 w-52 border-solid border-black border-b-2 bg-inherit pl-4 text-xl outline-0' />

<input type="number" placeholder='91+ Phone' className='ml-32 mt-4 h-8 w-52 border-solid border-black border-b-2 bg-inherit pl-4 text-xl outline-0' />
</div>

  </div>


  <div className="container-right h-full w-1/2  relative  ">
  {/* bg-cyan-400 */}
    <div className="shape1 h-48 w-72 rounded-full top-20  left-14 absolute bg-[url(https://media.istockphoto.com/id/1181196053/photo/smiling-indian-young-woman-sales-professional-arms-crossed-looking-at-camera-isolated-on-grey.webp?b=1&s=170667a&w=0&k=20&c=ktscmJuLmoGlzxIq23oiqUwGY69sjPW7RfAU_Tby6t4=)] bg-center bg-cover"></div>

    <div className="shape2 h-52 w-52 rounded-full  top-20 left-96 absolute bg-[url(https://cdn-icons-png.flaticon.com/512/2673/2673902.png)] bg-center bg-cover"></div>

    <div className="shape3 h-44 w-52 bg-fuchsia-500 rounded-s-3xl rounded-e-2xl absolute top-72 left-14 bg-[url(https://media.istockphoto.com/id/1223601220/photo/laptop-on-a-wooden-table-with-a-cactus-plant-home-office-concept.webp?s=170667a&w=0&k=20&c=dR1yQukqTXj8UaUHEO20Nzad3Zrg2vFphVhAxx1I1e8=)] bg-center bg-cover"></div>

    <div className="shape4 h-40 w-72 bg-red-300 rounded-full top-72  left-72 absolute mt-3 bg-[url(https://media.istockphoto.com/id/1519392705/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-thinking.jpg?s=612x612&w=0&k=20&c=FWxLqK0E0YL-7n5r-l93HidTeuyRoc2Q85Qn1TXolgg=)] bg-center bg-cover"></div>


<div className="icons h-10  w-44 top-4 left-2/3 absolute flex items-center justify-center  ">
<h6 className='text-2xl font-bold text-pink-500 '><i class="ri-instagram-line"></i></h6>
<h6 className='text-2xl font-bold ml-4 text-blue-700'><i class="ri-messenger-line"></i></h6>
<h6 className='text-2xl font-bold ml-4 text-red-500'><i class="ri-youtube-line"></i></h6>
<h6 className='text-2xl font-bold ml-4 text-emerald-500'><i class="ri-whatsapp-line"></i></h6>
</div>
  </div>
</div>













    </div>
    </>
  )
}

export default App